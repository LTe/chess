import React, {useLayoutEffect, useRef, useState} from 'react'
import Children from 'react-children-utilities'
import * as uuid from 'uuid'
import { pgnView } from '@mliebelt/pgn-viewer'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import './style.css'

function extractFen(pgn) {
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

function PGN(props) {
  const element = useRef(null)
  const gameDecription = Children.onlyText(props.children)
  const [id, setId] = useState('')
  const [game, setGame] = useState(null)
  const fenAsWhite = () => game.base.chess.fen().replace(" b ", " w ")
  const fenAsBlack = () => game.base.chess.fen().replace(" w ", " b ")
  const fen = extractFen(gameDecription)

  const fenURL = (fen) => {
    return "https://lichess.org/editor/" + fen
  }

  useLayoutEffect(() => {
    if (id === '') {
      setId('board-' + uuid.v4())
      return
    }

    const game = pgnView(
      id,
      {
        pgn: gameDecription,
        timerTime: '1',
        locale: 'pl',
        position: fen,
        showResult: true,
        boardSize: '340',
        showFen: true,
        layout: 'left',
        pieceStyle: 'chesscom'
      }
    )

    setGame(game)
  }, [element, id])

  return (
    <div>
      <a className="lichessLink" onClick={() => open(fenURL(fenAsBlack()))} target="_blank"><strong>Lichess (as black)</strong></a>
      <a className="lichessLink" onClick={() => open(fenURL(fenAsWhite()))} target="_blank"><strong>Lichess (as white)</strong></a>
      <div id={id} ref={element}></div>
      <hr/>

      <div><strong>PGN</strong></div>
      <div>
        <CopyToClipboard text={gameDecription}>
          <button>Copy</button>
        </CopyToClipboard>
      </div>
      <textarea cols={100} rows={10} defaultValue={gameDecription} />
    </div>
  )
}

export default PGN;


