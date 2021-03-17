
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
[FEN "8/3KN3/8/2p1k3/7Q/3P4/8/8 w - - 0 1"]
[PlyCount "3"]
[SourceVersionDate "2021.03.17"]


{[#] Mat w 2} 1. Nd5 Kxd5 (1... Kf5 2. Qh5#) 2. Qe4# *

`}
    </PGN>
  )
}

export default Game;
