
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
[FEN "5rk1/1pq2p1p/4p1p1/1R6/8/PP3QP1/5P1P/2rR2K1 b - - 0 1"]
[PlyCount "5"]
[SourceVersionDate "2021.03.10"]


{[#] Czarne zaczynaja i zdobywaja material.} 1... Qc6 $1 {[%cal Rc6f3,Rc6b5]
atak na 2 niebronione figury} 2. Qe2 (2. Qxc6 Rxd1+ 3. Kg2 bxc6 $19) 2... Rxd1+
3. Qxd1 Qxb5 $19 *

`}
    </PGN>
  )
}

export default Game;
