
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "????.??.??"]
[Round "?"]
[White "Enter New Game"]
[Black "?"]
[Result "*"]
[ECO "C57"]
[PlyCount "35"]
[SourceDate "2018.03.06"]
[SourceVersionDate "2018.03.06"]


1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 b5 (5... Nd4 {prowadzi
najczesciej do tych samych pozycji co glowny wariant} 6. c3 b5 7. Bf1 {[%csl
Rb5,Rd4]}) (5... Bg4 $6 6. Nxf7 $1 Bxd1 7. Nxd8 Nxd8 (7... Bxc2 8. dxc6 Rxd8 9.
cxb7 $18) 8. Kxd1 $18) 6. Bf1 $1 {[%csl Rb5,Rc6] biale chca sprowokowac H:d5}
Nd4 {[#]} (6... Qxd5 $2 7. Nc3 $1 {[%csl Rg2][%cal Gf1g2]} Qc5 8. Bxb5 $16 {
teraz mozemy wziac!}) 7. c3 $1 Nxd5 {[%csl Rg5][%cal Gd8g5]} 8. cxd4 Qxg5 9.
Bxb5+ Kd8 10. O-O Bb7 11. Qf3 {[%csl Rg2][%cal Rb7g2] czarne licza na to, ze
biale nie beda w stanie szybko wyprowadzic figur hetmanskiego skrzydla.} Rb8 {
[%csl Rf1,Rg2][%cal Gd5e3] idea tego ruchu jest obrona gonca i ew Se3} 12. dxe5
Ne3 {[%csl Rf1,Rg2]} (12... Qxe5 13. d4 $1) 13. Qh3 {[%csl Rd7] grozi Hd7#}
Qxg2+ 14. Qxg2 Nxg2 15. d4 {czarne nie maja rekompensaty za jakosc} Nh4 {
[%cal Gh4f3]} 16. Bg5+ Be7 17. Bxh4 Bxh4 18. Nc3 $16 *

`}
    </PGN>
  )
}

export default Game;
