
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
[FEN "k7/8/B1K5/8/3B4/8/8/8 w - - 0 1"]
[PlyCount "5"]
[SourceVersionDate "2021.01.21"]


{[#]Krol jest juz w narozniku. Jak powinnismy grac?} 1. Kb6 {[%cal Rb6a7,Ra6c8,
Ga8b8,Gb8a8]} (1. Kc7 $4 {pat}) 1... Kb8 2. Be5+ Ka8 3. Bb7# *

`}
    </PGN>
  )
}

export default Game;
