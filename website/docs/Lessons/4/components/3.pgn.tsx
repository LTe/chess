
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.02.10"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "Marcin"]
[SetUp "1"]
[FEN "3q1r1k/1b1nNppp/4p3/1Nnp4/1R6/4PP2/2Q1B1PP/6K1 w - - 0 1"]
[PlyCount "3"]
[SourceVersionDate "2021.02.10"]


{[#] Biale daja mata w 2} 1. Qxh7+ $3 Kxh7 2. Rh4# *

`}
    </PGN>
  )
}

export default Game;
