
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.04.11"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "8/8/5Nb1/3p4/3k4/3P4/2PK4/8 w - - 0 1"]
[PlyCount "5"]
[SourceVersionDate "2021.04.11"]


{[%csl Gd7] [#] Biale zaczynaja i zwyciezaja} 1. Nd7 $1 {[%cal Rd7c5,Rd7e5]}
Bxd3 $1 (1... Be8 2. c3#) 2. c3+ (2. cxd3 $2 $11) 2... Kc4 (2... Ke4 3. Nc5+
$18) 3. Ne5+ $18 *

`}
    </PGN>
  )
}

export default Game;
