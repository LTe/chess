
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.02.24"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "2K5/8/8/8/8/4k3/1p4p1/6R1 w - - 0 1"]
[PlyCount "3"]
[SourceVersionDate "2021.02.24"]


{[#] Biale zaczynaja i uzyskuja remis.} 1. Rb1 $1 Kd3 (1... Kf2 2. Rxb2+ $11) (
1... Kf3 2. Kd7 Kg3 3. Kd6 Kh2 4. Rxb2 $11) 2. Rg1 {itd. remis} (2. Kd7 $4 Kc2
$19) (2. Rd1+ $4 Kc2 $19 {atakuje wieze i umozliwia b1H}) *

`}
    </PGN>
  )
}

export default Game;
