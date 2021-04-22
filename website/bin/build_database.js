const getFiles = require('node-recursive-directory')
const { Chess } = require('chess.js')
const parser = require('@mliebelt/pgn-parser')

const fs = require('fs')

function log(text) {
	process.stdout.write(text + "\n")
}

const extractFen = (pgn) => {
	const STARTING_POSITION = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
	const rawFen = pgn
		.split('\n')
		.find((element) => element.startsWith('[FEN')) // [FEN "8/3KN3/8/2p1k3/7Q/3P4/8/8 w - - 0 1"]

	if (rawFen) {
		return rawFen.slice(6).slice(0, -2)
	} else {
		return STARTING_POSITION
	}
}

const files = getFiles('../lessons', true); // add true
const database = []

const extractFenFromMove = (move, chessInstance, file_path) => {
	const notation = move['notation']
	const variations = move['variations']

	if (variations && variations.length > 0) {
		variations.forEach((moves) => {
			let currentFen = chessInstance.fen()
			let newChess = new Chess()
			newChess.load(currentFen)

			moves.forEach((move) => {
				extractFenFromMove(move, newChess, file_path)
			})
		})
	}

	if (notation) {
		const moveNotation = notation['notation']

		if (chessInstance.move(moveNotation, {sloppy: true}) === null) {
			console.debug('Invalid move')
		}

		database.push({ fen: chessInstance.fen(), move: moveNotation, file: file_path })
	}
}

const readFiles = () => {
	return files.then((result) => {
		result.forEach((element) => {
			const { dirname, filename, fullpath } = element

			if (filename.search('pgn') > 0) {
				const data = fs.readFileSync(fullpath)
				const chess = new Chess()
				log(`Analyze: ${dirname}/${filename}`)
				const parsedPGN = data.toString('utf-8').replace(/\r\n/g, '\n').split(/\n\n/)
				const fen = extractFen(parsedPGN[0])
				const moves = parser.parse(parsedPGN[1])

				chess.load(fen)

				moves.forEach((move) => extractFenFromMove(move, chess, `${dirname}/${filename}`))
			}
		})
	})
}

const generateDatabase = () => {
	return new Promise((resolve, reject) => {
		readFiles().then((result) => {
			fs.writeFile(`src/components/Search/database.json`, JSON.stringify(database), {flag: 'w'}, () => {
				resolve()
			})
		})
	})
}

module.exports = { generateDatabase }


