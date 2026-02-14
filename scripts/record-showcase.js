#!/usr/bin/env node

/**
 * Epic Showcase Video Recorder
 *
 * This script helps you record the Epic Showcase as a professional video.
 * Since automated browser video capture requires additional tools,
 * this script provides step-by-step instructions and verification.
 */

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🎬 Ethereal V0 Epic Showcase Video Recorder\n');

// Configuration
const PROJECT_DIR = path.join(__dirname, '..');
const SHOWCASE_URL = 'http://localhost:3000/epic-showcase';
const OUTPUT_DIR = path.join(PROJECT_DIR, 'public', 'videos');
const VIDEO_NAME = 'epic-showcase-tour';

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log('📋 Video Recording Setup');
console.log('========================\n');

console.log('1. Install screen recording tools:');
console.log('   Mac (Recommended): Install ScreenFlow or use built-in QuickTime');
console.log('   Alternative: ffmpeg + x264\n');

console.log('2. Start the development server:');
console.log(`   cd ${PROJECT_DIR}`);
console.log('   npm run dev\n');

console.log('3. When server is running, visit:');
console.log(`   ${SHOWCASE_URL}\n`);

console.log('4. Recording instructions:');
console.log('   🎥 Start recording when the Epic Showcase loads');
console.log('   ⏯️  Click the play button to start the automated tour');
console.log('   🖱️  Feel free to manually navigate between variants');
console.log('   ⏹️  Stop recording after viewing all 4 variants (approx 2-3 minutes)\n');

console.log('5. Save the video as:');
console.log(`   ${path.join(OUTPUT_DIR, VIDEO_NAME + '.mp4')}\n`);

console.log('6. Optional: Upload the video to make it accessible:\n');

// Check if a video already exists
const existingVideo = path.join(OUTPUT_DIR, VIDEO_NAME + '.mp4');
const altVideo = path.join(OUTPUT_DIR, VIDEO_NAME + '.webm');

if (fs.existsSync(existingVideo)) {
  console.log('✅ Found existing video: ' + existingVideo);
  console.log(`   File size: ${(fs.statSync(existingVideo).size / 1024 / 1024).toFixed(2)} MB\n`);
} else if (fs.existsSync(altVideo)) {
  console.log('✅ Found existing video: ' + altVideo);
  console.log(`   File size: ${(fs.statSync(altVideo).size / 1024 / 1024).toFixed(2)} MB\n`);
} else {
  console.log('❌ No existing video found. Please record one first.\n');
}

// Check if server is running
console.log('🔍 Checking if development server is running...\n');

const checkServer = async () => {
  return new Promise((resolve) => {
    const checkProcess = exec(`lsof -i :3000`, (error, stdout) => {
      if (stdout && stdout.includes('LISTEN')) {
        console.log('✅ Development server is running on port 3000');
        console.log(`   Visit ${SHOWCASE_URL} now\n`);
      } else {
        console.log('❌ Development server is not running');
        console.log('   Please run: npm run dev\n');
      }
      resolve();
    });
  });
};

// Provide recording command examples
const provideRecordingCommands = () => {
  console.log('🎬 Recording commands for different scenarios:\n');

  console.log('For FFmpeg users:');
  console.log('1. QuickTime Player -> Screen Recording');
  console.log('2. Or use OBS Studio: Free, cross-platform');
  console.log('3. Adjust settings: 1080p, 60fps, bitrate 8000k\n');

  console.log('Recoding best practices:');
  console.log('- Hide your cursor for professional look');
  console.log('- Use fullscreen (F11) to hide browser chrome');
  console.log('- Close other tabs and notifications');
  console.log('- Record in a quiet environment');
  console.log('- Consider adding background music in post-production\n');
};

const provideUploadInstructions = () => {
  console.log('☁️ Upload instructions for web access:\n');
  console.log('Option 1 - Cloudinary:');
  console.log('   - Create free account at cloudinary.com');
  console.log('   - Upload video and use public URL\n');

  console.log('Option 2 - Vercel attachment:');
  console.log(`   - Upload to ${OUTPUT_DIR}`);
  console.log('   - Deploy to Vercel and reference in code\n');

  console.log('Option 3 - Direct hosting:');
  console.log('   - Upload to public/ directory');
  console.log('   - Reference as /videos/epic-showcase-tour.mp4\n');
};

const main = async () => {
  await checkServer();
  provideRecordingCommands();
  provideUploadInstructions();

  console.log('🎉 Ready to create your epic showcase video!');
  console.log('\nAfter recording, you can:');
  console.log('- Add the video to the showcase.html');
  console.log('- Share it on social media');
  console.log('- Embed it in presentations');
  console.log('- Use it for demo calls\n');
};

main();

module.exports = {
  PROJECT_DIR,
  SHOWCASE_URL,
  OUTPUT_DIR,
  VIDEO_NAME
};
