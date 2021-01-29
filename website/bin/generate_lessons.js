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
    return template.replace("$title$", title).replace("$PGN$", pgn)
}

const files = getFiles('../lessons', true); // add true

files.then((result) => {
    result.forEach((element) => {
        const { dirname, filename, fullpath } = element
        const title = `Lekcja ${dirname} / ${filename}`

        fs.readFile(fullpath, (error, data) => {
            fs.mkdir(`docs/lessons/${dirname}/`, () => {})
            fs.writeFile(`docs/lessons/${dirname}/${filename}.md`, render(title, data), () => {})
        })
    })
})

