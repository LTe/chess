
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.04.14"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "r2qnr2/6bk/p2p3p/2pPnp2/Pp6/4NP2/1P1QBBPP/R4RK1 w - - 0 1"]
[PlyCount "5"]
[SourceVersionDate "2021.04.14"]


{[#] Jak powinny grac biale?} 1. Nxf5 $1 Rxf5 2. Qc2 {[%cal Gg2g4]} Qg5 3. g4
$18 *

`}
    </PGN>
  )
}

export default Game;
