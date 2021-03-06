
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
[FEN "6B1/8/7B/8/8/1K6/8/k7 w - - 0 1"]
[PlyCount "5"]
[SourceVersionDate "2021.01.21"]


{[#] Dwa gonce matuja jesli uda sie zagonic krola przeciwnika do jednego z
rogow.} 1. Bf7 $1 {oddaje przeciwnikowi tempo} (1. Bh7 $4 {[%csl Ga1][%cal
Rh7b1,Rh6c1,Rb3a2,Rb3b2,Rb3c2] pat}) 1... Kb1 2. Bg6+ {[%cal Rh6c1,Rg6b1]} Ka1
3. Bg7# *

`}
    </PGN>
  )
}

export default Game;
