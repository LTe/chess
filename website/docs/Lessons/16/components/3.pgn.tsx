
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.05.12"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "2r2rk1/p1q1bppp/1p6/n2b4/8/P2B1N2/1B2QPPP/3R1RK1 w - - 0 1"]
[PlyCount "25"]
[SourceVersionDate "2021.05.12"]


{[#] Biale na ruchu} 1. Bxh7+ $1 Kxh7 2. Rxd5 {[%cal Ge2e4,Gd5h5]} Kg8 3. Bxg7
$3 {[%cal Gd5h5] takie podwoje poswiecenei goncow jest do zapamietania} Kxg7 4.
Ne5 {[%cal Ge2g4] jedna z idei jest Hg4} Rfd8 {robi krolowi miejsce na f8} (
4... Rh8 5. Qg4+ Kf8 6. Qf5 {[%csl Rf7]} f6 7. Re1 Nc6 8. Nd7+ Kf7 9. Rxe7+ {
[%csl Rf6]} Kxe7 10. Qxf6+ Ke8 11. Qxh8+ $18) (4... Qc2 5. Qg4+ Kh7 6. Rd3 {
[%cal Gd3h3]} Rc3 7. Qf5+ Kg8 8. Rg3+ Kh8 9. Nxf7+ $18) 5. Qg4+ Kf8 6. Qf5 {
[%csl Rf7]} f6 {[%csl Ra5]} 7. Nd7+ Rxd7 (7... Kf7 8. Qh7+ Ke6 9. Re1+ Kxd5 10.
Qe4+ Kd6 11. Rd1#) 8. Rxd7 Qc5 9. Qh3 {[%cal Gh3h8]} Kf7 (9... Nc6 10. Qh8+ Kf7
11. Qxc8 $18 {[%cal Gf1e1]}) 10. Qh7+ Ke6 11. Rxe7+ Qxe7 12. Re1+ Kd6 13. Qxe7+
$18 *

`}
    </PGN>
  )
}

export default Game;
