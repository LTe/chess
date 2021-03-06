
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.02.10"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "Marcin"]
[SetUp "1"]
[FEN "r1bqk2r/2pp1ppp/pp6/b3P3/B2Q4/B1P5/P1P2PPP/R3K2R w KQkq - 0 1"]
[PlyCount "7"]
[SourceVersionDate "2021.02.10"]


{[#] Biale wygrywaja, bo maja wielka przewage w rozwoju a czarny krol utknal
na e8} 1. e6 $1 {[%cal Re6f7,Rd4g7]} Qf6 (1... fxe6 2. Qxg7 Rf8 3. Qxf8#) 2.
Bxd7+ Kd8 (2... Bxd7 3. Qxd7#) 3. Bc6+ {[%cal Rc6e8,Ra3f8]} Bd7 4. Qxd7# *

`}
    </PGN>
  )
}

export default Game;
