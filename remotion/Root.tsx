import { Composition, registerRoot } from 'remotion';
import { V0ShowcaseVideo } from './V0ShowcaseVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="V0ExplorerVideo"
        component={V0ShowcaseVideo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          appName: 'v0 Explorer',
          appUrl: 'https://v0-ethereal-explorer.vercel.app',
          screenshotPath: 'https://etherealsearch-showcase.vercel.app/v0-showcase/v0-explorer-fresh.png',
          gradient: 'from-emerald-400 to-cyan-400',
        }}
      />
      <Composition
        id="V0EyeVideo"
        component={V0ShowcaseVideo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          appName: 'v0 Eye',
          appUrl: 'https://v0-ethereal-eye.vercel.app',
          screenshotPath: 'https://etherealsearch-showcase.vercel.app/v0-showcase/v0-eye-fresh.png',
          gradient: 'from-yellow-400 to-red-400',
        }}
      />
      <Composition
        id="V0InsightVideo"
        component={V0ShowcaseVideo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          appName: 'v0 Insight',
          appUrl: 'https://v0-ethereal-insight.vercel.app',
          screenshotPath: 'https://etherealsearch-showcase.vercel.app/v0-showcase/v0-insight-fresh.png',
          gradient: 'from-violet-400 to-pink-400',
        }}
      />
    </>
  );
};

registerRoot(RemotionRoot);