import fs from 'fs';
import { exit } from 'process';
import readline from 'readline';

async function getInput(questionString) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve, reject) => {
        rl.question(questionString, (answer) => {
            resolve(answer);
            rl.close();
        });
    });
}

function slug(string) {
    return string
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'_');
}

const title = process.argv[2] || 'Title';
const date = new Date().toISOString().split('T')[0];
const slugTitle = slug(title);
const content = `\
---
title: ${ title }
date: ${ date }
image: /img/blog/posts/${ slugTitle }.png
---
`;

const postPath = `./src/content/blog/${ slugTitle }.md`;

async function main() {
    if (fs.existsSync(postPath)) {
        const answer = await getInput(`${ postPath } already exists.\nAre you sure you want to overwrite it? (y/n) `);
        const shouldOverwrite = answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes';

        if (!shouldOverwrite) {
            console.log('\nCanceling post creation.');
            exit(0);
        }

        console.log('\nOverwriting');
    }
    
    
    fs.writeFileSync(postPath, content);
    console.log(`Created post at ${ postPath }`)
}

main();
