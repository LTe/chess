
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
[FEN "6k1/8/8/8/4Kp2/8/8/b7 b - - 0 1"]
[PlyCount "7"]
[SourceVersionDate "2021.01.21"]


{[#] Jak powinny zagrac czarne?} 1... Be5 $1 2. Kxe5 {krol jest poza kwadratem}
(2. Kf3 Kf7 3. Ke4 Kf6 4. Kf3 Kf5 5. Kg2 Ke4 6. Kf2 f3 7. Kf1 Ke3 8. Kg1 f2+ 9.
Kf1 Bd4 10. Kg2 Ke2 $19) 2... f3 3. Ke4 f2 4. Ke3 f1=Q $19 *

`}
    </PGN>
  )
}

export default Game;
