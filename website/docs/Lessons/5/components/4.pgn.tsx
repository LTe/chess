
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.02.17"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "Marcin"]
[SetUp "1"]
[FEN "8/1B6/8/8/5K2/8/7p/5bk1 w - - 0 1"]
[PlyCount "3"]
[SourceVersionDate "2021.02.17"]


{[#]} 1. Kg3 Ba6 2. Bg2 {remis, bo biale nie zejda z przekatnej i czarne nie
beda mogly promowac pionka} *

`}
    </PGN>
  )
}

export default Game;
