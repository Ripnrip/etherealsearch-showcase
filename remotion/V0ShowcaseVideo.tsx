import {
  AbsoluteFill,
  Img,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
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

  // Gradient colors based on app
  const gradientColors: Record<string, string> = {
    'from-emerald-400 to-cyan-400': 'linear-gradient(135deg, #34d399 0%, #22d3ee 100%)',
    'from-yellow-400 to-red-400': 'linear-gradient(135deg, #facc15 0%, #f87171 100%)',
    'from-violet-400 to-pink-400': 'linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)',
    'from-blue-400 to-purple-400': 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
  };

  const bgColor = gradientColors[gradient] || gradientColors['from-blue-400 to-purple-400'];

  // Features based on app
  const features: Record<string, string[]> = {
    'v0 Explorer': [
      'Multi-modal document search',
      'Engineering diagram analysis',
      'Semantic code search',
      'Blueprint intelligence',
    ],
    'v0 Eye': [
      'AI vision analysis',
      'Document intelligence',
      'Image recognition',
      'Real-time processing',
    ],
    'v0 Insight': [
      'RAG pipeline analytics',
      'Performance dashboards',
      'Query optimization',
      'Data visualization',
    ],
  };

  const appFeatures = features[appName] || features['v0 Explorer'];

  const getIcon = () => {
    if (appName.includes('Explorer')) return '🌌';
    if (appName.includes('Eye')) return '👁️';
    if (appName.includes('Insight')) return '📊';
    return '🔍';
  };

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Animated background glow */}
      <div
        style={{
          position: 'absolute',
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: bgColor,
          filter: 'blur(200px)',
          opacity: 0.2 + Math.sin(frame * 0.015) * 0.1,
          transform: `scale(${1 + Math.sin(frame * 0.02) * 0.15})`,
        }}
      />

      {/* Scene 1: Intro (0-5s) */}
      <Sequence from={0} durationInFrames={150}>
        <IntroScene appName={appName} getIcon={getIcon} bgColor={bgColor} frame={frame} fps={fps} />
      </Sequence>

      {/* Scene 2: Screenshot reveal (5-12s) */}
      <Sequence from={150} durationInFrames={210}>
        <ScreenshotScene
          appName={appName}
          screenshotPath={screenshotPath}
          bgColor={bgColor}
          frame={frame - 150}
          fps={fps}
        />
      </Sequence>

      {/* Scene 3: Features (12-20s) */}
      <Sequence from={360} durationInFrames={240}>
        <FeaturesScene
          appName={appName}
          features={appFeatures}
          bgColor={bgColor}
          frame={frame - 360}
          fps={fps}
        />
      </Sequence>

      {/* Scene 4: CTA (20-25s) */}
      <Sequence from={600} durationInFrames={150}>
        <CTAScene
          appName={appName}
          appUrl={appUrl}
          bgColor={bgColor}
          frame={frame - 600}
          fps={fps}
        />
      </Sequence>
    </AbsoluteFill>
  );
};

// Scene 1: Intro with logo and name
const IntroScene = ({ appName, getIcon, bgColor, frame, fps }: any) => {
  const logoScale = spring({ frame, fps, config: { damping: 12, stiffness: 200 } });
  const titleOpacity = interpolate(frame, [15, 35], [0, 1], { extrapolateLeft: 'clamp' });
  const titleY = interpolate(frame, [15, 35], [50, 0], { extrapolateLeft: 'clamp' });
  const subtitleOpacity = interpolate(frame, [35, 55], [0, 1], { extrapolateLeft: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30 }}>
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: 30,
            background: bgColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 60,
            transform: `scale(${logoScale})`,
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
          }}
        >
          {getIcon()}
        </div>
        <h1
          style={{
            fontSize: 90,
            fontWeight: 'bold',
            color: 'white',
            margin: 0,
            textShadow: '0 8px 40px rgba(0, 0, 0, 0.5)',
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          {appName}
        </h1>
        <p
          style={{
            fontSize: 32,
            color: 'rgba(255, 255, 255, 0.7)',
            margin: 0,
            opacity: subtitleOpacity,
          }}
        >
          AI-Powered Engineering Intelligence
        </p>
      </div>
    </AbsoluteFill>
  );
};

// Scene 2: Full screenshot with zoom effect
const ScreenshotScene = ({ appName, screenshotPath, bgColor, frame, fps }: any) => {
  const scale = spring({ frame, fps, config: { damping: 20, stiffness: 80 } });
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateLeft: 'clamp' });
  const zoom = 1 + frame * 0.001;

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: 1200,
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <div
          style={{
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 40px 80px rgba(0, 0, 0, 0.5)',
            border: '3px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Img
            src={screenshotPath}
            style={{
              width: '100%',
              transform: `scale(${zoom})`,
            }}
          />
        </div>
        <p
          style={{
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: 24,
            marginTop: 30,
          }}
        >
          {appName} Interface
        </p>
      </div>
    </AbsoluteFill>
  );
};

// Scene 3: Features list
const FeaturesScene = ({ appName, features, bgColor, frame, fps }: any) => {
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateLeft: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 80,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40, maxWidth: 1000 }}>
        <h2
          style={{
            fontSize: 60,
            fontWeight: 'bold',
            color: 'white',
            margin: 0,
            opacity: titleOpacity,
          }}
        >
          Key Features
        </h2>
        {features.map((feature: string, i: number) => {
          const featureFrame = frame - i * 20;
          const featureOpacity = interpolate(featureFrame, [0, 20], [0, 1], { extrapolateLeft: 'clamp' });
          const featureX = interpolate(featureFrame, [0, 20], [-100, 0], { extrapolateLeft: 'clamp' });
          const checkScale = spring({ frame: featureFrame, fps, config: { damping: 10, stiffness: 200 } });

          return (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 30,
                opacity: featureOpacity,
                transform: `translateX(${featureX}px)`,
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  background: bgColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 24,
                  transform: `scale(${checkScale})`,
                }}
              >
                ✓
              </div>
              <span style={{ fontSize: 36, color: 'white' }}>{feature}</span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// Scene 4: Call to action
const CTAScene = ({ appName, appUrl, bgColor, frame, fps }: any) => {
  const ctaScale = spring({ frame, fps, config: { damping: 12, stiffness: 150 } });
  const urlOpacity = interpolate(frame, [20, 40], [0, 1], { extrapolateLeft: 'clamp' });
  const pulse = 1 + Math.sin(frame * 0.1) * 0.05;

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 50 }}>
        <h2
          style={{
            fontSize: 70,
            fontWeight: 'bold',
            color: 'white',
            margin: 0,
            textShadow: '0 8px 40px rgba(0, 0, 0, 0.5)',
          }}
        >
          Try {appName} Today
        </h2>
        <div
          style={{
            padding: '24px 60px',
            background: bgColor,
            borderRadius: 60,
            color: 'white',
            fontSize: 36,
            fontWeight: 'bold',
            transform: `scale(${ctaScale * pulse})`,
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
          }}
        >
          Launch App →
        </div>
        <p
          style={{
            fontSize: 28,
            color: 'rgba(255, 255, 255, 0.6)',
            margin: 0,
            opacity: urlOpacity,
          }}
        >
          {appUrl}
        </p>
      </div>
    </AbsoluteFill>
  );
};
