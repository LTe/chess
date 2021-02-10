const getFiles = require('node-recursive-directory')
const fs = require('fs')

const template = `---
title: $title$
---

import PGN from '../../../src/components/PGN'

<PGN>
$PGN$
</PGN>
`;

function render(title, pgn) {
    const formattedPGN = pgn.toString('utf-8')
    return template.replace("$title$", title).replace("$PGN$", formattedPGN)
}

function log(text) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(text)
}

const files = getFiles('../lessons', true); // add true

files.then((result) => {
    result.forEach((element) => {
        const { dirname, filename, fullpath } = element
        const title = `Lekcja ${dirname} / ${filename}`

        fs.readFile(fullpath, (error, data) => {
	    log(`Compile: ${dirname}/${filename}`)
            fs.mkdir(`docs/lessons/${dirname}/`, () => {})
            fs.writeFile(`docs/lessons/${dirname}/${filename}.md`, render(title, data), () => {})
        })
    })
})

