
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.03.17"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "r4rk1/1q1nbppp/pp1pbn2/4p3/P3P3/1NN1BP2/1PPQB1PP/R2R2K1 w - - 0 1"]
[PlyCount "7"]
[SourceVersionDate "2021.03.17"]


{[%csl Rd5] [#] Biale zagraly} 1. Nc1 {[%cal Gc1a2,Ga2b4,Gb4d5] jaki jest cel
tego ruchu? ODPOWIEDZ: BIALE CHCA PRZESTAWIC SKOCZKA NA POLE D5. Czarne maja
slabosc na d6 i zeby jej scie pozbyc, to powinny grac ..d5. Biale chca
zablokowac im ten ruch manewrem Sa2-b4-d5} Rfd8 2. N1a2 Rac8 (2... a5 {[%csl
Rb5][%cal Ge2b5,Gc3b5] uniemozliwia Sb4, ale teraz pole b5 jest oslabione}) (
2... d5 $4 3. exd5 Nxd5 4. Nxd5 Bxd5 5. Qxd5) 3. Nb4 a5 4. Nbd5 *

`}
    </PGN>
  )
}

export default Game;
