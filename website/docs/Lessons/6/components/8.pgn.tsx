
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`[Event "?"]
[Site "?"]
[Date "2021.02.24"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "3R4/8/8/8/5K2/pp6/7k/8 b - - 0 1"]
[PlyCount "8"]
[SourceVersionDate "2021.02.24"]


{[%csl Re3,Rf3,Rg3] [#] Ta sytuacja jest wyjatkowa, bo bialy krol ejst dosc
blisko pionow, a jeden z nich jest pionem bandowym. Dodatkowo fatalnie stoi
czarny krol.} 1... Kg1 (1... Kh1 2. Kg3 {[%cal Gd8d1] i mat na d1}) 2. Kf3 (2.
Rd3 $4 b2) (2. Rb8 $4 a2) 2... b2 (2... Kh1 3. Kg3 $18) (2... Kf1 3. Rd1#) 3.
Rd1+ Kh2 4. Rb1 {[%csl Rh2]} a2 5. Rxb2+ $18 *

`}
    </PGN>
  )
}

export default Game;
