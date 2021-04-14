
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2018.03.06"]
[Round "?"]
[White "Enter New Game"]
[Black "?"]
[Result "*"]
[ECO "C50"]
[PlyCount "11"]
[SourceDate "2018.03.06"]
[SourceVersionDate "2018.03.06"]


1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7 {[#] Obrona wegierska - solidna, ale pasywna.
ZASADA: Jesli czarne graja pasywnie, to zabieramy centrum ruchem d4} (3... h6
$2 {strata czasu} 4. d4 $1 exd4 5. c3 $16 dxc3 6. O-O $1 {czarne zrobily tak
malo rozwojowych ruchow, ze mozemy oddac material za atak} cxb2 7. Bxb2 d6 8.
e5 $1 $40) (3... Nd4 $2 {[%csl Re5,Rg2,Rg5][%cal Gf3e5,Gd8g5] tu jest pulapka
- jesli zbijemy na e5, to Hg5 prowadzi do ataku czarnych} 4. Nxd4 $1 exd4 5.
O-O {i c3, Hb3 daje bialym przewage}) 4. d4 exd4 $6 {wyglada normalnie, ale
jest to blad} (4... d6 5. Nc3 Nf6 6. h3 $1 {[%csl Rg4] zeby czarne nie mogly
postawic gonca g4}) 5. c3 d6 (5... dxc3 $2 6. Qd5 {[%csl Rf7]} Nh6 7. Bxh6 O-O
8. Bxg7 $1 (8. Bc1 $2 {czarne odbija material} Nb4 $1 {[%csl Rc2,Rd5][%cal
Gb4c2]} 9. Qd1 c2 $15) 8... Kxg7 9. Nxc3 {czarne zachowaly rownowage
materialna, ale maja odslonietego krola. Biale moga zroszowac w dluga strone.}
d6 10. Qh5 Bd7 11. h4 h6 12. O-O-O Qc8 {i dalej przygotowujemy ruch g4}) 6.
cxd4 $14 *

`}
    </PGN>
  )
}

export default Game;
