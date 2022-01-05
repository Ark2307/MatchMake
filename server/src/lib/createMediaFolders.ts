// add files in these file-structure
import fs from "fs";
import chalk from "chalk";

// require main looks at the main in package.json and finds for modules relative to it
const fileStructure = require.main?.require("./../file-structure.json");

function fileStructureToArray(structure: any): string[] {
    let result: string[] = [];
    for (var key in structure) {
        if (structure.hasOwnProperty(key)) {
            var val = structure[key];
            result.push(val);
        }
    }
    return result;
}

function concatFilePaths(a: string, b: string): string {
    a = a.concat(b);
    while (a.indexOf("\\") > 0) a = a.replace("\\", "/");
    return a;
}

/**
 * @param {directory} dir creates the folders mentioned in file-structure.json in the directory specified
 */
module.exports.create = function create(dir: string) {
    let structuredArray = fileStructureToArray(fileStructure);
    structuredArray.forEach((Element: string) => {
        fs.mkdirSync(concatFilePaths(dir, Element), { recursive: true });
        console.log(
            `${chalk.green.bold(`created`)} - ${chalk.blue(concatFilePaths(dir, Element))}`
        );
    });

    try {
        fs.copyFileSync(
            concatFilePaths(process.cwd(), `/test/index.html`),
            concatFilePaths(process.env.MEDIA_LOCATION ?? process.cwd(), `/media/index.html`)
        );
        console.log(
            `${chalk.blue(
                concatFilePaths(process.cwd(), `/test/index.html`)
            )} was copied to ${chalk.blue(
                concatFilePaths(process.env.MEDIA_LOCATION ?? process.cwd(), `/media/index.html`)
            )}`
        );
    } catch (err) {
        console.error(chalk.red("Failed while copying index.html test file"));
    }
};

module.exports.concatFilePaths = concatFilePaths;
