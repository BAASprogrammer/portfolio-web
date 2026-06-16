export interface ScrollContextProps {
    scrollTo: (id: string) => void;
    containerRef: React.RefObject<HTMLDivElement | null>;
    activeSection: string | null;
}
