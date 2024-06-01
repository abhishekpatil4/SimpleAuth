import { useState, useEffect } from 'react';

function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const documentChangeHandler = () => setMatches(mediaQueryList.matches);

        mediaQueryList.addListener(documentChangeHandler);
        documentChangeHandler();

        return () => {
            mediaQueryList.removeListener(documentChangeHandler);
        };
    }, [query]);

    return matches;
}

export default useMediaQuery;
