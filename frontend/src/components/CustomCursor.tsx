import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isWindowFocused, setIsWindowFocused] = useState(true);

    // Position of the main cursor dot
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring animation for the outer circle
    const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = 
                target.tagName === 'BUTTON' || 
                target.tagName === 'A' || 
                target.closest('button') || 
                target.closest('a') ||
                window.getComputedStyle(target).cursor === 'pointer';
            
            setIsHovering(!!isClickable);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);
        const handleBlur = () => setIsWindowFocused(false);
        const handleFocus = () => setIsWindowFocused(true);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('blur', handleBlur);
        window.addEventListener('focus', handleFocus);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('blur', handleBlur);
            window.removeEventListener('focus', handleFocus);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [cursorX, cursorY, isVisible]);

    // Use opacity instead of returning null to keep motion values active
    const showCursor = isVisible && isWindowFocused;

    return (
        <div 
            className="fixed inset-0 pointer-events-none z-[9999] hidden md:block transition-opacity duration-500 isolate"
            style={{ opacity: showCursor ? 1 : 0 }}
        >
            {/* Trail Glow - Using radial gradient instead of blur filter to avoid rectangles */}
            <motion.div
                className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full"
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.04) 0%, rgba(236, 72, 153, 0) 65%)',
                }}
            />

            {/* Outer Ring */}
            <motion.div
                className="absolute top-0 left-0 rounded-full border border-pink-500/30 flex items-center justify-center"
                animate={{
                    width: isHovering ? 64 : 32,
                    height: isHovering ? 64 : 32,
                    backgroundColor: isHovering ? 'rgba(236, 72, 153, 0.1)' : 'rgba(236, 72, 153, 0)',
                }}
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                {/* Subtle Glow inside the ring */}
                <div className="w-full h-full rounded-full bg-linear-to-br from-pink-500/10 to-purple-500/10 blur-sm" />
            </motion.div>

            {/* Main Center Dot */}
            <motion.div
                className="absolute top-0 left-0 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_2px_rgba(236,72,153,1)]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
        </div>


    );
};

