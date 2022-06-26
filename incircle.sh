#!/usr/bin/env sh

# Clips out the 600px diameter circle inscribed in a 600x600px image,
# leaving the corners transparent.
#
# Turned out to be trivial to accomplish with CSS
#
# Usage: incircle.sh input.jpg    # output in result.png

magick $1 -alpha on -background none \
   \( +clone -channel a -evaluate multiply 0 +channel -draw "circle 300,300 300,0" \) \
   -compose dstin -composite result.png
