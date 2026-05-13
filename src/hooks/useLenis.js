import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * Hook para inicializar Lenis smooth scroll
 * @param {Object} options - Configuración de Lenis
 * @returns {React.MutableRefObject<Lenis|null>} Referencia a la instancia de Lenis
 */
export const useLenis = (options = {}) => {
    const lenisRef = useRef(null);
    const optionsRef = useRef(options);

    useEffect(() => {
        optionsRef.current = options;
    }, [options]);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
            ...optionsRef.current
        });

        lenisRef.current = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    return lenisRef;
};

export default useLenis;
