import { ImageResponse } from 'next/og'

export const alt = "Godfather's Bail Bonds | Houston, TX | 713-224-3600"
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0d0d0d',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 80px',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Gold top bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: '#C9A84C',
            display: 'flex',
          }}
        />

        {/* Gold bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: '#C9A84C',
            display: 'flex',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            background: '#C9A84C',
            color: '#000000',
            padding: '8px 28px',
            borderRadius: 4,
            fontSize: 15,
            fontWeight: 900,
            letterSpacing: '0.18em',
            marginBottom: 32,
          }}
        >
          Houston &amp; Harris County, TX
        </div>

        {/* Headline line 1 */}
        <div
          style={{
            display: 'flex',
            fontSize: 76,
            fontWeight: 900,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}
        >
          GODFATHER&apos;S
        </div>

        {/* Headline line 2 */}
        <div
          style={{
            display: 'flex',
            fontSize: 76,
            fontWeight: 900,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            marginBottom: 24,
          }}
        >
          BAIL BONDS
        </div>

        {/* Gold divider */}
        <div
          style={{
            width: 80,
            height: 4,
            background: '#C9A84C',
            borderRadius: 2,
            marginBottom: 24,
            display: 'flex',
          }}
        />

        {/* Phone */}
        <div
          style={{
            display: 'flex',
            fontSize: 32,
            color: '#C9A84C',
            fontWeight: 800,
            letterSpacing: '0.04em',
            marginBottom: 40,
          }}
        >
          713-224-3600 &bull; Available 24/7/365
        </div>

        {/* Trust items row */}
        <div style={{ display: 'flex', gap: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ display: 'flex', color: '#C9A84C', fontWeight: 900, fontSize: 20 }}>✓</div>
            <div style={{ display: 'flex', color: '#9ca3af', fontSize: 17 }}>Licensed &amp; Bonded</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ display: 'flex', color: '#C9A84C', fontWeight: 900, fontSize: 20 }}>✓</div>
            <div style={{ display: 'flex', color: '#9ca3af', fontSize: 17 }}>30+ Years Experience</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ display: 'flex', color: '#C9A84C', fontWeight: 900, fontSize: 20 }}>✓</div>
            <div style={{ display: 'flex', color: '#9ca3af', fontSize: 17 }}>License #74603</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
