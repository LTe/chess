
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
[FEN "8/8/3p4/8/5P2/k7/8/K7 b - - 0 1"]
[PlyCount "8"]
[SourceVersionDate "2021.01.21"]


{[%csl Rd6][%cal Gf4b4,Gb4b8,Ra3f8] [#] Czarne wchodza do kwadratu, ale nie
lapia piona, bo na najkrotszej drodze stoi ich wlasny pion} 1... Kb4 2. f5 Kc5
3. f6 {[%cal Gf6d6,Gd6d8]} Kd5 4. f7 Ke6 5. f8=Q *

`}
    </PGN>
  )
}

export default Game;
