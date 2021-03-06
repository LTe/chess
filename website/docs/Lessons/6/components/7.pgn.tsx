
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
[FEN "8/r7/4P3/3P4/8/k7/8/6K1 b - - 0 1"]
[PlyCount "1"]
[SourceVersionDate "2021.02.24"]


{[#] Czarne na ruchu i zwyciezaja, bo biale nie sa w stanie ustawic obu pionow
na 6 linii.} 1... Re7 $1 {piony sa zastopowane i nie moga sie polaczyc na 6
linii.} *

`}
    </PGN>
  )
}

export default Game;
