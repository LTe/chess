
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
[FEN "8/8/8/8/8/4k3/8/1QR4K w - - 0 1"]
[PlyCount "11"]
[SourceVersionDate "2021.01.21"]


{[#]W tej pozyci mata dajemy spychajac krola na bande} 1. Rc3+ $1 Kd4 (1... Ke2
2. Qb2+ {[%cal Rc3h3,Rb2h2]} Kd1 3. Rc1#) 2. Qb4+ {[%cal Gb4c3]} Kd5 {[%cal
Rb4h4]} 3. Rc5+ {[%cal Rb4h4]} Kd6 4. Qb6+ Kd7 5. Rc7+ Kd8 6. Qb8# *

`}
    </PGN>
  )
}

export default Game;
