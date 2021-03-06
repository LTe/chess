
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.02.03"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "Marcin"]
[SetUp "1"]
[FEN "8/8/2p2k2/pp3Pp1/6P1/PKP5/8/8 w - - 0 1"]
[PlyCount "13"]
[SourceVersionDate "2021.02.03"]


{[#] Biale wygrywaja dzieli podpartemu wolnemu pionkowi f5} 1. a4 $1 Ke5 (1...
bxa4+ 2. Kxa4 $18) 2. axb5 cxb5 3. c4 a4+ (3... b4 4. c5 $18) 4. Kc3 bxc4 5.
Kxc4 Kd6 6. Kb4 Ke7 7. Kxa4 $18 *

`}
    </PGN>
  )
}

export default Game;
