
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.03.10"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "2r3r1/p2kb2p/bq2p3/3p1p2/5P2/2BB3Q/PP4PP/3RKR2 b - - 0 1"]
[PlyCount "7"]
[SourceVersionDate "2021.03.10"]


{[#]Czarne zaczynaja i zwyciezaja} 1... Rg3 $1 2. Qxg3 (2. hxg3 Qe3+ 3. Be2
Qxe2#) 2... Bh4 3. Qxh4 (3. Ke2 Bxg3 4. hxg3 $19) 3... Qe3+ 4. Be2 Qxe2# *

`}
    </PGN>
  )
}

export default Game;
