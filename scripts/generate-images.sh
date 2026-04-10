#!/usr/bin/env bash
# Batch image generation for Summit Home Remodeling
# Run from project root: bash scripts/generate-images.sh

set -e
IMAGES_DIR="$(dirname "$0")/../public/images"
mkdir -p "$IMAGES_DIR"

run_and_download() {
  local PROMPT="$1"
  local OUTFILE="$2"
  local ASPECT="${3:-16:9}"

  echo "Generating: $OUTFILE..."
  local TMPFILE="/tmp/infsh-result-$$.json"
  infsh app run google/gemini-3-1-flash-image-preview \
    --input "{\"prompt\": \"$PROMPT\", \"aspect_ratio\": \"$ASPECT\"}" \
    -o "$TMPFILE" 2>/dev/null

  local URL
  URL=$(python3 -c "import json; d=json.load(open('$TMPFILE')); print(d['output']['images'][0])")
  curl -sSL "$URL" -o "$IMAGES_DIR/$OUTFILE"
  rm -f "$TMPFILE"
  echo "  Saved: $OUTFILE"
}

# Hero
run_and_download \
  "Luxury modern home exterior, golden hour sunset, dark cedar and stone facade, amber porch lights glowing, Ozark hills Arkansas neighborhood, cinematic architecture photography, photorealistic" \
  "hero-home.jpg" "16:9"

# Kitchen after
run_and_download \
  "Stunning modern kitchen remodel, dark navy blue custom shaker cabinets, white quartz waterfall island, warm brass hardware, pendant lights, open concept, Arkansas home interior, photorealistic" \
  "kitchen-after.jpg" "16:9"

# Bathroom after
run_and_download \
  "Luxury master bathroom remodel, freestanding soaking tub, large format slate tile, frameless glass shower, warm wood vanity, gold fixtures, spa aesthetic, Arkansas home interior, photorealistic" \
  "bathroom-after.jpg" "16:9"

# Home addition after
run_and_download \
  "Beautiful home room addition, vaulted ceiling sunroom, large windows, natural light, seamlessly integrated with existing home exterior, new cedar siding, Rogers Arkansas, photorealistic" \
  "addition-after.jpg" "16:9"

# Basement after
run_and_download \
  "Finished basement media room, dark acoustic ceiling panels, built-in entertainment wall, ambient LED lighting, plush sectional sofa, modern home theater, Arkansas home interior, photorealistic" \
  "basement-after.jpg" "16:9"

# Team working
run_and_download \
  "Professional home remodeling craftsmen installing custom kitchen cabinets, skilled workers in clean company uniforms, bright modern kitchen under renovation, tools, quality craftsmanship, photorealistic" \
  "team-working.jpg" "16:9"

# Kitchen before
run_and_download \
  "Outdated 1990s kitchen interior, old oak cabinets, dated laminate countertops, old appliances, worn linoleum floor, needs renovation, photorealistic" \
  "kitchen-before.jpg" "16:9"

# Bathroom before
run_and_download \
  "Dated 1990s bathroom, old builder-grade vanity, pink tile, fiberglass tub surround, fluorescent lighting, worn floor, needs renovation, photorealistic" \
  "bathroom-before.jpg" "16:9"

# Basement before (unfinished)
run_and_download \
  "Unfinished basement with exposed concrete walls, exposed joists, HVAC ducts, utility room, cold storage area, before renovation, photorealistic" \
  "basement-before.jpg" "16:9"

# Gallery images (square aspect ratio works well)
run_and_download \
  "White shaker cabinet kitchen remodel, quartz countertops, farmhouse sink, subway tile backsplash, kitchen island, Rogers Arkansas home, photorealistic" \
  "gallery-kitchen-1.jpg" "1:1"

run_and_download \
  "Modern master bathroom, walk-in tile shower, floating dual vanity, matte black fixtures, warm lighting, spa towels, Bentonville Arkansas home interior, photorealistic" \
  "gallery-bathroom-1.jpg" "1:1"

run_and_download \
  "Finished basement with wet bar, wine refrigerator, stone backsplash, bar stools, open entertainment area, Springdale Arkansas home interior, photorealistic" \
  "gallery-basement-1.jpg" "1:1"

run_and_download \
  "Sunlit home addition, vaulted ceiling, floor to ceiling windows, cozy sitting area, Rogers Arkansas luxury home addition, photorealistic" \
  "gallery-addition-1.jpg" "1:1"

run_and_download \
  "Bold navy blue kitchen cabinets, brass hardware, white marble countertops, modern open kitchen, dramatic lighting, Lowell Arkansas home remodel, photorealistic" \
  "gallery-kitchen-2.jpg" "1:1"

run_and_download \
  "Guest bathroom remodel, white subway tile, pedestal sink, hexagonal floor tile, brushed nickel fixtures, Cave Springs Arkansas home, photorealistic" \
  "gallery-bathroom-2.jpg" "1:1"

# About/process images
run_and_download \
  "Professional home remodeling contractor consultation, homeowner and contractor reviewing blueprints together at kitchen table, Northwest Arkansas home, photorealistic" \
  "consultation.jpg" "16:9"

run_and_download \
  "Luxury home remodeling project finished hallway, dark wood floors, clean white walls, trim work, professional result, Northwest Arkansas custom home, photorealistic" \
  "process-result.jpg" "16:9"

echo ""
echo "All images generated and saved to $IMAGES_DIR"
