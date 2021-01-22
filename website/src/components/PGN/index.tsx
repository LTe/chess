import React, {useEffect, useRef, useState} from 'react'
import {pgnView} from '../pgn-viewer/pgnv'
import Children from 'react-children-utilities'
import * as uuid from 'uuid';

function PGN(props) {
  const id = 'board-' + uuid.v4();
  const element = useRef(null);

  const gameDecription = Children.onlyText(props.children);

  useEffect(() => {
    pgnView(
      id,
      {
        pgn: gameDecription,
        timerTime: '1',
        locale: 'pl',
        startPlay: 1,
        showResult: true,
        boardSize: '400',
        pieceStyle: 'chesscom'
      }
    )
  }, [element])

  console.debug(id)

  return (
    <div>
      <div id={id} ref={element}></div>
      <textarea className="pgn" readOnly cols={2} rows={10} value={gameDecription} />
    </div>
  )
}

export default PGN;


