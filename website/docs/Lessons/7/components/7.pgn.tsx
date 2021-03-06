
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.03.03"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "8/Pk6/1P6/3K4/8/8/8/8 w - - 0 1"]
[PlyCount "7"]
[SourceVersionDate "2021.03.03"]


{[#] Biale zaczynaja i zwyciezaja} 1. a8=Q+ $1 (1. Kd6 $2 Ka8 2. Kc6 $4 $11)
1... Kxa8 2. Kc6 {opozycja skosna i ruch czarnych} Kb8 {czarne stracily
opozycje i przegrywaja} 3. b7 Ka7 4. Kc7 $18 *

`}
    </PGN>
  )
}

export default Game;
