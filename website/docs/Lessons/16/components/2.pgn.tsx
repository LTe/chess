
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.05.12"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "2rqrnk1/pb2bpp1/2p1p2p/3nP2Q/Np1P4/3B1N2/PP3PPP/R1B1R1K1 w - - 0 1"]
[PlyCount "15"]
[SourceVersionDate "2021.05.12"]


{[#] Jak biale powinny grac?} 1. Bxh6 $1 gxh6 2. Re4 $1 {kolejna figura do gry}
(2. Qxh6 $6 f5 3. exf6 Bxf6 $13 {[%cal Gf6g7]}) 2... Ng6 3. Qxh6 c5 (3... Bf8
4. Qh5 Ndf4 5. Rxf4 $18) 4. Rg4 Bf8 5. Qh5 Bg7 6. Bxg6 fxg6 7. Qxg6 Qe7 (7...
Qd7 8. Nxc5 $18) 8. Nxc5 $18 {[%cal Gf3g5] i Sg5} *

`}
    </PGN>
  )
}

export default Game;
