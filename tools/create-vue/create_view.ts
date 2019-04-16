/**
 * # create_view.ts
 * ## REQUIRED
 * * ts-node
 *
 * ## INSTARATION:
 * 1. GLOBAL INSTALL
 *     1. Install ts-node
 *         ```sh
 *         yarn global add typescript ts-node
 *         ```
 *     2. Add PATH `yarn global bin`
 * 2. LOCAL INSTALL
 *     1. Install ts-node
 *         ```sh
 *         yarn add typescript ts-node
 *         ```
 */
/// <reference path='../../node_modules/@types/node/index.d.ts' />
import yargs from 'yargs';

yargs
    .version('1.0.0')
    .usage(
        'Usage: yarn create:view --name [PATH_TO_VIEW]\n' +
        'Viewファイルを生成します',
    )
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
    .example('create:view --name \'path/to/view/ViewName\'',
        '`src/views/path/to/view/ViewName.vue` を生成します');
const ARGS = yargs.parse(process.argv);

// --------------------------------------------------
import * as fs from 'fs';

async function main() {
    const pathName = ARGS['name'] as string;
    const [ _, path, name ] = /^(.*\/)*(.*)$/.exec(pathName) as string[];

    const view = fs.readFileSync('./template/View.vue');
    const viewText = view.toString()
        .replace(/\$__CLASS_NAME__\$/g, name);

    fs.writeFileSync(`./src/views/${pathName}.vue`, viewText);
}
main();
