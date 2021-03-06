
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
[FEN "4k3/8/8/8/8/1P6/8/2K5 w - - 0 1"]
[PlyCount "11"]
[SourceVersionDate "2021.03.03"]


{[#] Biale zaczynaja i zwyciezaja} 1. Kb2 $1 (1. Kc2 $2 Kd7 2. Kc3 Kc7 $1 (2...
Kc6 $2 3. Kc4 $1 $18) 3. b4 Kb6 4. Kc4 Kc6 $11) (1. b4 $2 Kd7 2. Kd2 Kc6 3. Kc3
Kb5 {remis, bo bialy krol nie wejdzie przed piona} 4. Kb3 Kb6 $1 5. Kc4 Kc6 6.
b5+ Kb6 7. Kb4 Kb7 $1 {itd}) 1... Kd7 2. Ka3 Kc6 3. Ka4 $1 {opozycja skosna!}
Kb6 4. Kb4 Ka6 5. Kc5 Kb7 6. Kb5 $18 *

`}
    </PGN>
  )
}

export default Game;
