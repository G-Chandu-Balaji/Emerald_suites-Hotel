import React, { useEffect, useRef } from "react";

export function useOutsideClick(
  handler,
  active = true,
  listenCapturing = true
) {
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (!active) return;
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
        console.log("clicked outside");
      }
    }
    document.addEventListener("click", handleClick, listenCapturing);
    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
    };
  }, [handler, listenCapturing, active]);

  return ref;
}
