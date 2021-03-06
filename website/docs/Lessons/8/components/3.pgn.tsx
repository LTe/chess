
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
[FEN "3r2k1/5p2/6p1/4b3/1P2P3/1R2P2p/P1K1N3/8 b - - 0 1"]
[PlyCount "3"]
[SourceVersionDate "2021.03.10"]


{[#] Jak czarne powinny grac, aby wykorzystac silnego wolniaka.} 1... Rd1 $1 {
uniemozliwia wejscie bialej wiezy na 1 linie} (1... Rc8+ $2 2. Kd2 h2 3. Rb1 {
i h1 jest kontrolowane}) 2. Kxd1 (2. Rb1 Rxb1 3. Kxb1 h2 $19) 2... h2 $19 *

`}
    </PGN>
  )
}

export default Game;
