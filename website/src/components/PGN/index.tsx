import React, {useLayoutEffect, useRef, useState} from 'react'
import Children from 'react-children-utilities'
import * as uuid from 'uuid';
import './style.css'

function PGN(props) {
  const id = 'board-' + uuid.v4();
  const element = useRef(null);
  const gameDecription = Children.onlyText(props.children);
  const [fen, setFen] = useState('')
  const fenAsWhite = fen.replace(" b ", " w ")
  const fenAsBlack = fen.replace(" w ", " b ")

  const fenURL = (fen) => {
    return "https://lichess.org/editor/" + fen.replace(" ", "_")
  }

  useLayoutEffect(() => {
    const { pgnView } = require('../pgn-viewer/pgnv')
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
  }, [element])


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


