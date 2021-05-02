
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.04.28"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "8/8/8/8/8/5K2/1QBk4/8 w - - 0 1"]
[PlyCount "3"]
[SourceVersionDate "2021.04.28"]


{[#]Mat w 2} 1. Ba4+ Ke1 (1... Kd3 2. Bb5#) 2. Qe2# *

`}
    </PGN>
  )
}

export default Game;
