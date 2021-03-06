
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
[FEN "8/8/6pp/5p1k/5P2/7K/6P1/8 w - - 0 1"]
[PlyCount "5"]
[SourceVersionDate "2021.01.27"]


{[#] Biale zaczynaja i osiagaja remis.} 1. g4+ $1 fxg4+ 2. Kg3 g5 3. f5 {pat} *

`}
    </PGN>
  )
}

export default Game;
