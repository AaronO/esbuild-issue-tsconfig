const fs = require('fs');
const path = require('path');

const FILES = {
	"/Users/user/project/entry.ts": `
		import { worldview } from 'worldview'
		console.log(worldview)
	`,
	"/Users/user/project/tsconfig.json": `
		{
			"compilerOptions": {
				"baseUrl": "./",
				"paths": {
					"react-native": ["node_modules/react-native-web"]
				}
			}
		}
	`,
	"/Users/user/project/node_modules/worldview/tsconfig.json": `
		{}
	`,
	"/Users/user/project/node_modules/worldview/package.json": `
		{
			"name": "worldview",
			"module": "./index.ts"
		}
	`,
	"/Users/user/project/node_modules/worldview/index.ts": `
		import { Text } from 'react-native'
		export const worldview = Text;
	`,
};

for(let [filename, contents] of Object.entries(FILES)) {
	const truepath = filename.replace('/Users/user/project', __dirname);
    const dirpath = path.dirname(truepath);
    if(!fs.existsSync(dirpath)) {
		// NOTE: recursive requires a modern node, 'nvm use 12' works
        fs.mkdirSync(dirpath, { recursive: true });
    }
	fs.writeFileSync(truepath, contents);
}
