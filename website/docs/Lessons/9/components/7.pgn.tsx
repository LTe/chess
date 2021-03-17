
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
[FEN "K3Nk2/PP2p3/4Q3/8/8/8/8/8 w - - 0 1"]
[PlyCount "3"]
[SourceVersionDate "2021.03.17"]


{[#]Mat w 2} 1. b8=N $1 Kxe8 {[%cal Rb8d7]} 2. Qg8# {[%cal Rb8d7,Rg8c8,Rg8c4]}
*

`}
    </PGN>
  )
}

export default Game;
