'use client';

import { useEffect } from 'react';

export default function AntiInspect() {
  useEffect(() => {
    // Disable klik kanan
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // Disable beberapa shortcut DevTools
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" || // F12
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) || // Ctrl+Shift+I/J/C
        (e.ctrlKey && e.key === "U") // Ctrl+U (view source)
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
    