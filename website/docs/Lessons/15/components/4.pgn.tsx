
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
[FEN "2b2rk1/5pnp/p5p1/1p4q1/1P1NP3/1B1Q2bP/P5P1/3R1RK1 w - - 0 1"]
[PlyCount "7"]
[SourceVersionDate "2021.05.05"]


{[#] Jak biale powinny grac?} 1. Rxf7 $1 Rxf7 2. Nf3 {[%csl Rd8,Rg5]} Qe7 3.
Qd8+ Qf8 (3... Qxd8 4. Rxd8+ Ne8 5. Rxe8+) 4. Ng5 $18 *

`}
    </PGN>
  )
}

export default Game;
