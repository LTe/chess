
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
[FEN "8/pp6/8/6k1/P5P1/6K1/8/8 b - - 0 1"]
[PlyCount "12"]
[SourceVersionDate "2021.02.03"]


{[#] Jak czarne powinny grac, aby uzyskac remis?} 1... b6 $1 (1... a6 $2 2. a5
$18 {oba czarne piony sa zagrozone}) 2. Kf3 a6 3. Ke4 Kxg4 4. Kd5 b5 5. axb5
axb5 6. Kc5 b4 7. Kxb4 $11 *

`}
    </PGN>
  )
}

export default Game;
