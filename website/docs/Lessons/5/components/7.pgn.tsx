
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.02.17"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "Marcin"]
[SetUp "1"]
[FEN "1K6/1bPB4/1k6/8/8/8/8/8 w - - 0 1"]
[PlyCount "3"]
[SourceVersionDate "2021.02.17"]


{[#] Biale na ruchu.} 1. Bb5 $3 {[%csl Ra6,Ra7,Rc6] krol musi przestac bronic
gonca} Kxb5 2. Kxb7 $18 *

`}
    </PGN>
  )
}

export default Game;
