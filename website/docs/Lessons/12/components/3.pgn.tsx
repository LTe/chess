
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.04.11"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "8/8/3p4/k7/P1P5/p7/2K5/8 w - - 0 1"]
[PlyCount "24"]
[SourceVersionDate "2021.04.11"]


{[#] Biale zaczynaja i osiagaja remis.} 1. Kb3 a2 2. Kb2 $1 (2. Kxa2 $2 Kxa4 {
opozycja i ruch bialych.} 3. Kb2 Kb4 4. Kc2 Kxc4 5. Kd2 Kd4 6. Ke2 Kc3 $19)
2... Kb4 $1 3. Ka1 $1 Kxa4 4. c5 $1 dxc5 5. Kxa2 Kb4 6. Kb2 Kc4 7. Kc2 Kd4 8.
Kd2 c4 9. Kc2 c3 10. Kc1 Kd3 11. Kd1 c2+ 12. Kc1 Kc3 $11 *

`}
    </PGN>
  )
}

export default Game;
