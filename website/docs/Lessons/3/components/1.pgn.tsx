
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Site "Chess.com"]
[Date "2021.01.25"]
[Round "?"]
[White "imri1"]
[Black "LTe_e"]
[Result "0-1"]
[ECO "A46"]
[WhiteElo "1219"]
[BlackElo "1162"]
[Annotator "Marcin"]
[PlyCount "76"]
[EventDate "2021.??.??"]


1. d4 c6 2. Nf3 Nf6 3. Bf4 d6 4. c3 g6 5. e3 Nbd7 6. Nbd2 Bg7 7. Qc2 O-O 8. h4
Nh5 9. g4 Nxf4 10. exf4 {[%csl Re1][%cal Rh4h5,Rg4g5,Rh4h6] [#]} b5 $6 (10...
e5 {[%csl Re1][%cal Rf8e8] przy krolu przeciwnika w centrum od razu otwieramy.
ZASADA: NA ATAK NA SKRZYDLE ODPOWIADAMY W CENTRUM}) (10... Nf6 {[%csl Rg4]} 11.
g5 Nd5 {[%csl Rf4]} 12. Qe4 Bf5 13. Qe2 Nxf4 $19) 11. h5 Nf6 12. h6 Bh8 13. Bd3
Nd5 14. f5 Nf4 15. O-O-O a5 16. fxg6 fxg6 17. Nh4 Nxd3+ 18. Qxd3 Bf6 19. Rde1
Bb7 $4 {[#]} (19... Bg5) 20. f4 (20. Nxg6 $1 {rozbija pozycje krola} hxg6 21.
g5 $1 {[%csl Rg6][%cal Gg5f6]} (21. Qxg6+ $2 Kh8) 21... Bh8 22. Qxg6+ Bg7 23.
Qxg7#) 20... Bxh4 21. Rxh4 e5 22. g5 exf4 23. Nf3 c5 24. d5 b4 25. c4 Bc8 26.
Qd2 a4 27. Rxf4 a3 28. b3 Re8 $6 (28... Bf5 {[%cal Gf5b1,Ga3b2,Gd8d7,Ga8e8]})
29. Rxe8+ Qxe8 30. Rf6 Bg4 31. Nh4 Qe5 32. Kb1 Re8 33. Ng2 Qe4+ $6 (33... Bf5+
34. Kc1 (34. Rxf5 Qxf5+ $19) 34... Qa1#) 34. Kc1 Bf5 35. Kd1 Qb1+ 36. Qc1 Bg4+
37. Kd2 Qxa2+ 38. Kd3 Be2# 0-1

`}
    </PGN>
  )
}

export default Game;
