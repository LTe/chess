
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
[FEN "8/6pp/8/4kPPP/8/8/2K5/8 w - - 0 1"]
[PlyCount "5"]
[SourceVersionDate "2021.01.27"]


{[#] Biale zwyciezaja} 1. f6 $1 gxf6 (1... Ke6 2. g6 hxg6 3. fxg7 Kf7 4. h6 $18
) 2. g6 hxg6 3. h6 $18 *

`}
    </PGN>
  )
}

export default Game;
