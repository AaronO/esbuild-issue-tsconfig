const path = require('path');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./entry.ts",
    output: {
        filename: "out.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            'react-native$': 'react-native-web',
        }
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/, loader: "ts-loader", options: {
                    transpileOnly: false,
                    ignoreDiagnostics: [2307, 2339],
                    compilerOptions: {
                        module: "esnext",
                    }
                }
            }
        ]
    },
};
