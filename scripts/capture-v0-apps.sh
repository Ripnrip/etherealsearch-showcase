#!/bin/bash

# V0 Apps Screenshots and Videos Capture Script
# This script uses agent-browser to capture comprehensive media for all 4 V0 variants

set -e

echo "🎬 Starting V0 Apps Media Capture"
echo "=================================="

# Configuration
PROJECT_DIR="/Users/gurindersingh/Documents/Developer/zai-vision/etherealsearch-showcase"
SCREENSHOTS_DIR="$PROJECT_DIR/screenshots"

cd "$PROJECT_DIR"

# Function to capture app media
capture_app() {
  local app_name=$1
  local url=$2
  local base_filename=$3

  echo ""
  echo "📸 Capturing $app_name from $url"
  echo "--------------------------------"

  # Navigate to the app
  agent-browser open "$url" 2>&1 | grep -v "skill agent-browser is loaded"

  # Wait for page to load
  echo "⏳ Waiting for page to load..."
  sleep 3

  # Full page screenshot
  echo "📷 Taking full page screenshot..."
  agent-browser screenshot --full "$SCREENSHOTS_DIR/${base_filename}-full.png" 2>&1 | grep -v "skill agent-browser is loaded"

  # Viewport screenshot (hero)
  echo "📷 Taking hero viewport screenshot..."
  agent-browser viewport 1200x800 2>&1 | grep -v "skill agent-browser is loaded"
  agent-browser screenshot "$SCREENSHOTS_DIR/${base_filename}-hero.png" 2>&1 | grep -v "skill agent-browser is loaded"

  # Try to capture additional views if interactive
  echo "📷 Exploring interactive elements..."

  # Snapshot to see if there are buttons or interactive elements
  agent-browser snapshot -i 2>&1 | grep -v "skill agent-browser is loaded" | head -20

  # If there are buttons, try to click and capture
  # Note: This is simplified - in practice you'd check for specific elements

  echo "✅ Completed $app_name captures"
}

# Start recording session
echo "🎥 Starting recording session..."
echo ""

# 1. v0 Ethereal Explorer
echo "🌌 Capturing v0 Ethereal Explorer..."
capture_app "v0 Explorer" "https://v0-ethereal-explorer.vercel.app" "v0-explorer"

# 2. v0 Ethereal Eye
echo "👁️ Capturing v0 Ethereal Eye..."
capture_app "v0 Eye" "https://v0-ethereal-eye.vercel.app" "v0-eye"

# 3. v0 Ethereal Insight
echo "📊 Capturing v0 Ethereal Insight..."
capture_app "v0 Insight" "https://v0-ethereal-insight.vercel.app" "v0-insight"

# 4. EtherealSearch (additional captures)
echo "🔍 Capturing additional EtherealSearch views..."
capture_app "EtherealSearch" "https://etherealsearch-showcase.vercel.app" "etherealsearch"

# Run local screenshot capture for the Epic Showcase page
echo ""
echo "🎬 Capturing Epic Showcase Page"
echo "================================"

# First, ensure the dev server is running
echo ""
echo "⚠️  IMPORTANT: Make sure the dev server is running:"
echo "   npm run dev"
echo ""
read -p "Press Enter when the server is running on localhost:3000..."

# Capture the Epic Showcase
echo "📸 Capturing Epic Showcase..."
capture_app "Epic Showcase" "http://localhost:3000/epic-showcase" "epic-showcase"

# Generate summary
echo ""
echo "✅ Media Capture Complete!"
echo "==========================="
echo ""
echo "Captured files:"
ls -la "$SCREENSHOTS_DIR"/*.png | grep -E "(v0-explorer|v0-eye|v0-insight|etherealsearch|epic-showcase)" | awk '{print "  " $9}'
echo ""
echo "Next steps:"
echo "1. Review the captured screenshots"
echo "2. Manually record videos of each app (use QuickTime or OBS)"
echo "3. Save videos as .webm or .mp4 in $SCREENSHOTS_DIR"
echo "4. Update showcase.html with new media"
echo "5. Deploy to Vercel"
echo ""