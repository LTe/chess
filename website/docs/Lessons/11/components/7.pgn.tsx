
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
[FEN "rn2kb1r/p3qppp/2p2n2/1p2p1B1/2B1P3/1QN5/PPP2PPP/R3K2R w KQkq - 0 1"]
[PlyCount "15"]
[SourceVersionDate "2021.03.31"]


{[#] Biale maja gigantyczna przewage w rozwoju. Jak powinny grac?} 1. Nxb5 $1 {
otwiera wiecej linii i przekatnych do ataku} cxb5 2. Bxb5+ Nbd7 (2... Kd8 3.
O-O-O+ Kc8 4. Rd3 {[%cal Gd3c3] umozliwia Wc3, albo Whd1} Qb4 5. Rc3+ Kb7 6.
Qxf7+ Qe7 7. Qc4 $18 {[%csl Ra8,Rb8,Rf6,Rf8,Rh8][%cal Gh1d1]}) 3. O-O-O Rd8 {
[#]} 4. Rxd7 $1 Rxd7 5. Rd1 Qe6 6. Bxd7+ Nxd7 7. Qb8+ $3 Nxb8 8. Rd8# *

`}
    </PGN>
  )
}

export default Game;
