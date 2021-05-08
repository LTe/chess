
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "Rated Classical game"]
[Site "https://lichess.org/Fjg9jebX"]
[Date "2021.05.02"]
[Round "?"]
[White "LTe_e"]
[Black "y-m"]
[Result "1-0"]
[ECO "C42"]
[WhiteElo "1585"]
[BlackElo "1282"]
[Annotator "chess"]
[PlyCount "47"]
[EventDate "2021.??.??"]
[SourceVersionDate "2020.07.27"]
[TimeControl "1800"]


{[%evp 0,47,19,31,34,19,13,7,67,48,469,368,514,196,242,308,290,303,282,309,387,
368,402,406,484,430,517,443,450,449,441,465,562,501,522,522,745,785,784,808,
808,815,1134,770,1107,1163,29995,29996,29999,-30000]} 1. e4 e5 2. Nf3 Nf6 {
to jest partia rosyjska} 3. Bc4 $6 (3. Nxe5 Nxe4 $4 (3... Qe7 $2 4. Nf3 Qxe4+
5. Be2 {0-0 i We1}) (3... d6 4. Nf3 Nxe4 5. c4) 4. Qe2 Nf6 (4... Qe7 5. Qxe4 d6
6. d4 dxe5 7. dxe5 $18) 5. Nc6+ $18) 3... Qe7 $2 {[%csl Rf8]} (3... Nc6) (3...
Nxe4 4. Nxe5 d5 $15) 4. Ng5 Nh5 $2 5. Nxf7 Rg8 6. Qf3 $2 (6. Qxh5 $1 $18 {[#]}
g6 7. Qxh7 (7. Qxe5 Qxe5 8. Nxe5)) 6... g6 7. Nd6+ cxd6 8. Bxg8 Nf6 9. Bb3 Na6
10. O-O b5 11. Nc3 Nb4 12. d4 Bb7 13. dxe5 Qxe5 14. Bf4 Qh5 15. Qe3 d5 16.
exd5+ Kf7 17. Rfe1 Nxc2 $4 18. Bxc2 b4 19. Ne4 Nxe4 20. Qxe4 Bxd5 21. Qd4 Rc8
22. Bb3 Bg7 23. Bxd5+ Kf8 24. Bd6# {Normal} 1-0

`}
    </PGN>
  )
}

export default Game;
