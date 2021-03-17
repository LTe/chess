
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.03.17"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "3B4/kBP5/8/N1p5/2K5/8/8/8 w - - 0 1"]
[PlyCount "3"]
[SourceVersionDate "2021.03.17"]


{[#] Mat w 2} 1. c8=B $1 {[%cal Gc8b7]} Kb8 2. Nc6# {[%cal Rc6b8,Rc6a7]} *

`}
    </PGN>
  )
}

export default Game;
