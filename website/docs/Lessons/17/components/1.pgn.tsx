
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "Rated Rapid game"]
[Site "https://lichess.org/XZTw7BF9"]
[Date "2021.06.02"]
[Round "?"]
[White "LTe_x"]
[Black "Patrick2021"]
[Result "1-0"]
[ECO "B07"]
[WhiteElo "865"]
[BlackElo "1001"]
[Annotator "chess"]
[PlyCount "45"]
[EventDate "2021.??.??"]
[EventType "rapid"]
[SourceVersionDate "2020.07.27"]
[TimeControl "900+10"]


{[%evp 0,45,19,38,75,76,57,64,107,107,99,100,127,96,103,84,92,75,91,3,12,-23,
96,12,268,268,428,427,489,474,509,461,485,199,178,164,155,10,245,266,302,308,
315,315,29997,29998,29999,-30000]} 1. e4 d6 2. d4 Nf6 3. Nc3 Bg4 $2 4. f3 Bc8
5. Bc4 (5. Be3 {[%cal Ge4g2,Gd1d2,Gg2g4,Gh2h4] i Hd2, 0-0-0 i g4}) 5... g6 {
[%csl Rd4][%cal Gf8g7]} 6. Bg5 (6. Be3 {[%cal Gd1d2,Ge3h6] wspiera d4 i
przygotowuje Hd2-Gh6. To jest typowa wymiana, bo Gg7 jest najlepsza figura
czarnych w takiej strukturze pionowej} Bg7 7. Qd2 O-O 8. O-O-O {[%csl Rb2,Rd4,
Yg7][%cal Gg7d4,Gg7b2,Gc7c6,Gd8b6]} Nbd7 9. Bh6 $1) 6... Bg7 {[%cal Re4d5,
Rd4e5,Re4f5,Rd4c5] [#]} 7. e5 $2 {[%csl Rd5] biale sciagaja cale napecie z
pozycji i rozwalaja wlasne centrum} (7. Nge2 {[%cal Gd1d2,Ge1c1,Gg2g4,Gh2h4] i
Hd2, rozwoj!}) 7... dxe5 8. dxe5 {duzo sie wymienilo i biale nie moga liczyc
na atak} Qxd1+ 9. Kxd1 $2 {krol bedzie bez roszady i blokuje wieze} (9. Rxd1)
9... Nfd7 10. f4 O-O $2 (10... Nb6) 11. Nf3 $2 (11. Bxe7) 11... Nc5 $4 (11...
Nb6) 12. Bxe7 Re8 13. Bxc5 Rd8+ 14. Ke2 Bf5 15. Rad1 Nd7 16. Ng5 $4 {nie
wdajemy sie w awantury majac tempo mniej !} (16. Be3 {figura wiecej}) 16...
Nxc5 17. Bxf7+ Kf8 18. e6 Bh6 19. Nxh7+ Kg7 $2 (19... Ke7 {[%cal Gc5e6] pion
e6 pada}) 20. Rxd8 Rxd8 21. e7 Rf8 22. exf8=Q+ Kxh7 23. Qg8# {Normal} 1-0

`}
    </PGN>
  )
}

export default Game;
