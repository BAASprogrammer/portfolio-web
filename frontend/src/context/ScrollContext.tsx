import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollContextProps {
    scrollTo: (id: string) => void;
    containerRef: React.RefObject<HTMLDivElement | null>;
    activeSection: string | null;
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const autoScrollRef = useRef<string | null>(null);
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const scrollTo = (id: string) => {
        const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
        
        if (isDesktop && containerRef.current) {
            setActiveSection(id);
            autoScrollRef.current = id;
            const section = containerRef.current.querySelector<HTMLElement>(`#${id}`);
            section?.scrollIntoView({ behavior: "smooth" });
        } else {
            const sectionMobile = document.getElementById(id);
            sectionMobile?.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
        const root = isDesktop ? containerRef.current : null;
        const sections = root ? root.querySelectorAll<HTMLElement>("section[id]") : document.querySelectorAll<HTMLElement>("section[id]");

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find(entry => entry.isIntersecting);
                if (visible) {
                    const sectionId = visible.target.id;
                    if (autoScrollRef.current) {
                        if (sectionId === autoScrollRef.current) {
                            autoScrollRef.current = null;
                            setActiveSection(sectionId);
                        }
                        return;
                    }
                    setActiveSection(sectionId);
                }
            },
            {
                root,
                rootMargin: "-50% 0px -50% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <ScrollContext.Provider value={{ scrollTo, containerRef, activeSection }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error("useScroll must be used within a ScrollProvider");
    }
    return context;
};