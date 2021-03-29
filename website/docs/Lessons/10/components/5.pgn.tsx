
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "Let\'s Play!"]
[Site "Chess.com"]
[Date "2021.03.25"]
[Round "?"]
[White "rocket24"]
[Black "LTe_e"]
[Result "*"]
[ECO "D02"]
[WhiteElo "1240"]
[BlackElo "1260"]
[Annotator "chess"]
[PlyCount "102"]
[EventDate "2021.??.??"]
[TimeControl "1/604800:0"]


{[%evp 0,102,19,31,19,14,50,67,61,39,54,31,34,27,53,42,54,24,24,25,51,30,72,72,
181,36,35,-2,14,-286,-302,-282,-264,-253,-267,-622,-533,-538,-570,-652,-465,
-1093,-1105,-1118,-1039,-1045,-849,-869,-836,-843,-805,-787,-817,-840,-841,
-944,-972,-982,-971,-1033,-870,-870,-835,-859,-942,-951,-1024,-1070,-1097,
-1097,-1109,-1190,-1330,-1423,-1186,-1239,-1355,-1670,-1554,-1583,-1670,-2011,
-2005,-2096,-2193,-2401,-3048,-2573,-2594,-2721,-2266,-2407,-2799,-29985,
-29986,-29987,-29992,-29993,-29994,-29995,-29996,-29997,-29998,-29999,-30000]} 
1. d4 d5 2. Bf4 c6 3. e3 Nf6 4. Nf3 g6 5. c3 Bg7 6. Nbd2 O-O 7. Bd3 Nbd7 $6 {
blokuje cale prawe skrzydlo} (7... Qb6 {[%cal Gc6c5] i c5}) (7... Bg4 8. h3
Bxf3 (8... Bh5 9. g4)) 8. O-O Nh5 9. Bg5 Re8 (9... h6) 10. Re1 {[%cal Ge3e4]
biale przygotowuja przelom e4} f6 $2 {[%csl Re6,Rf7] oslabia f7 i e6. kiedy
biale zagraja e4, to bedzie to bardzo istotne, bo pozycja sie otworzy} 11. Bh4
Qc7 $2 {[#]} (11... f5 {[%csl Re4][%cal Gh5f6,Gf6e4,Gd7f6] i Shf6}) 12. e4 $2 (
12. g4 $1 $18 {[%cal Ge3e4,Gd1b3,Gb3g8]}) 12... e5 $2 {[%cal Re1e8] nie moze
dzialac, bo komplikacje sa lepsze dla strony inicjujacej.} (12... Nf8) 13. dxe5
$2 (13. exd5 cxd5 14. c4 $1 {[%cal Rg8a2] otwiera przekatna oslabiona
przesunieciem piona na f6}) 13... fxe5 14. Nxe5 $4 Nxe5 15. exd5 Nf4 16. d6
Qxd6 17. Qb3+ Be6 18. Bc4 Nxc4 19. Nxc4 Qd3 20. Ne3 $4 Bxb3 21. axb3 Ne2+ 22.
Kh1 Nxc3 23. bxc3 Bxc3 24. Red1 Qe4 25. Ra4 Qe6 26. Rc4 Bg7 27. g4 b5 28. Rcc1
Qe4+ 29. Kg1 h5 30. Rd6 hxg4 31. Rcxc6 Rac8 32. Rxc8 Rxc8 33. Rd1 Bd4 34. Ng2
Rc2 35. Re1 Qf3 36. Rf1 Rb2 37. Bg3 Rxb3 38. Bh4 Rb2 39. Bg3 Qe4 40. Nh4 g5 41.
Ng2 Qe2 42. Ne1 Rb1 43. Kg2 Rxe1 44. Rxe1 Qxe1 45. h3 Qe4+ 46. Kh2 Qe2 47. hxg4
Qf1 48. Bd6 Bxf2 49. Bc7 Qg1+ 50. Kh3 Qh1+ 51. Bh2 Qf1# {wiadomość} *

`}
    </PGN>
  )
}

export default Game;
