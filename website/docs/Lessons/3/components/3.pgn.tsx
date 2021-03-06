
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Site "Chess.com"]
[Date "2021.01.28"]
[Round "?"]
[White "imri1"]
[Black "LTe_e"]
[Result "0-1"]
[ECO "D02"]
[WhiteElo "1174"]
[BlackElo "1187"]
[Annotator "Marcin"]
[PlyCount "60"]
[EventDate "2021.??.??"]


1. d4 c6 2. Bf4 d5 3. Nf3 Qb6 4. b3 Bg4 $2 {ZASADA: SKOCZKI PRZED GONCAMI.} (
4... Nf6) 5. h3 (5. Ne5 $1 Bf5) 5... Bh5 6. e3 Nf6 7. Be2 Nbd7 8. Be5 $2 Ne4 $2
(8... Bxf3 9. Bxf3 Nxe5 10. dxe5 Nd7) 9. Nh4 $2 Bxe2 $2 (9... Qa5+ 10. Nd2 $4
Nc3 11. Qc1 Nxe2) 10. Qxe2 Qb4+ 11. Nd2 (11. Kf1) 11... Nxe5 12. dxe5 Nxd2 13.
Qxd2 Qxh4 14. O-O-O e6 15. g3 Qe7 $6 (15... Ba3+ 16. Kb1 Qe7) 16. c3 Qa3+ 17.
Qb2 {[#]} Qa6 (17... Qxb2+ $1 {majac przewage figury zazwyczaj wymieniamy,
zeby zredukowac potencjalny atak przeciwnika.}) 18. Kb1 Ba3 19. Qd2 O-O 20. h4
Rfd8 21. h5 Be7 22. g4 h6 $2 {jesli nas atakuja, to nie majstrujemy przy krolu.
ZASADA: NIE GRMAY TAM, GDZIE JESTESMY SLABSI} 23. Rdg1 {[%cal Gf2f4,Gg4g5]} c5 24. f4 d4 25. exd4 cxd4 26. cxd4 Rac8 27. Rc1 $4 (27. g5) 27... Ba3 28. Rxc8
Rxc8 29. g5 Qc6 30. gxh6 $4 Qxh1+ 0-1

`}
    </PGN>
  )
}

export default Game;
