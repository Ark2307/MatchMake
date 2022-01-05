/**
 * This file can be executed to clear up the media folder from all the test uploads
 * use
 *             npm run clear
 *
 *             OR
 *
 *             yarn clear
 *
 * index.html will not be deleted
 */

// importing dependencies
import dotenv from "dotenv";
import fs from "fs";
import cliSelect from "cli-select";
import chalk from "chalk";
dotenv.config(); // configuring application with environment variables

console.log(chalk.redBright.bold("Delete the media folder?"));
cliSelect({
    values: ["No", "Yes"],
    defaultValue: 0,
    indentation: 0
})
    .then((response) => {
        if (response.value.toLowerCase() == "no") {
            console.log(chalk.green.bold("Cancelled"));
        } else {
            console.log("Proceeding to delete");
            fs.rmdirSync(`${process.env.MEDIA_LOCATION ?? process.cwd()}/media`, {
                recursive: true
            });
            console.log(
                chalk.redBright.bold("Deleted everything from ") +
                    chalk.blue(`${process.env.MEDIA_LOCATION ?? process.cwd()}/media`)
            );
        }
    })
    .catch(() => {
        console.log(chalk.blue("Quit"));
    });
