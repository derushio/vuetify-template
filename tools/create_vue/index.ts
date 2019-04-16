/**
 * # create_vue/index.ts
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
 * 2. or LOCAL INSTALL
 *     1. Install ts-node
 *         ```sh
 *         yarn add typescript ts-node
 *         ```
 */
/* tslint:disable:no-console */
/// <reference path='../../node_modules/@types/node/index.d.ts' />
import yargs from 'yargs';

yargs
    .version('1.0.0')
    .usage(
        'Usage: yarn create:vue --type [TYPE_OF_VUE] --name [PATH_TO_VIEW]\n' +
        'Vueファイルを生成します',
    )
    .option('type', {
        alias: 't',
        desc:
            'Vue Type: view or component',
        type: 'string',
        required: true,
    })
    .option('name', {
        alias: 'n',
        desc:
            'View name (Upper Camel Case)\n' +
            'パスを含むことができます\n' +
            'ex) path/to/vue/ViewName',
        type: 'string',
        required: true,
    })
    .example('yarn create:view --name `path/to/view/ViewName`',
        '`/src/views/path/to/view/ViewName.vue` を生成します')
    .example('yarn create:component --name `path/to/component/ComponentName`',
        '`/src/components/path/to/component/ComponentName.vue` を生成します');
const ARGS = yargs.parse(process.argv);

// --------------------------------------------------
import chalk from 'chalk';
import * as fs from 'fs';
import { upperCaseFirst, hyphen } from 'change-case';

async function main() {
    const pathName = ARGS['name'] as string;
    const regexResult = /^(.*\/)*(.*)$/.exec(pathName) as string[];
    const path = regexResult[1] || '';
    const name = upperCaseFirst(regexResult[2]);

    try {
        const type = ARGS['type'] as string;
        if (type !== 'view' && type !== 'component') {
            throw new Error(`typeが不正です: ${type}`);
        }

        const compo = fs.readFileSync(`./template/${upperCaseFirst(type)}.vue`);
        const compoText = compo.toString()
            .replace(/\$__CLASS_NAME__\$/g, name)
            .replace(/\$__VUE_NAME__\$/g, hyphen(name));

        fs.writeFileSync(`./src/${type}s/${path}${name}.vue`, compoText);
        console.log(chalk.green(`Success create: /src/${type}s/${path}${name}.vue`));
    } catch (e) {
        console.log(chalk.red(`Failed create: message: ${e.message}`));
    }
}
main();
