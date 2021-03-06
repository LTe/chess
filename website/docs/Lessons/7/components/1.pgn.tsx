
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "Import"]
[Site "?"]
[Date "2021.03.02"]
[Round "?"]
[White "imri1"]
[Black "LTe_e"]
[Result "*"]
[ECO "D02"]
[WhiteElo "1248"]
[BlackElo "1205"]
[Annotator "https://lichess.org/@/LTe_e"]
[PlyCount "40"]
[EventDate "2021.??.??"]


{[%evp 0,40,19,34,32,26,27,27,17,29,30,-20,-18,-10,-4,-31,-18,-132,-32,-50,-45,
-68,-42,-56,-57,-14,-15,-9,96,117,163,150,630,55,21,-1831,-1894,-29993,-29994,
-29995,-29996,-29999,-30000]} 1. d4 d5 {[%cal Rb8c6,Gc7c5]} 2. Bf4 Nf6 3. e3
Nc6 $2 {[%cal Gc2c4] [#] zasada: po d4 d5 czarne stawiaja skoczka na c6
WYLACZNIE jesliw czesniej zagraly juz c5. C5 to typowy przelom a bez niego nie
ma gry} (3... Bf5 4. Nf3 e6 {[%cal Gc7c5,Ga8c8,Gc8c1,Gf8c5] i c5 a dopiero
pozniej Sc6}) 4. Nf3 (4. c4 $1) 4... Bf5 5. c4 {[%cal Ga1c1,Rc1c7]} e6 6. a3 $2
(6. Qb3 {[%csl Rb7]}) 6... Bd6 7. Be5 O-O 8. c5 $2 Be7 $6 (8... Bxe5 $1 9. dxe5
(9. Nxe5 Nxe5 10. dxe5 Nd7 {[%csl Rc5,Re5]} 11. Qd4 c6 {[%cal Gd8c7] i Hc7})
9... Nd7 {biale sraca ktoregos pionka}) 9. h3 $2 b6 10. b4 Nxe5 11. Nxe5 Ne4
12. Bd3 bxc5 13. bxc5 Rb8 14. Nc6 Nxf2 15. Kxf2 Bxd3 16. g3 $4 (16. Nxd8 $18)
16... Rb2+ 17. Qc2 $4 Rxc2+ 18. Kf3 Be4+ 19. Kg4 f5+ 20. Kh5 Qe8# {Unterminated
} *

`}
    </PGN>
  )
}

export default Game;
