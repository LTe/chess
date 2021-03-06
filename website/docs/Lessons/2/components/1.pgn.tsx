
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.01.27"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "Marcin"]
[SetUp "1"]
[FEN "8/8/8/8/5kP1/4p2P/4K3/8 w - - 0 1"]
[PlyCount "11"]
[SourceVersionDate "2021.01.27"]


{[%cal Ge2e1,Ge1f1,Gf1e2] [#] Biale zaczynaja i zwyciezaja przeprowadzajac tzw
manewr trojkata. W tej pozycji czarne przegrywaja, jesli maja ruch.
Doprowadzamy wiec do takiej samej pozycji z ruchem czarnych} 1. Ke1 $1 Kg5 (
1... Kf3 2. g5 $18) 2. Kf1 {[%cal Ge2e1,Ge1f1,Gf1e2]} Kf4 3. Ke2 $1 {manewr
zakonczony i biale zwyciezaja} Ke4 4. g5 Kf5 5. h4 Ke4 6. g6 $18 *

`}
    </PGN>
  )
}

export default Game;
