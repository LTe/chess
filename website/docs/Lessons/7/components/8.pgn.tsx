
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
[FEN "1k6/8/1PK5/1P6/8/8/8/8 w - - 0 1"]
[PlyCount "9"]
[SourceVersionDate "2021.03.03"]


{[#] Biale zaczynaja i wygrywaja} 1. b7 Ka7 2. b8=Q+ $1 (2. b6+ $4 Kb8 3. Kb5
Kxb7 $11) (2. Kc7 $4 $11) 2... Kxb8 3. Kb6 {opozycja, ruch czarnych} Ka8 4. Kc7
Ka7 5. b6+ $18 *

`}
    </PGN>
  )
}

export default Game;
