import React, {useEffect, useReducer, useState} from 'react'
import Chessground from 'react-chessground'
import 'react-chessground/dist/styles/chessground.css'
import Chess from 'chess.js'
import database from './database.json'
import { pick } from 'underscore'
import './styles.css'

const Result = (props: {result}) => {
  const { result } = props

  const url = "docs/Lessons/" + result

  return (
    <div>
      <a className="resultLink" href={url}>{result}</a>
    </div>
  )
}

const Results = (props: {results}) => {
  const {results} = props

  if (results.length > 0) {
    return results.map((result) => <Result result={result}/>)
  } else {
    return <div>No results</div>
  }
}

const onlyPosition = (fen) => {
  return fen.split(' ')[0]
}

const search = (fen) => {
  return pick(database, (fens, key, object) => {
    const onlyPositions = fens.map(onlyPosition)

    if (onlyPositions.includes(onlyPosition(fen))) {
      return true
    } else {
      return false
    }
  })
}

function Search(props) {
  const [fen, setFen] = useState<string>('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
  const [chess, setChess] = useState<Chess>(new Chess())
  const [results, setResults] = useState<string[]>([])
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  const [orientation, setOrientation] = useState<string>('white')

  useEffect(() => {
    const results = Object.keys(search(fen))
    setResults(results)
  }, [fen])

  const handleOnMove = (from, to) => {
    if (chess.move({from, to})) {
      const currentFen = chess.fen()
      const results = Object.keys(search(currentFen))

      setFen(currentFen)
      setResults(results)
    } else {
      forceUpdate()
    }
  }

  const handleFenChange = (event) => {
    setFen(event.target.value)
    setChess(new Chess(event.target.value))
  }

  const handleSwitch = (event) => {
    if (orientation == 'white') {
      setOrientation('black')
    } else {
      setOrientation('white')
    }
  }

  const handleBack = (event) => {
    chess.undo()
    setFen(chess.fen())
  }

  return (
    <div className="wrapper">
      <div className="chessBoard">
        <Chessground fen={fen} orientation={orientation} onMove={handleOnMove}/>
      </div>
      <div className="result">
        <input className="fenInput" value={fen} onChange={handleFenChange} />
        <button onClick={handleSwitch}>Switch</button>
        <button onClick={handleBack}>Back</button>
        <div><Results results={results} /></div>
      </div>
    </div>
  )
}

export default Search;


