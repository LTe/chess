
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.03.03"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "8/8/8/5p2/3k4/5P2/8/6K1 w - - 0 1"]
[PlyCount "16"]
[SourceVersionDate "2021.03.03"]


{[#] Biale uzyskuja remis.} 1. f4 $1 Ke4 2. Kg2 (2. Kf2 $4 Kxf4 $19) 2... Kxf4
3. Kf2 {opozycja i remis} Ke4 4. Ke2 f4 5. Kf2 f3 6. Kf1 $1 Ke3 7. Ke1 f2+ 8.
Kf1 Kf3 *

`}
    </PGN>
  )
}

export default Game;
