
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
[FEN "1B6/1K6/P7/1k6/8/4b3/8/8 w - - 0 1"]
[PlyCount "7"]
[SourceVersionDate "2021.02.17"]


{[#] Biale wygrywaja} 1. Ba7 $1 Bf4 (1... Bxa7 2. Kxa7 $18) 2. Bf2 {grozi a7}
Bb8 $1 3. Bg3 $1 (3. Kxb8 $2 Kxa6 $11) 3... Bxg3 4. a7 $1 $18 *

`}
    </PGN>
  )
}

export default Game;
