// src/components/layout/sync-title.tsx
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function SyncTitle() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const sendTitle = () => {
      if (window.parent !== window) {
        window.parent.postMessage({ title: document.title }, '*');
      }
    };

    // 1. 每次路由或参数改变时，延迟一小会儿（等 Next.js 渲染完新标题）发送一次
    const timer = setTimeout(sendTitle, 50);

    // 2. 使用 MutationObserver 实时监听 <title> 标签的文本内容变动
    const titleElement = document.querySelector('head > title');
    let observer: MutationObserver | null = null;

    if (titleElement) {
      observer = new MutationObserver(sendTitle);
      observer.observe(titleElement, { 
        subtree: true, 
        characterData: true, 
        childList: true 
      });
    }

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [pathname, searchParams]); // 依赖路由和参数变化，确保切换分区必触发

  return null;
}