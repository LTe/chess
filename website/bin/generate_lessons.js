const getFiles = require('node-recursive-directory')
const fs = require('fs')
var http = require('https')

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

const download = function(url, dest, cb) {
	var file = fs.createWriteStream(dest);
	return new Promise((resolve, reject) => {
		http.get(url, function(response) {
			response.pipe(file);
			file.on('finish', function() {
				file.close(cb);
				resolve();
			});
		});
	})
}

const files = getFiles('../lessons', true); // add true

const escapeDiacritics = (text) => {
	return text.replace(/ą/g, 'a').replace(/Ą/g, 'A')
		.replace(/ć/g, 'c').replace(/Ć/g, 'C')
		.replace(/ę/g, 'e').replace(/Ę/g, 'E')
		.replace(/ł/g, 'l').replace(/Ł/g, 'L')
		.replace(/ń/g, 'n').replace(/Ń/g, 'N')
		.replace(/ó/g, 'o').replace(/Ó/g, 'O')
		.replace(/ś/g, 's').replace(/Ś/g, 'S')
		.replace(/ż/g, 'z').replace(/Ż/g, 'Z')
		.replace(/ź/g, 'z').replace(/Ź/g, 'Z');
}

const generateLessonsFromLiches = () => {
	return new Promise((resolve, reject) => {
		download('https://lichess.org/study/nEi1SvSC.pgn', '../lessons/Capablanka/ksiazka.lichess').then(() => {
			fs.readFile('../lessons/Capablanka/ksiazka.lichess', (error, data) => {
				const parsedPGN = data.toString('utf-8').split(/\n\n\n/)
				parsedPGN.forEach(pgn => {
					const filename = escapeDiacritics(pgn.split("\n")[0].slice(8, -2).replace(/\s/g, '_').replace('(', '_').replace(')', '_'))
					fs.writeFile(`../lessons/Capablanka/${filename}.pgn`, pgn, {flag: 'w'}, () => {})
				})
				resolve()
			})
		})
	})
}

const generateLessons = () => {
	return generateLessonsFromLiches().then(() => {
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
	})
}


module.exports = { generateLessons }


