'use client';

import Script from 'next/script';

export default function AdSenseScript() {
  return (
    <Script
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX"
      crossOrigin="anonymous"
      async
      strategy="afterInteractive"
    />
  );
}