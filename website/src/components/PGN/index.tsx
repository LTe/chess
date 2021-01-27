import React, {useLayoutEffect, useRef, useState} from 'react'
import Children from 'react-children-utilities'
import * as uuid from 'uuid';
import './style.css'

function PGN(props) {
  const element = useRef(null)
  const gameDecription = Children.onlyText(props.children)
  const [fen, setFen] = useState('')
  const [id, setId] = useState('')
  const fenAsWhite = fen.replace(" b ", " w ")
  const fenAsBlack = fen.replace(" w ", " b ")

  const fenURL = (fen) => {
    return "https://lichess.org/editor/" + fen
  }

  useLayoutEffect(() => {
    if (id === '') setId('board-' + uuid.v4())
  })

  useLayoutEffect(() => {
    if (id === '') return

    const { pgnView } = require('@mliebelt/pgn-viewer')

    const game = pgnView(
      id,
      {
        pgn: gameDecription,
        timerTime: '1',
        locale: 'pl',
        startPlay: 1,
        showResult: true,
        boardSize: '340',
        showFen: true,
        pieceStyle: 'chesscom'
      }
    )

    setFen(game.base.chess.fen())
  }, [element, id])

  return (
    <div>
      <a className="lichessLink" href={fenURL(fenAsBlack)} target="_blank"><strong>Lichess (as black)</strong></a>
      <a className="lichessLink" href={fenURL(fenAsWhite)} target="_blank"><strong>Lichess (as white)</strong></a>
      <div id={id} ref={element}></div>
      <hr/>
      <div><strong>PGN</strong></div>
      <textarea className="pgn" readOnly cols={2} rows={10} value={gameDecription} />
    </div>
  )
}

export default PGN;


