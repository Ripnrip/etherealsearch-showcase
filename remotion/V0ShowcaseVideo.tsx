import {
  AbsoluteFill,
  Img,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from 'remotion';

export const V0ShowcaseVideo = ({
  appName,
  appUrl,
  screenshotPath,
  gradient,
}: {
  appName: string;
  appUrl: string;
  screenshotPath: string;
  gradient: string;
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animations
  const logoScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 200 },
  });

  const titleOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const titleX = interpolate(frame, [20, 40], [-50, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const screenshotScale = spring({
    frame: frame - 30,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  const screenshotOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const urlOpacity = interpolate(frame, [60, 80], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const ctaScale = spring({
    frame: frame - 100,
    fps,
    config: { damping: 10, stiffness: 150 },
  });

  // Background gradient colors based on app
  const gradientColors: Record<string, string> = {
    'from-emerald-400 to-cyan-400': 'linear-gradient(135deg, #34d399 0%, #22d3ee 100%)',
    'from-yellow-400 to-red-400': 'linear-gradient(135deg, #facc15 0%, #f87171 100%)',
    'from-violet-400 to-pink-400': 'linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)',
    'from-blue-400 to-purple-400': 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
  };

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Animated background glow */}
      <div
        style={{
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: gradientColors[gradient] || gradientColors['from-blue-400 to-purple-400'],
          filter: 'blur(150px)',
          opacity: 0.3,
          transform: `scale(${0.8 + Math.sin(frame * 0.02) * 0.1})`,
        }}
      />

      {/* Main content container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 40,
          zIndex: 10,
        }}
      >
        {/* App name */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            opacity: titleOpacity,
            transform: `translateX(${titleX}px)`,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
              background: gradientColors[gradient] || gradientColors['from-blue-400 to-purple-400'],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 40,
              transform: `scale(${logoScale})`,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            }}
          >
            {appName.includes('Explorer') ? '🌌' : appName.includes('Eye') ? '👁️' : appName.includes('Insight') ? '📊' : '🔍'}
          </div>
          <h1
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            {appName}
          </h1>
        </div>

        {/* Screenshot */}
        <div
          style={{
            width: 900,
            height: 506,
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
            opacity: screenshotOpacity,
            transform: `scale(${Math.min(screenshotScale, 1)})`,
            border: '2px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Img
            src={screenshotPath}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* URL */}
        <p
          style={{
            fontSize: 24,
            color: 'rgba(255, 255, 255, 0.7)',
            margin: 0,
            opacity: urlOpacity,
          }}
        >
          {appUrl}
        </p>

        {/* CTA */}
        <div
          style={{
            padding: '16px 40px',
            background: gradientColors[gradient] || gradientColors['from-blue-400 to-purple-400'],
            borderRadius: 50,
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
            transform: `scale(${Math.min(ctaScale, 1)})`,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          }}
        >
          Try it now →
        </div>
      </div>
    </AbsoluteFill>
  );
};
