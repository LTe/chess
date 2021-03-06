
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.02.24"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "8/5P2/2k5/5K2/8/8/8/5r2 w - - 0 1"]
[PlyCount "5"]
[SourceVersionDate "2021.02.24"]


{[#] Jak biale powinny zagrac, aby uzyskac remis?} 1. Ke6 $1 {[%csl Rd5,Rd6,
Rd7] tzw odpychanie barkiem} (1. Kg6 $4 Kd7 2. Kg7 Ke7 $19) 1... Re1+ 2. Kf6
Rf1+ (2... Kd7 3. f8=Q Rf1+ 4. Kg7 Rxf8 5. Kxf8 $11) 3. Ke7 $11 *

`}
    </PGN>
  )
}

export default Game;
