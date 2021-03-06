
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.01.27"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "Marcin"]
[SetUp "1"]
[FEN "8/ppp5/8/PPP5/6k1/8/6K1/8 w - - 0 1"]
[PlyCount "5"]
[SourceVersionDate "2021.01.27"]


{[#] Biale zaczynaja i zwyciezaja wykonujac przelom. ZASADA: PRZELOM ZAWSZE
ROBI SIE W SRODKU} 1. b6 $1 (1. a6 $2 b6 $11) 1... cxb6 (1... axb6 2. c6 bxc6 (
2... bxa5 3. cxb7 $18) 3. a6 $18) 2. a6 $1 bxc5 (2... bxa6 3. c6 $18) 3. axb7
$18 *

`}
    </PGN>
  )
}

export default Game;
