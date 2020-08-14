#!/bin/bash

# Inject our mock submodule "worldview" into node_modules
node ./inject_files.js

# Give it an "empty" (but existing) tsconfig
echo "{}" > node_modules/worldview/tsconfig.json

echo "Testing with a sub-tsconfig.json (node_modules/worldview/tsconfig.json)"
echo

./test_builds.sh
