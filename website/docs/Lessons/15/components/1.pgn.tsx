
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "Rated Classical game"]
[Site "https://lichess.org/cCnpqFom"]
[Date "2021.05.02"]
[Round "?"]
[White "LTe_e"]
[Black "DimitrisPapageorgiou"]
[Result "1-0"]
[ECO "B13"]
[WhiteElo "1645"]
[BlackElo "1657"]
[Annotator "chess"]
[PlyCount "55"]
[EventDate "2021.??.??"]
[SourceVersionDate "2020.07.27"]
[TimeControl "1800"]


{[%evp 0,55,19,38,60,69,57,47,49,37,45,46,61,62,66,59,60,54,59,69,154,156,168,
164,253,213,227,217,206,220,220,229,203,239,260,261,288,246,277,254,251,247,
314,308,525,535,552,505,505,486,700,753,772,760,770,635,918,826]} 1. e4 c6 2.
d4 d5 3. exd5 cxd5 4. Bd3 a6 $2 (4... Nc6) 5. c3 h6 $2 6. Bf4 Nf6 7. Nd2 e6 (
7... Bg4 8. Qb3) 8. Ngf3 Bd6 9. Ne5 Nbd7 $2 {[%csl Ra8,Rc8] to nie pole dla
skoczka} (9... Nc6) 10. Nxf7 $1 Kxf7 11. Bxd6 Nb6 12. Bf4 Rf8 13. a4 (13. O-O)
13... Kg8 14. O-O Bd7 15. a5 Nc8 16. Re1 Nh7 17. Be5 Ne7 18. Qe2 Nc6 19. Bd6
Rf7 20. Nf3 Nxa5 21. Ne5 Rf6 22. Rxa5 Qxa5 {[%cal Rd3h7] [#]} 23. Bxh7+ $2 {
goniec byl lepszy od skoczka} (23. Nxd7 {[%csl Re6]} Rf7 24. Qxe6 {[%csl Rh7]}
Ng5 25. Qe8+ Rxe8 26. Rxe8+ Rf8 27. Rxf8#) 23... Kxh7 24. Nxd7 Rf7 25. Qxe6
Rxd7 26. Qxd7 Qd8 27. Qf5+ Kg8 28. Qxd5+ {Normal} 1-0

`}
    </PGN>
  )
}

export default Game;
