import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useFadeInFadeOut = ({ threshold, rootMargin }) => {
    const [isInView, setIsInView] = useState(false);
    const [loadAnimationTime, setLoadAnimationTime] = useState(0);
    const targetEl = useRef(null);
    useEffect(() => {
        const observe = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setIsInView(entry.isIntersecting);
            if (entry.isIntersecting) {
                setLoadAnimationTime(loadAnimationTime + 1);
            }
        }, {
            threshold: threshold,
            rootMargin: rootMargin,
        })

        if (targetEl.current) {
            observe.observe(targetEl.current)
        }

        return () => {
            if (targetEl.current) {
                observe.unobserve(targetEl.current)
            }
        }
    }, [threshold, rootMargin]);
    return [isInView, loadAnimationTime, targetEl];
}

export default useFadeInFadeOut;
