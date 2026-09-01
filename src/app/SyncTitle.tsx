'use client';

import { useEffect } from 'react';

export function SyncTitle() {
  useEffect(() => {
    const sendTitle = () => {
      if (window.parent !== window) {
        window.parent.postMessage({ title: document.title }, '*');
      }
    };

    sendTitle();

    const observer = new MutationObserver(sendTitle);
    const titleElement = document.querySelector('head > title');
    if (titleElement) {
      observer.observe(titleElement, { subtree: true, characterData: true, childList: true });
    }

    return () => observer.disconnect();
  }, []);

  return null;
}