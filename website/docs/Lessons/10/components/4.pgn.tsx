
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.03.28"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "8/3N4/8/k7/p7/2P2Q2/3K4/8 w - - 0 1"]
[PlyCount "3"]
[SourceVersionDate "2021.03.28"]


{[#] Mat w 2} 1. c4 {[%cal Rd7b6,Rc4b5]} Kb4 (1... Ka6 2. Qa8# {[%csl Rb5]}) 2.
Qc3# *

`}
    </PGN>
  )
}

export default Game;
