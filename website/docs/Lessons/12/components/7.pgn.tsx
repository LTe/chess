
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.04.11"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "7Q/8/8/8/8/5K2/2p5/3kB3 w - - 0 1"]
[PlyCount "3"]
[SourceVersionDate "2021.04.11"]


{[#]Mat w 2} 1. Qb2 c1=Q (1... c1=N 2. Qd2#) (1... c1=B 2. Qe2#) 2. Qe2# *

`}
    </PGN>
  )
}

export default Game;
