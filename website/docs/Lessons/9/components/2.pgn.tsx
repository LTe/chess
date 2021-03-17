
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "Let's Play!"]
[Site "Chess.com"]
[Date "2021.03.11"]
[Round "?"]
[White "imri1"]
[Black "LTe_e"]
[Result "0-1"]
[ECO "D02"]
[WhiteElo "1244"]
[BlackElo "1244"]
[Annotator "chess"]
[PlyCount "50"]
[EventDate "2021.??.??"]
[SourceVersionDate "2020.07.27"]


1. d4 d5 2. Nf3 Nf6 3. Bf4 Bf5 4. e3 e6 5. c4 {[#]} c5 $2 {czarnymi otwieramy
pozycje tylko kiedy mamy przewage w rozwoju!} (5... Nbd7 {i Ge7 i 0-0 i
dopiero po odejsciu krola z centrum otwieramy}) 6. Qb3 Nc6 $4 (6... Qb6) 7. Nc3
$2 (7. Qxb7 {[%csl Rc6]} Qc8 8. Qxc8+ Rxc8 $18) 7... cxd4 8. exd4 Bb4 9. Bd2 $2
(9. Rc1) 9... O-O 10. Ne5 $4 Nxd4 11. Qa4 Nc2+ 12. Kd1 Bxc3 13. Bxc3 dxc4+ 14.
Kc1 Nxa1 15. Bxc4 Ne4 16. Rd1 Qg5+ 17. Bd2 Qxg2 18. Be3 Rac8 19. Bxa7 Nxf2 20.
Bxf2 Qxf2 21. Nd3 Bxd3 22. Rxd3 Rfd8 23. Rxd8+ Rxd8 24. b4 Qg1+ 25. Kb2 Rd2+
0-1

`}
    </PGN>
  )
}

export default Game;
