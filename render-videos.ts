import { bundle } from '@remotion/bundler';
import { renderMedia, selectComposition } from '@remotion/renderer';
import path from 'path';

async function renderAllVideos() {
  const compositions = ['V0ExplorerVideo', 'V0EyeVideo', 'V0InsightVideo'];

  console.log('Bundling Remotion project...');

  const bundled = await bundle({
    entryPoint: path.resolve('./remotion/Root.tsx'),
  });

  for (const compositionId of compositions) {
    console.log(`\n📽️  Rendering ${compositionId}...`);

    const composition = await selectComposition({
      id: compositionId,
      serveUrl: bundled,
    });

    await renderMedia({
      composition,
      serveUrl: bundled,
      codec: 'h264',
      outputLocation: `out/${compositionId}.mp4`,
    });

    console.log(`✅ ${compositionId} rendered successfully!`);
  }

  console.log('\n🎉 All videos rendered!');
}

renderAllVideos().catch(console.error);
