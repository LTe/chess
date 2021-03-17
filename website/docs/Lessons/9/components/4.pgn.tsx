
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
[FEN "6k1/5ppp/3p4/1p1Pp1bn/1Pp1P3/2P2P2/2B2P1P/4B1K1 b - - 0 1"]
[PlyCount "19"]
[SourceVersionDate "2021.03.17"]


{[%csl Re1,Rh2] [#] Znajdz dla czarnych wygrywajacy plan.} 1... Bc1 $1 {
[%csl Re1,Rh2][%cal Gh5f4,Gg8f8,Gf8e7,Ge7h3,Gf4d3] z idea dojscia Kh3 i Sf4-d3}
2. Kf1 Nf4 {[%csl Re2]} 3. Bb1 Kf8 4. Bc2 Ke7 5. Bb1 Kf6 6. Bc2 Kg5 7. Kg1 Kh4
8. Kf1 Kh3 9. Kg1 Nd3 10. Kf1 Kxh2 $19 *

`}
    </PGN>
  )
}

export default Game;
