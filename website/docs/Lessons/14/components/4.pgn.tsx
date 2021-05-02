
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.04.28"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "5rk1/1b1qbp2/r4Rp1/p2p2B1/2pP3Q/2p1P3/PPB3PP/5RK1 w - - 0 1"]
[PlyCount "11"]
[SourceVersionDate "2021.04.28"]


{[#] Jak biale powinny prowadzic atak.} 1. Bxg6 $1 {[%csl Rh7]} fxg6 2. Rxf8+ {
eliminacja obroncy} Bxf8 3. Rxf8+ $1 Kxf8 (3... Kg7 4. Qh8#) 4. Qh8+ Kf7 5.
Qh7+ Kf8 (5... Ke8 6. Qg8#) (5... Ke6 6. Qxg6#) 6. Qxd7 $18 *

`}
    </PGN>
  )
}

export default Game;
