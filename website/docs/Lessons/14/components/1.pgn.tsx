
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.04.28"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "3r1q1k/p5b1/1r3p1p/1ppBpQpP/4P3/2P3P1/PP1R1PK1/3R4 w - - 0 1"]
[PlyCount "3"]
[SourceVersionDate "2021.04.28"]


{[#] Biale zaczynaja i zwyciezaja} 1. Bg8 $3 Rxd2 (1... Qxg8 2. Rxd8 $18) 2.
Qh7# *

`}
    </PGN>
  )
}

export default Game;
