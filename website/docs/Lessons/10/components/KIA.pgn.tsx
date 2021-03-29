
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2020.10.24"]
[Round "?"]
[White "Enter New Game"]
[Black "?"]
[Result "*"]
[ECO "C00"]
[Annotator "chess"]
[PlyCount "50"]
[SourceVersionDate "2020.10.24"]


1. e4 e6 2. d3 {[%cal Gb1d2,Gg1f3,Gg2g3,Gf1g2] wstep do tzw ataku
krolewsko-indyjskiego. Biale chca grac Sd2, Sgf3, g3, Gg2 i po roszadzie
konstruowac atak na krolewskim skrzydle. Z uwagi na to nie bedziemy robic
szybko krotkiej roszady, aby nie wpasc pod atak.} (2. Qe2 d5 3. exd5 Qxd5 4.
Nc3 Qa5 $11 {mamy pozycje podobna do obrony skandynawskiej z pionem na e6 i
hetmanem na e2.}) 2... d5 3. Nd2 (3. Qe2 Nf6 4. Nf3 Be7 5. g3 b5 $1 6. e5 (6.
Bg2 dxe4 7. dxe4 b4 {odbiera pole c3 skoczkowi} 8. c4 (8. a3 Ba6 {[%csl Rf1]
[%cal Ga6f1]} 9. Qd2 Nc6 10. e5 Nd5 11. Bf1 Bxf1 12. Kxf1 a5 13. Kg2 O-O 14.
Qe2 Qd7 15. Re1 Rfd8 {czarne nie mialy problemow w partii Timman - Korcznoj,
2000.}) 8... bxc3 9. bxc3 (9. Nxc3 Ba6 $15) 9... Ba6 10. c4 Nc6 11. O-O Nd4 $1
12. Nxd4 Qxd4 {[%csl Ra1]} 13. Bb2 (13. e5 {[%csl Ra1,Ra8][%cal Rg2a8,Rd4a1]}
Nd5 $1 14. Bb2 Qxc4 $17) 13... Qxc4 14. Qxc4 Bxc4 15. Rc1 Bd3 16. e5 Nd5 17.
Bxd5 exd5 18. Rxc7 Rb8 19. Ba3 Bd8 {[%csl Rb1][%cal Rb8b1]} 20. Rc1 Kd7 21. Nc3
Ke6 {[%csl Re5][%cal Gd8a5,Gh8c8] czarne maja lepsza koncowke}) 6... Nfd7 7.
Bg2 c5 8. h4 {[%cal Gf3g5,Ge2h5] to jest integralna czesc planu bialych. Po
naszej roszadzie chca przygotowac Sg5 i Hh5} Nc6 9. O-O a5 10. Bf4 b4 11. Nbd2
Ba6 {[%cal Gc5c4,Ga5a4,Ga8c8,Gc6d4] typowy sceniariusz dla tego wariantu -
biale czekaja na roszade czarnego krola i chca atakowac, czarne graja na
drugim skrzydle} 12. c4 bxc3 13. bxc3 c4 $1 14. d4 (14. dxc4 Nb6 $1) 14... a4
15. Ng5 (15. Rac1 $2 h6 {i biale nie maja Sg5 i Hh5} 16. Qe3 Rb8 17. Rb1 Bb5 {
[%cal Ga4a3,Gb5a4,Ga4c2,Gc2d3] czarne planuja a3 i Ga4-c2} 18. Bh3 a3 19. h5
Ba4 20. Rxb8 Ncxb8 21. Rb1 Bc2 22. Rc1 Bd3 $15) 15... h6 16. Nxe6 $1 fxe6 17.
Qh5+ Kf8 18. Qg6 Qe8 19. Qxe6 Nb6 20. Qf5+ Kg8 21. Rab1 Bc8 22. Qc2 Bd8 23.
Rxb6 $1 Bxb6 24. Bxd5+ Be6 25. Bxc4 $13 {biale maja 4 piony za wieze.}) 3...
Nf6 4. Ngf3 Be7 5. g3 {[#] ZASADA: KIEDY BIALE GRAJA g3, TO ODPOWIADAMY b5!} b5
6. Bg2 c5 7. O-O Nc6 8. Re1 Bb7 9. a4 (9. e5 Nd7 10. c4 {[%csl Gb7][%cal Gb7d5]
} bxc4 11. dxc4 {[%cal Gd8b6,Ga8b8,Gd8b8,Ga7a5,Ga5a3] pozycja jest dynamicznie
rowna. Czarne nie powinny sie spieszyc z ..d4, bo biale maja Se4}) 9... b4 10.
exd5 exd5 $1 {najlepsze} (10... Nxd5 $2 {pozycyjny blad, bo po} 11. Nc4 {
biale maja swietne skoczki i kontrole nad polem e5}) 11. d4 c4 (11... cxd4 $2
12. Nb3 {i czarne maja izolaka na d5}) 12. Ne5 {grozi Sxc6 i Sxc4 ze zdobyciem
materialu} Rc8 (12... Nxd4 $4 13. Ndxc4) 13. Ndf3 O-O {figury zostaly
wyprowadzone, a biale nie maja ataku na krola} 14. Nh4 {[%cal Gh4f5]} (14. Bf4
$2 {[%csl Rh4][%cal Gf3h4]} Ne4 {[%csl Rh4] uniemozliwia Sh4} 15. Nxc6 (15.
Nxc4 {[%csl Re4][%cal Re1e4]} Nxf2 16. Kxf2 dxc4 $15 {[%csl Rd4,Rf2]}) 15...
Rxc6 {[%cal Gc6g6] wieza moze dobrze grac po 6 linii} 16. Ne5 Re6 17. Bh3 f5
18. f3 Nd6 {[%cal Gg7g5,Gg8h8,Gf8g8] czarne nie maja zadnych problemow i groza
g5, Kh8 i Wg8}) 14... Ne4 15. Nf5 Bf6 16. Qg4 {[%cal Gf5h6,Re5f7,Rh6f7] z idea
Sh6} Rc7 $1 {[%cal Gc7f7]} 17. Bh6 (17. Nh6+ Kh8 {i wieza broni f7}) 17... g6
18. Bxf8 Kxf8 {[%csl Re5,Rf5] biale nie maja ataku} 19. Nxc6 Bxc6 20. Ne3 Bxd4
{[%csl Rb2] za jakosc jest lekka i pion} 21. Rad1 Qf6 {[%csl Rf2]} 22. Qf3 Bxb2
23. Nxd5 Bxd5 24. Rxd5 Qxf3 25. Bxf3 Nc5 {[%csl Ra4][%cal Gb4b3] i po b3
czarne wyrobia wolniaka, ktory pozwala im na utrzymanie rownowagi} *

`}
    </PGN>
  )
}

export default Game;
