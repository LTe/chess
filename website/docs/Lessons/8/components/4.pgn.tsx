
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.03.10"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "5n2/pb1q2k1/1prN1pp1/3p3p/3P3N/P5QP/1P3PP1/4R1K1 w - - 0 1"]
[PlyCount "5"]
[SourceVersionDate "2021.03.10"]


{[#] Biale zaczynaja i zdobywaja material} 1. Re7+ Qxe7 2. Nhf5+ Kh7 3. Nxe7
$18 *

`}
    </PGN>
  )
}

export default Game;
