'use client';

import { useEffect } from 'react';

interface AdBannerProps {
  slot: string;
  width?: number;
  height?: number;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
}

export default function AdBanner({ 
  slot,
  width = 728,
  height = 90,
  format = 'auto'
}: AdBannerProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className="my-4">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}