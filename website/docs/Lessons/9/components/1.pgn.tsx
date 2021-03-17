
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "Let\'s Play!"]
[Site "Chess.com"]
[Date "2021.03.15"]
[Round "?"]
[White "LTe_e"]
[Black "imri1"]
[Result "*"]
[ECO "B15"]
[WhiteElo "1230"]
[BlackElo "1244"]
[Annotator "chess"]
[PlyCount "68"]
[EventDate "2021.??.??"]
[SourceVersionDate "2020.07.27"]
[TimeControl "1/604800:0"]


{[%evp 0,68,19,38,60,69,57,35,43,36,40,20,79,55,182,172,170,151,204,209,212,
228,223,212,210,356,343,333,335,337,345,281,345,227,195,260,443,451,464,466,
498,489,494,502,486,502,486,494,498,444,438,450,468,463,517,540,545,552,588,
589,616,615,648,652,650,627,644,644,654,636,639]} 1. e4 c6 2. d4 d5 3. Nc3 dxe4
4. Nxe4 Nf6 5. Bd3 $6 {[%csl Rd4]} (5. Nxf6+ {i czarne maja dublaki}) 5... g6
$2 (5... Qxd4 $1) 6. Nf3 Bf5 $2 7. Nxf6+ exf6 8. Bxf5 gxf5 $4 (8... Qa5+ $1 {
[%cal Ga5e1,Ga5f5]} 9. c3 Qxf5 10. O-O {biale maja lepszy rozwoj i strukture,
ale czarne nie maja trojakow na linii f.}) 9. O-O Qd5 10. Qe2+ Kd8 11. Re1 Bd6
12. c4 Qe6 13. Qxe6 fxe6 14. Rxe6 Be7 15. d5 $6 {[%csl Ra1,Rc1] 2 figurami nie
wygra sie partii} (15. Bf4 $1 {[%cal Ga1e1,Gf3h4,Gh4f5,Ga1d1,Gd4d5] trzeba
powiekszac przewage w rozwoju, bo d5 nic nie daje!}) 15... cxd5 16. Bf4 $2 (16.
cxd5 $1) 16... dxc4 17. Bxb8 Rxb8 18. Rd1+ Ke8 19. Rde1 Kd8 20. Rxe7 Rc8 21.
Rxb7 Rc7 22. Rb8+ Rc8 23. Rb7 Rc7 24. Rxc7 Kxc7 25. Rc1 c3 26. Rxc3+ Kd7 27.
Ra3 Ra8 28. Ra6 Kc7 29. Rxf6 Rd8 30. g3 a5 31. Rxf5 a4 32. Rc5+ Kd6 33. Ra5 Rb8
34. Rxa4 Rxb2 *

`}
    </PGN>
  )
}

export default Game;
