import { useState, useEffect } from "react";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

    media.addEventListener("change", listener);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]); // Only runs when `query` changes

  return matches;
}

export default useMediaQuery;
