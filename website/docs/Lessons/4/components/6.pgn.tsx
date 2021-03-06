
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
[FEN "r1bqkb1r/1p3ppp/p7/3N4/8/3Q1N2/PP3PPP/3R1RK1 w kq - 0 1"]
[PlyCount "5"]
[SourceVersionDate "2021.02.10"]


{[#] Biale wygrywaja dzieki ogromnej przewadze w rozwoju} 1. Nf6+ $1 {[%cal
Gd3d8]} Qxf6 (1... gxf6 2. Qxd8#) 2. Rfe1+ Be7 (2... Be6 3. Qd7#) (2... Qe7 3.
Qd8#) (2... Qe6 3. Qd8#) 3. Qd8# *

`}
    </PGN>
  )
}

export default Game;
