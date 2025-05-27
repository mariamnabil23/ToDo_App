import { useState, useEffect } from 'react';



const useTypewriter = (text, speed = 100, delay = 1500) => {

    const [displayed, setDisplayed] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {

            const timeout = setTimeout(() => {
                setDisplayed(prev => prev + text[index]);
                setIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else {

            const resetTimeout = setTimeout(() => {
                setDisplayed('');
                setIndex(0);
            }, delay);
            return () => clearTimeout(resetTimeout);
        }
        
    }, [index, text, speed, delay]);

    return displayed;
};

export default useTypewriter;
