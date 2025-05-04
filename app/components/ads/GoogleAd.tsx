'use client';

interface GoogleAdProps {
  adSlot: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function GoogleAd({ adSlot, style = {}, className = "" }: GoogleAdProps) {
  return (
    <div className={`ad-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX" // Reemplaza con tu ID cuando lo tengas
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}