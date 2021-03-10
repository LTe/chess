
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.03.10"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "r3bk1r/1p2bp2/4pn1p/p3N3/2Pp1B2/8/q1B1QPPP/3R1RK1 w - - 0 1"]
[PlyCount "3"]
[SourceVersionDate "2021.03.10"]


{[#] Biale zaczynaja i zdobywaja material} 1. Bh7 $1 {[%cal Rf4h6]} Qxe2 (1...
Rxh7 2. Qxa2 $18) 2. Bxh6# {[%cal Rh6f8,Rh7g8]} *

`}
    </PGN>
  )
}

export default Game;
