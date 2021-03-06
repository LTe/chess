const getFiles = require('node-recursive-directory')
const fs = require('fs')

const template = `---
title: $title$
---

import Game from './components/$name$'

## Notes

<Game/>
`;

const componentTemplate = `
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {\`$PGN$\`}
    </PGN>
  )
}

export default Game;
`;

function renderMarkdown(title, name) {
    return template.replace("$title$", title).replace("$name$", name)
}

function renderComponent(pgn) {
    const parsedPGN = pgn.toString('utf-8').split(/\r\n\r/)
    const escapedGame = [parsedPGN[0], parsedPGN[1], ""].join("\n\n")
    return componentTemplate.replace("$PGN$", escapedGame)
}

function log(text) {
    process.stdout.write(text + "\n")
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
                fs.mkdir(`docs/lessons/${dirname}/components/`, () => {})
                fs.writeFile(`docs/lessons/${dirname}/${filename}.md`, renderMarkdown(title, filename), {flag: 'wx'}, () => {})
                fs.writeFile(`docs/lessons/${dirname}/components/${filename}.tsx`, renderComponent(data), () => {})
            })
        }
    })
})

