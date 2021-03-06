
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
[FEN "8/8/1PK5/r7/8/8/6k1/8 w - - 0 1"]
[PlyCount "9"]
[SourceVersionDate "2021.02.24"]


{[#] Biale zaczynaja i zwyciezaja} 1. b7 $1 (1. Kc7 $2 Rc5+ 2. Kb7 (2. Kd7 Rb5
$11) 2... Rb5 $11) 1... Ra6+ 2. Kc5 $1 {grozi b8 H} (2. Kc7 $2 Ra7 $11) (2. Kb5
$2 Ra1 $1 3. Kc6 (3. b8=Q $4 Rb1+ 4. Kc6 Rxb8 $19) 3... Rb1 {i remis}) 2...
Ra5+ 3. Kc4 {[%cal Gb7b8]} (3. Kb4 $2 Ra1 $1) 3... Ra4+ 4. Kc3 Ra3+ 5. Kb2 $18
*

`}
    </PGN>
  )
}

export default Game;
