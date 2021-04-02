import data from './database.json'
import Chess from 'chess.js'

export type DatabaseResult = {
  fen: string
  move: string
  file: string
}

export type FEN = string
export type ShortFEN = string

const extractOnlyPosition = (fen: FEN) : ShortFEN => {
  return fen.split(' ')[0]
}

const extractMoveNumber = (fen: FEN) : number => {
  return parseInt(fen.split(' ').pop())
}

const findPositions = (fen: FEN) : DatabaseResult[] => {
  const database: DatabaseResult[] = data

  return database.filter((result: DatabaseResult) => {
    return extractOnlyPosition(result.fen) === extractOnlyPosition(fen)
  })
}

const findSimilarPositions = (fen: FEN) : DatabaseResult[] => {
  const similarPosition = generateSimilarPositions(fen)

  return similarPosition.map((position) => {
    const result = findPositions(position.fen)
    return result.map((result) => Object.assign(result, {move: position.move.san}))
  }).flat()
}

const generateSimilarPositions = (fen: FEN) : DatabaseResult[] => {
  const chess = new Chess(fen)
  const moves = chess.moves({verbose: true})

  return moves.map((move) => {
    const chess = new Chess(fen)
    chess.move(move.san)

    return { fen: chess.fen(), move: move, file: '[generated position]' }
  })
}

export { extractOnlyPosition, findPositions, generateSimilarPositions, findSimilarPositions, extractMoveNumber }