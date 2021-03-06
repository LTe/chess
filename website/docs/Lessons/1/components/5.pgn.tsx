
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
[FEN "8/8/8/8/5P2/k7/8/K7 w - - 0 1"]
[PlyCount "7"]
[SourceVersionDate "2021.01.21"]


{[%cal Gf4b4,Gb4b8,Ga3b4] [#] Kwadrat piona wyznaczaja punkty b4, b8, f4, f8.
ZASADA: JESLI KROL PRZECIWNIKA WEJDZIE DO KWARDATU, TO LAPIE PIONKA I TEN NIE
ZAMIENI SIE W HETMANA} 1. f5 {[%cal Gf5c5,Gc5c8,Ra3b4] biale zmniejszyly
kwadrat i krol nie moze do niego wejsc} Kb4 2. f6 {[%cal Gf6d6,Gd6d8]} Kc5 3.
f7 {[%cal Gf7e7,Ge7e8]} Kd6 4. f8=Q+ $18 *

`}
    </PGN>
  )
}

export default Game;
