
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
[FEN "8/8/8/8/5P2/k7/8/K7 b - - 0 1"]
[PlyCount "7"]
[SourceVersionDate "2021.01.21"]


{[#]Ta sama pozycja, ale na ruchu sa czarne i wchodza do kwadratu bialego
pionka} 1... Kb4 2. f5 {[%cal Gf5c5,Gc5c8]} Kc5 3. f6 {[%csl Gd8][%cal Gf6d6,
Gd6d8]} Kd6 4. f7 Ke7 $11 *

`}
    </PGN>
  )
}

export default Game;
