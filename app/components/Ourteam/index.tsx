"use client"
import React, { useRef, useEffect } from 'react';

const Index = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null); // Explicitly specify the type of videoRef

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && videoRef.current) {
                    videoRef.current.play();
                } else if (videoRef.current) {
                    videoRef.current.pause();
                }
            });
        }, options);

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);
}

export default Index;
