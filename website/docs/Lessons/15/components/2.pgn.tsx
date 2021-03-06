
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "Rated Classical game"]
[Site "https://lichess.org/MrVlPVl9"]
[Date "2021.05.02"]
[Round "?"]
[White "LTe_e"]
[Black "JoshuaChess6"]
[Result "1-0"]
[ECO "C57"]
[WhiteElo "1597"]
[BlackElo "1796"]
[Annotator "chess"]
[PlyCount "43"]
[EventDate "2021.??.??"]
[SourceVersionDate "2020.07.27"]
[TimeControl "1800"]


{[%evp 0,43,19,31,34,19,13,8,8,-4,4,-22,54,19,137,49,131,106,137,150,164,123,
127,119,119,101,118,107,104,104,112,120,129,130,231,219,247,215,235,232,275,
270,293,274,726,746]} 1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 $4
(5... Na5) (5... Nd4) 6. d4 h6 $2 7. Nxf7 Kxf7 8. Qf3+ Ke8 $2 (8... Ke6 9. Nc3
$1 {[%csl Rd5] [#]} Ncb4 {[%cal Gb4d5]} 10. Qe4 {[%csl Re5][%cal Ge4c2,Ga2a3]
i a3} c6 11. a3 Na6 12. Nxd5 cxd5 13. Qxe5+ Kf7 14. Bxd5+ $18) 9. Bxd5 Qf6 10.
Qxf6 gxf6 11. dxe5 fxe5 12. Nd2 Nd4 13. Be4 Bf5 14. Bxf5 Nxf5 15. O-O Nd4 16.
c3 Nc2 $2 17. Rb1 b5 18. b3 b4 19. Bb2 bxc3 20. Bxc3 Nb4 21. Bxe5 c5 22. Bxh8 {
Normal} 1-0

`}
    </PGN>
  )
}

export default Game;
