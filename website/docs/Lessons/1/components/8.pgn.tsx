
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
[FEN "4k3/8/8/1b3b2/8/8/8/R3K2R w KQ - 0 1"]
[PlyCount "1"]
[SourceVersionDate "2021.01.21"]


{[%cal Ge1g1,Rb5f1] [#] Biale nie moga zrobic roszady krotkiej, bo pole f1
jest szachowane. Moga za to zagrac dluga, bo krol nie przechodzi przez szacha} 
1. O-O-O *

`}
    </PGN>
  )
}

export default Game;
