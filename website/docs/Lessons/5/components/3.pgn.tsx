
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.02.17"]
[Round "?"]
[White "Enter New Game"]
[Black "?"]
[Result "*"]
[ECO "B13"]
[Annotator "Marcin"]
[PlyCount "27"]
[SourceVersionDate "2021.02.17"]


1. e4 c6 2. d4 d5 {caro - kann} 3. exd5 cxd5 4. Bd3 {tzw wariant wymienny. DO
ZAPAMIETANIA: NAJPIERW WYCHODZA GONCE, POZNIEJ SKOCZKI!} Nc6 5. c3 Nf6 (5... g6
6. Bf4 Bg7 7. Nd2 Nf6 8. Ngf3 {i mamy swoja normalna gre. Jesli teraz} Bg4 {
[%cal Gd1b3] to Hb3}) 6. Bf4 (6. Nf3 $2 {nie jest takie dobre, bo czarne wiaza
skoczka} Bg4 $1) 6... Bg4 {teraz nie jest dobre, bo mamy} (6... e6 {teraz Gc8
nie gra} 7. Nd2 {zawsze najpierw ten skoczek} Be7 8. Ngf3 O-O 9. O-O {[#]} Bd7
10. Qc2 Rc8 {[%cal Gc6b4,Rc8c2] grozi Sb4, wiec} 11. a3 a6 12. Rae1 b5 13. Ne5
{[%csl Rh7][%cal Ge1e3,Ge3g3,Gg3h3] i dalej We3}) 7. Qb3 {[%csl Rb7]} Na5 (7...
Qb6 8. Qxb6 axb6 9. Nd2 {i dopiero teraz skoczek na f3}) 8. Qa4+ Nc6 9. Nd2 {
i Sf3 teraz} e6 10. Ngf3 {plan: 0-0, Wae1 i atakujemy czarne krola, np} Be7 (
10... Bd6 11. Ne5 {[%csl Rc6][%cal Ra4c6]} Bxe5 12. dxe5 Nd7 13. Bb5 {[%cal
Ga1e1,Ge1e3,Ge3g3,Gh1c1,Gc3c4] znowu pojdziemy We3}) 11. O-O O-O 12. Rae1 Rc8
13. h3 Bh5 14. Ne5 {[%cal Ge1e3,Ge3g3,Ga4c2,Rd3h7] zawsze mamy to samo
ustawienie. Dalej np We3-g3} *

`}
    </PGN>
  )
}

export default Game;
