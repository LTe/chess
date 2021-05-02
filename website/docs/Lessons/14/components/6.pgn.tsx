
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
[FEN "8/1Q6/8/1p6/Np6/Nk6/8/1K6 w - - 0 1"]
[PlyCount "3"]
[SourceVersionDate "2021.04.28"]


{[#] Mat w 2} 1. Qa6 $1 Kxa3 (1... bxa4 2. Qd3#) (1... bxa3 2. Qxb5#) 2. Nc5# {
[%cal Rc5b3]} *

`}
    </PGN>
  )
}

export default Game;
