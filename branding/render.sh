#!/usr/bin/env nix-shell
#!nix-shell -i bash -p librsvg dejavu_fonts imagemagick
# regenerates the png branding from branding/src, run from anywhere
set -euo pipefail
cd "$(dirname "$0")"
FONTCONFIG_FILE=$(mktemp)
fonts=$(nix-build '<nixpkgs>' -A dejavu_fonts --no-out-link)
printf '<?xml version="1.0"?><fontconfig><dir>%s</dir></fontconfig>' "$fonts" > "$FONTCONFIG_FILE"
export FONTCONFIG_FILE
mkdir -p favicons
# banner-light is shown on dark themes, banner-dark on light ones
rsvg-convert -w 1302 src/banner-light.svg -o banner-light.png
rsvg-convert -w 1302 src/banner-dark.svg -o banner-dark.png
rsvg-convert -w 536 src/icon.svg -o icon-transparent.png
rsvg-convert -w 180 src/icon.svg -o favicons/touchicon.png
for s in 72 114 144 512; do rsvg-convert -w $s src/icon.svg -o favicons/touchicon$s.png; done
rsvg-convert -w 64 src/icon.svg -o icon64.png
magick icon64.png -define icon:auto-resize=64,32,16 favicons/favicon.ico
rm icon64.png
rsvg-convert -w 440 src/icon.svg -o ../src/components/notifications/notificationicon.png
