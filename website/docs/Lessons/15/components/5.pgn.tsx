
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.05.05"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "3rr1k1/1b2bpp1/pqn1p2p/1pp3N1/2P4P/1P2P1P1/PB1RQPB1/3R2K1 w - - 0 1"]
[PlyCount "7"]
[SourceVersionDate "2021.05.05"]


{[#] Jak powinny grac biale?} 1. Nxf7 $1 Kxf7 2. Qh5+ g6 (2... Kf8 3. Qg6 {
[%csl Rg7]}) 3. Qxh6 Rf8 (3... Rg8 4. Qh7+ Kf8 5. Be4 $18) 4. Be4 $18 {[%cal
Gh6g6]} *

`}
    </PGN>
  )
}

export default Game;
