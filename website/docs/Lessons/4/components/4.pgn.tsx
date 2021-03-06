
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
[FEN "r1b2rk1/pp3ppp/1n6/3RP2q/3P3B/Q4N2/P4PPP/5RK1 w - - 0 1"]
[PlyCount "3"]
[SourceVersionDate "2021.02.10"]


{[#]Mat w 2} 1. Qxf8+ Kxf8 2. Rd8# $18 *

`}
    </PGN>
  )
}

export default Game;
