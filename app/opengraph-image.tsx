import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  const gradientBg = 'linear-gradient(135deg, #0b1221 0%, #0b1221 40%, #0040a3 100%)';
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '64px',
          background: gradientBg,
          color: 'white'
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700 }}>Yize Xue</div>
        <div style={{ marginTop: 16, fontSize: 28, opacity: 0.9 }}>
          Full‑stack developer · Python · C++ · JS/TS
        </div>
        <div style={{ marginTop: 24, height: 4, width: 160, background: '#0066ff', borderRadius: 999 }} />
        <div style={{ position: 'absolute', right: 64, bottom: 48, fontSize: 24, opacity: 0.7 }}>
          github.com/tom-xue-dev
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}


