/// <reference path='../../node_modules/@types/node/index.d.ts' />
import yargs from 'yargs';

yargs
    .version('0.0.1')
    .epilogue('Project Root フォルダで実行して下さい')
    .option('name', {
        alias: 'n',
        describe: ''
            + 'View name (Upper Camel Case)\n'
            + 'パスを含むことができます\n'
            + 'ex) path/to/view/ViewName',
        type: 'string',
        required: true,
    })
    .usage('Usage: ts-node -r esm tools/add-vue/addView.ts --name [PATH_TO_VIEW]')
    .example('ts-node -r esm tools/add-vue/addView.ts --name \'path/to/view/ViewName\'',
        '`src/views/path/to/view/ViewName.vue` を生成します');
const ARGS = yargs.parse(process.argv);

// --------------------------------------------------
import * as fs from 'fs';

async function main() {
    const pathName = ARGS['name'] as string;
    const [ _, path, name ] = /^(.*\/)(.*)$/.exec(pathName) as string[];

    const view = fs.readFileSync('./template/View.vue');
    const viewText = view.toString()
        .replace(/\$__CLASS_NAME__\$/g, name);

    fs.writeFileSync(`./src/views/${pathName}`, viewText);
}
main();
