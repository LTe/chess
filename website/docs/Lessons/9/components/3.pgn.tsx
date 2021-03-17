
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "Capablanka: Canal — Capablanka (Obron"]
[Site "https://lichess.org/study/nEi"]
[Date "2021.03.15"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[ECO "E16"]
[Annotator "https://lichess.org/@/LTe_e"]
[PlyCount "34"]
[EventDate "2021.??.??"]
[SourceVersionDate "2020.07.27"]


{[%evp 0,34,19,31,14,-11,-10,-10,27,7,7,9,14,1,19,-4,1,-1,3,17,-24,-22,4,-22,
-15,-24,-2,-24,-26,-44,-32,-44,-53,-42,-47,-41,-39]} 1. d4 Nf6 (1... d5) 2. c4
e6 (2... g6 {Obrona królewsko—indyjska (kings indian)}) 3. Nf3 {Obrona
Hetmańsko — Indyjska} (3. Nd2 d5) (3. Nc3 {Obrona Nimzowitscha}) (3. g3 {
Obrona Katalońska}) 3... b6 (3... d5 {Gambit Hetmański}) (3... c5 {
Nowoczesny Benoni} 4. d5 (4. Nc3)) (3... Bb4+ {Obrona Bobolubowa}) 4. g3 (4. a3
{Mniej popularne, grane przez Kasparowa na początku kariery}) 4... Bb7 (4...
Ba6 {[%csl Gc4][%cal Ga6c4] Ruch Arana Nimzowitscha}) 5. Bg2 Bb4+ (5... Be7) 6.
Bd2 Bxd2+ (6... Qe7) (6... Be7) 7. Nbxd2 (7. Qxd2 {[%csl Gc3][%cal Gb1c3]} g6
8. Nc3 {Lepsza pozycja dla skoczka}) 7... O-O 8. O-O c5 9. dxc5 (9. Nb3 {
Słaby nacisk na centrum konia}) (9. e3 {Bardziej pasywne, ale bez utraty piona
}) 9... bxc5 10. Qc2 {[%csl Gd7][%cal Ga1d1,Gd1d8] Prawdopodobnie próba
ustawienie wieży na półotwartej linii d} Nc6 {[%csl Gd4] Capablanka chce
się skoncentrować na polu d4 — kończy rozwój figur} 11. Rfd1 (11. e4 {
[%csl Gg2,Gd4] Blokowanie gońca g2, oddanie inicjatywy nad kontrolą pola d4})
11... Qb6 {[%csl Gd4][%cal Gb6d4]} 12. a3 {[%cal Gb2b4] Przygotowanie do ruchu}
Rab8 13. Rab1 Rfc8 $2 {[%cal Gc8c2] W jaki sposób pośrednio zapobiega
marszowi białego pionka b2-b4?} (13... a5 {[%csl Gb4] Podobny efekt do Rfc8,
ale 'pionki nie chodzą do tyłu'}) 14. e4 (14. e3 e5 {[%csl Bd4,Gd5][%cal
Be5d4] Białe walczą o pole d5 Czarne walczą o pole d4 — osiągają do
wcześniej} 15. Qd3 {[%csl Gd6,Re5][%cal Gd3d6,Rc6e5]} d6 $1 {[%csl Ge5][%cal
Gd6e5]} 16. Nf1 {[%csl Gd5][%cal Gf1e3,Ge3d5]} (16. Qxd6 $2 {Nie można bić
bo tracimy Hetmana!} Rd8 17. Qxd8+ Rxd8) 16... Nd4) (14. b4 cxb4 15. axb4 Nxb4
{[%cal Gd7d5] i d5}) 14... e5 15. Qd3 d6 16. Nf1 {[%csl Gd5][%cal Gf1e3,Ge3d5]}
Nd4 17. Nxd4 (17. Ne3 $2 Bxe4 18. Nd5 Bxd3 19. Nxb6 Nxf3+ 20. Bxf3 Rxb6 21.
Rxd3 e4 {Strata figury}) 17... exd4 {[%csl Ge3][%cal Gf1e3,Ge3d5,Gd4e3]} *

`}
    </PGN>
  )
}

export default Game;
