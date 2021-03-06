
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.01.21"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "Marcin"]
[SetUp "1"]
[FEN "rnb1k2r/pp2bppp/4p3/8/3q4/2NB4/PP3PPP/R1BQ1RK1 w kq - 0 1"]
[PlyCount "5"]
[SourceVersionDate "2021.01.21"]


{[#] Biale zaczynaja i zdobywaja figure} 1. Bb5+ $1 {[%csl Rd4,Re8] podwojne
uderzenie - na krola i hetmana} Nc6 {[%cal Gc6d4]} 2. Bxc6+ bxc6 3. Qxd4 $18 *

`}
    </PGN>
  )
}

export default Game;
