
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
[FEN "8/8/8/pPk3pp/2P1p3/1pK3P1/5PP1/8 b - - 0 1"]
[PlyCount "13"]
[SourceVersionDate "2021.01.27"]


{[#] Jak czarne powinny grac?} 1... g4 $1 {[%cal Gh5h2]} 2. Kxb3 (2. Kb2 h4 3.
gxh4 g3 4. fxg3 e3 $19 {[%csl Gb3,Ge3]}) 2... h4 {[%cal Gh4h3,Gh3h1] grozi ..h3
} 3. gxh4 {[%cal Ge4e1,Gg4g3]} g3 4. fxg3 e3 5. Kc2 e2 6. Kd2 a4 7. Kxe2 a3 $19
{[%cal Ga3c3,Gc3c1]} *

`}
    </PGN>
  )
}

export default Game;
