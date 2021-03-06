
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "Let's Play!"]
[Site "Chess.com"]
[Date "2021.02.16"]
[Round "?"]
[White "LTe_e"]
[Black "imri1"]
[Result "1-0"]
[ECO "B08"]
[WhiteElo "1224"]
[BlackElo "1247"]
[Annotator "Marcin"]
[PlyCount "59"]
[EventDate "2021.??.??"]


1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. Bc4 $2 {ZASADA: W OBRONIE PIRCA NIE
STAWIAMY GONCA NA C4} (5. Be3 $1 {[%cal Gc7c5,Rg7b2] [#] najprostszy plan: Hd2,
0-0-0 i Gh6, zeby wymienic Gg7.} O-O 6. Qd2 Bg4 (6... Nbd7 7. O-O-O {i Gh6 i
pozniej pchamy piona h. Gf1 najczesciej idzie na d3}) 7. O-O-O Bxf3 8. gxf3 {
[%cal Gh1g1,Gh2h4,Gh4h5] i h4, Gh6}) 5... O-O (5... Nxe4 $1 6. Nxe4 d5 $11) 6.
O-O Bg4 (6... Nxe4 $1 7. Nxe4 d5 $11) 7. Be3 Nc6 8. Bb5 a6 9. Bc4 $2 {3 ruchy
zmarnowane} b5 $2 (9... Nxe4 $1 10. Nxe4 d5) 10. Be2 b4 11. Nd5 a5 $2 (11...
Nxe4) 12. Qd3 e6 13. Nxf6+ Bxf6 14. Rac1 {[%cal Gc2c3]} e5 15. Bh6 (15. c3 $1 {
[%csl Rc7][%cal Rc1c6,Gc1c3,Gf1c1]}) 15... Bg7 16. Bg5 (16. Bxg7 Kxg7 {[%csl
Re7,Rf6,Rg5,Rg7,Rh6,Rh8]}) 16... Bf6 17. Bh6 Bg7 18. Bg5 Bf6 19. Bxf6 Qxf6 20.
dxe5 (20. c3 $1 {otwieramy linie, bo wieza musza stac na otwartych liniach.})
20... Nxe5 21. Nxe5 Bxe2 22. Nd7 Qxf2+ $4 (22... Qe7 23. Qxe2 Qxd7 $11) 23.
Rxf2 Bxd3 24. cxd3 Rfd8 25. Rxc7 Kg7 26. Nb6 Rab8 27. Rfxf7+ Kg8 28. Nd5 Rbc8
29. Nf6+ Kh8 30. Rxh7# 1-0

`}
    </PGN>
  )
}

export default Game;
