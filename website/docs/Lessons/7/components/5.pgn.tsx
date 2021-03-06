
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
[FEN "8/1k6/8/1K6/1P6/8/8/8 b - - 0 1"]
[PlyCount "12"]
[SourceVersionDate "2021.03.03"]


{[%cal Rb7a6,Rb7b6,Rb7c6] [#] Ta sama pozycja, ale czarne sa na ruchu, traca
opozycje i przegrywaja} 1... Kc7 {czarne stracily opozycje i kontrole nad
polem a6} 2. Ka6 Kb8 3. Kb6 {opozycja, ruch czarnych} Kc8 4. Ka7 {czarne
stracily pole b8 i biale dorabiaja hetmana} (4. b5 $4 Kb8 {opozycja i ruch i
bialych}) 4... Kc7 5. b5 Kc8 6. b6 Kd7 7. b7 $18 *

`}
    </PGN>
  )
}

export default Game;
