
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.02.24"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "8/r7/4P3/3P4/8/k7/8/6K1 w - - 0 1"]
[PlyCount "5"]
[SourceVersionDate "2021.02.24"]


{[#] Biale na ruchu i zwyciezaja} 1. d6 $1 {ZASADA: DWA POLACZONE WOLNE PIONY
NA LINII 6, LUB WYZEJ ZAWSZE WYGRYWAJA Z WIEZA.} Kb4 2. e7 Ra8 (2... Ra1+ 3.
Kf2 Rd1 4. e8=Q Rxd6 $18) 3. d7 $18 *

`}
    </PGN>
  )
}

export default Game;
