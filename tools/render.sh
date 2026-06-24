#!/usr/bin/env bash
# Frame raw simulator screenshots into branded 16:10 portfolio covers.
# Usage: bash tools/render.sh
set -euo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
HERE="$(cd "$(dirname "$0")" && pwd)"      # .../portfolio-site/tools
SITE="$(dirname "$HERE")"                   # .../portfolio-site
HTML="file://$HERE/frame.html"
OUT="$SITE/images"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# out_id | raw screenshot (relative to FREELANCE) | label | tagline
JOBS=(
  "ai-photo-1|../../raw-images/ai-photo-editor-3.png|BEFORE / AFTER|AI Photo Studio"
  "ai-photo-2|../../raw-images/ai-photo-editor-1.png|13 AI TOOLS|AI Photo Studio"
  "ai-photo-3|../../raw-images/ai-photo-editor-4.png|STYLIZE|AI Photo Studio"
)

urlenc(){ python3 -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1],safe=''))" "$1"; }

for job in "${JOBS[@]}"; do
  IFS='|' read -r id img label tagline <<< "$job"
  url="$HTML?img=$(urlenc "$img")&label=$(urlenc "$label")&tagline=$(urlenc "$tagline")&brand=Atelier"
  echo "→ rendering $id  ($label)"
  "$CHROME" --headless=new --hide-scrollbars --disable-gpu \
    --force-device-scale-factor=2 --window-size=1600,1000 \
    --default-background-color=00000000 --virtual-time-budget=2500 \
    --screenshot="$TMP/$id.png" "$url" >/dev/null 2>&1
  # 3200x2000 -> 1600x1000 JPG (q88, photo-friendly + small)
  sips -z 1000 1600 -s format jpeg -s formatOptions 88 \
    "$TMP/$id.png" --out "$OUT/$id.jpg" >/dev/null
  printf "   saved %s  (%s)\n" "$OUT/$id.jpg" "$(du -h "$OUT/$id.jpg" | cut -f1)"
done

echo "done."
