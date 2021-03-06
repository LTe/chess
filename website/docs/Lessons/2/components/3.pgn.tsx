
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.01.27"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "Marcin"]
[SetUp "1"]
[FEN "8/2k5/p1P5/P1K5/8/8/8/8 w - - 0 1"]
[PlyCount "9"]
[SourceVersionDate "2021.01.27"]


{[#] Biale zaczynaja i zwyciezaja} 1. Kd5 {znowu wygrywamy dzieki metodzie
trojkata} Kc8 2. Kc4 Kb8 $1 (2... Kc7 3. Kc5 $18 Kc8 4. Kb6 Kb8 5. Kxa6 $18) 3.
Kd4 $1 (3. Kc5 $2 Kc7 {i to samo co na poczatku}) 3... Kc8 (3... Kc7 4. Kc5 Kc8
5. Kb6 $18) 4. Kd5 $1 Kc7 (4... Kd8 5. Kd6 Kc8 6. c7 Kb7 7. Kd7 $18) 5. Kc5 $18
*

`}
    </PGN>
  )
}

export default Game;
