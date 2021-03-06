
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.03.31"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "r2qk2r/pp1nbppp/5n2/1BpPp1B1/4P3/2N2Q2/PPP2PPP/R3K2R w KQkq - 0 1"]
[PlyCount "7"]
[SourceVersionDate "2021.03.31"]


{[#] Jak biale powinny grac?} 1. d6 $1 {oddanie piona za otwarcie linii d dla
wiezy} Bxd6 (1... Bf8 2. Nd5 {[%cal Rg5d8,Gd5c7] i Sc7}) 2. O-O-O Be7 (2... Qe7
3. Bxf6 gxf6 4. Nd5 Qe6 5. Nxf6+ $18) (2... a6 3. Bxd7+ Qxd7 4. Bxf6 gxf6 5.
Qxf6 $18) (2... Ke7 3. Bxd7 Qxd7 (3... Kxd7 4. Nb5 $18) 4. Nd5+ Kf8 5. Nxf6
gxf6 6. Qxf6 $18) 3. Bxf6 Bxf6 4. Rxd7 $18 *

`}
    </PGN>
  )
}

export default Game;
