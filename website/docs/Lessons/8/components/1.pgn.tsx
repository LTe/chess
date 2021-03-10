
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
[FEN "3r3k/2p3pp/Qb2q2r/3pP3/1P1B1p2/2P2P2/P5PP/R3R2K b - - 0 1"]
[PlyCount "7"]
[SourceVersionDate "2021.03.10"]


{[#] Czarne zaczynaja i zdobywaja material.} 1... Rxh2+ $1 2. Kxh2 (2. Kg1
Bxd4+ 3. Kxh2 Qxa6 $18) 2... Qh6+ 3. Kg1 Bxd4+ 4. cxd4 Qxa6 $18 *

`}
    </PGN>
  )
}

export default Game;
