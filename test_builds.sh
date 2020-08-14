#!/bin/bash

echo
echo "# Running esbuild"
npx esbuild --bundle ./entry.ts --outfile=out.js

echo
echo "# Running tsc"
npx tsc ./entry.ts --outFile out.js --module system  --moduleResolution node

echo
echo "# Running webpack (ts-loader)"
npx webpack --display minimal --config webpack.config.js --entry ./entry.ts --output out.js

echo
echo "# Running webpack (w/ alias)"
npx webpack --display minimal --config webpack.config.alias.js --entry ./entry.ts --output out.js
