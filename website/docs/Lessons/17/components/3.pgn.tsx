
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.06.02"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "8/8/8/p1p4k/P1P5/1P6/1K6/8 w - - 0 1"]
[PlyCount "3"]
[SourceVersionDate "2021.06.02"]


{[#] Biale zaczynaja i wygrywaja} 1. b4 $1 {biale wyrabiaja wolniaka i czarny
krol jest poza kwadratem!} Kg5 (1... cxb4 2. c5 $18 {[%cal Gc5c8,Gc8f8,Gf8f5,
Gf5c5]}) (1... axb4 2. a5 $18) 2. bxa5 $18 *

`}
    </PGN>
  )
}

export default Game;
