#!/bin/bash

# Inject our mock submodule "worldview" into node_modules
node ./inject_files.js

# Remove the sub tsconfig.json if any
rm -f node_modules/worldview/tsconfig.json

echo "Testing without a sub-tsconfig.json"
echo

./test_builds.sh
