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
    const parsedPGN = pgn.toString('utf-8').split(/\r\n\r/)
    const escapedGame = [parsedPGN[0], parsedPGN[1].replace(/(\r\n|\n|\r)/gm, ""), ""].join("\n\n")
    return template.replace("$title$", title).replace("$PGN$", escapedGame)
}

function log(text) {
    process.stdout.write(text)
}

const files = getFiles('../lessons', true); // add true

files.then((result) => {
    result.forEach((element) => {
        const { dirname, filename, fullpath } = element
        const title = `Lekcja ${dirname} / ${filename}`

        if (filename.search('pgn') > 0) {
            fs.readFile(fullpath, (error, data) => {
                log(`Compile: ${dirname}/${filename}`)
                fs.mkdir(`docs/lessons/${dirname}/`, () => {})
                fs.writeFile(`docs/lessons/${dirname}/${filename}.md`, render(title, data), () => {})
            })
        }
    })
})

