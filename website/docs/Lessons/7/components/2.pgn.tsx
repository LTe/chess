
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.03.03"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "8/8/8/5K2/8/5pk1/8/6Bn b - - 0 1"]
[PlyCount "7"]
[SourceVersionDate "2021.03.03"]


{[#] Czarne zaczynaja i zwyciezaja} 1... Nf2 $1 (1... Kg2 $2 2. Bb6 $11 {
biale oddadza gonca za piona}) 2. Ke5 Kg2 3. Kf4 Nh3+ (3... Kxg1 $2 4. Kxf3 $11
) 4. Ke3 Nxg1 $19 *

`}
    </PGN>
  )
}

export default Game;
