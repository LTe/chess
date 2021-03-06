
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.04.14"]
[Round "?"]
[White "Wejdź do nowej partii"]
[Black "?"]
[Result "*"]
[ECO "C57"]
[Annotator "chess"]
[PlyCount "23"]
[SourceVersionDate "2021.04.14"]


1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 $2 {[#] po tym ruchu
biale uzyskuja silny atak.} 6. d4 $1 (6. Nxf7 $5 {nie jest az tak mocne}) 6...
Bb4+ (6... exd4 7. O-O {[%cal Gf1e1,Gg5f7] biale groza zarowno Sxf7, jak i We1.
Czarne zostaly z krolem w centrum} Be7 (7... Be6 8. Re1 {[%csl Re6][%cal Gg5e6]
} Qd7 9. Nxf7 $1 {ZASADA: W WARIANCIE Z 4..d5 ZAWSZE SPRAWDZAMY POSWIECENIE NA
F7!} Kxf7 (9... Qxf7 10. Bxd5 $18 {[%csl Re6][%cal Re1e6]}) 10. Qf3+ {[%csl
Rd5,Rf7]} Kg8 (10... Nf6 11. Bxe6+ $18 {[%cal Re6f7,Re6d7]}) 11. Rxe6 $1 Rd8 (
11... Qxe6 12. Qxd5 $18) 12. Bg5 $18 {[%csl Rd5]}) 8. Nxf7 $1 Kxf7 9. Qf3+ Bf6
(9... Ke6 10. Nc3 $1 dxc3 11. Re1+ Ne5 12. Bf4 Bf6 13. Bxe5 Bxe5 14. Rxe5+ Kxe5
15. Re1+ Kd4 16. Bxd5 Re8 (16... Qxd5 17. Qxc3#) 17. Qd3+ Kc5 18. b4+ Kxb4 19.
Qd4+ $18) 10. Bxd5+ $16 {[%cal Gc1f4,Gb1d2,Gd2c4,Gd2e4]}) (6... Be7 7. Nxf7 $1
Kxf7 8. Qf3+ Ke6 9. Nc3 Ncb4 10. Qe4 {[%cal Ge4c2,Ge4e5]} c6 11. a3 Na6 12.
Qxe5+ Kf7 13. Nxd5 cxd5 14. Bxd5+ Kf8 15. O-O $16 {[%csl Ra6,Rb7,Rc8]}) 7. c3
Be7 8. Nxf7 $1 Kxf7 9. Qf3+ Ke6 {teraz widac, ze czarne stracily tempo na Gb4,
zeby wymusic pionka na c3, bo w przeciwnym wypadku biale by mialy teraz Sc3!}
10. Qe4 Qd6 (10... Bf8 11. O-O Nce7 12. f4 c6 13. fxe5 Kd7 14. Bb3 {[%cal
Gc3c4,Gb1c3,Gd4d5,Gc1f4,Ga1d1] i c4 biale maja fantastyczna rekompensate}) (
10... b5 $5 11. Bxb5 Bb7 12. f4 {z atakiem}) 11. f4 $1 {[%csl Rd5,Re5][%cal
Gf4f5] grozi f5 i zabranie Sd5} Na5 12. f5+ $16 *

`}
    </PGN>
  )
}

export default Game;
