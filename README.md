# esbuild-issue-tsconfig

A basic setup to test tsconfig paths (rewrites)

## Run tests

First `npm i` then:

```
./test_with.sh
./test_without.sh
```

# Outputs

As of `esbuild@0.6.20`:

## With tsconfig.json in submodule

```
~/git/esbuild-issue-tsconfig master*
❯ ./test_with.sh
Testing with a sub-tsconfig.json (node_modules/worldview/tsconfig.json)


# Running esbuild
node_modules/worldview/index.js:2:27: error: Could not resolve "react-native"
    const { Text } = require('react-native')
                             ~~~~~~~~~~~~~~
1 error

# Running webpack (ts-loader)
   2 modules

ERROR in ./node_modules/worldview/index.js
Module not found: Error: Can't resolve 'react-native' in '/Users/nuc/git/esbuild-issue-tsconfig/node_modules/worldview'

# Running webpack (w/ alias)
   236 modules
```

## Without tsconfig.json in submodule

```
~/git/esbuild-issue-tsconfig master*
❯ ./test_without.sh
Testing without a sub-tsconfig.json


# Running esbuild

# Running webpack (ts-loader)
   2 modules

ERROR in ./node_modules/worldview/index.js
Module not found: Error: Can't resolve 'react-native' in '/Users/nuc/git/esbuild-issue-tsconfig/node_modules/worldview'

# Running webpack (w/ alias)
   236 modules
```
