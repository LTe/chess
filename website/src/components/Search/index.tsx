import React, {useEffect, useReducer, useState} from 'react'
import Chessground from 'react-chessground'
import 'react-chessground/dist/styles/chessground.css'
import Chess from 'chess.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import {DatabaseResult, extractMoveNumber, FEN, findPositions, findSimilarPositions} from "./filter";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup'

const INITIAL_POSITION: FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'

const Result = (props: {result: DatabaseResult}) => {
  const { result } = props
  const { fen, move, file } = result

  const url = "docs/Lessons/" + file
  const moveNumber = extractMoveNumber(fen)

  return (
    <ListGroup.Item action>
      <a className="resultLink" href={url}>{file} {move} ({moveNumber})</a>
    </ListGroup.Item>
  )
}

const Results = (props: {results: DatabaseResult[]}) => {
  const {results} = props

  if (results.length > 0) {
    const resultList = results.map((result) => <Result result={result}/>)
    return <ListGroup>{resultList}</ListGroup>
  } else {
    return <ListGroup><ListGroup.Item>No results</ListGroup.Item></ListGroup>
  }
}

type Orientation = 'white' | 'black'

function Search(props) {
  const [fen, setFen] = useState<string>(INITIAL_POSITION)
  const [chess, setChess] = useState<Chess>(new Chess())
  const [results, setResults] = useState<DatabaseResult[]>([])
  const [similarPosition, setSimilarPosition] = useState<DatabaseResult[]>([])
  const [_, forceUpdate] = useReducer((x) => x + 1, 0)
  const [orientation, setOrientation] = useState<Orientation>('white')

  useEffect(() => {
    searchPositions()
  }, [fen])

  function searchPositions() {
    const currentFen = chess.fen()
    const foundPositions = findPositions(currentFen)
    const foundSimilarPositions = findSimilarPositions(currentFen)

    setSimilarPosition(foundSimilarPositions)
    setResults(foundPositions)
    setFen(currentFen)
  }

  const handleOnMove = (from, to) => {
    if (chess.move({from, to})) {
      searchPositions();
    } else {
      forceUpdate()
    }
  }

  const handleFenChange = (event) => {
    setFen(event.target.value)
    setChess(new Chess(event.target.value))
  }

  const handleSwitch = () => {
    if (orientation == 'white') {
      setOrientation('black')
    } else {
      setOrientation('white')
    }
  }

  const handleBack = () => {
    chess.undo()
    setFen(chess.fen())
    forceUpdate()
  }

  return (
    <>
      <div className="wrapper">
        <div className="chessBoard">
          <Chessground fen={fen} orientation={orientation} onMove={handleOnMove} resizable={true}/>
        </div>
        <div className="result">
          <InputGroup className="mb-3">
            <FormControl
              placeholder={INITIAL_POSITION}
              aria-label="FEN position"
              value={fen}
              onChange={handleFenChange}
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">FEN</InputGroup.Text>
          </InputGroup>

          <div className="buttons">
            <Button variant="primary" onClick={handleSwitch}>Switch</Button>
            <Button variant="secondary" onClick={handleBack}>Back</Button>
          </div>
          <div className="results">
            <h3>Results</h3>
            <Results results={results} />
          </div>
          <div className="results">
            <h3>Similar positions</h3>
            <Results results={similarPosition}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search;


