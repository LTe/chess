
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`[Event "Capablanka: Capablanka — Mattison — Obrona Nimzowitscha"]
[Site "https://lichess.org/study/nEi1SvSC/dijOrPbK"]
[Result "*"]
[UTCDate "2021.04.06"]
[UTCTime "18:11:30"]
[Variant "Standard"]
[ECO "E38"]
[Opening "Nimzo-Indian Defense: Classical Variation, Berlin Variation"]
[Annotator "https://lichess.org/@/LTe_e"]

1. d4 Nf6 2. c4 e6 3. Nc3 (3. Nf3 b6 { Wiedzie do obrony hetmańsko — indyjskiej } (3... c5 4. d5 (4. Nc3)  (4. e3))  (3... Bb4+)  (3... d5 { Gambit Hetmański }))  (3. g3 { Katalońska }) 3... Bb4 { Obrona Nimzowitscha } 4. Qc2 { Walczymy o pole e4 } { [%csl Ge4] } (4. h3 $140 Bxc3+ 5. bxc3 { Wcześniejszy ruch Hetmanem spowodował, że pionki się nie zdublowały })  (4. Qb3)  (4. e3) 4... c5 (4... d5)  (4... Nc6 { [%cal Gd7d6,Ge6e5] }) 5. dxc5 Nc6 6. Nf3 (6. a3 Bxc5 7. b4) 6... Bxc5 7. Bf4 { [%csl Gh6][%cal Ge2e3] } (7. Bg5 { [%cal Ge2e4,Ge4e5] }) 7... d5 (7... Be7 { Trzeci ruch gońcem, pasywnie } { [%cal Gd7d6] }) 8. e3 Qa5!? { Ewakuacja Hetmana z półotwartej linii
Goniec nie może wrócić na d2 } { [%cal Ga1d1,Gd1d8,Rf4d2] } (8... Qe7 9. Be2 (9. cxd5 Nxd5 10. Nxd5) 9... dxc4 10. Bxc4 b5 11. Be2 Qd6 (11... Bb7 12. Nxb5))  (8... a6!) 9. Be2 Bb4 (9... Ne4 10. O-O Nxc3 11. bxc3)  (9... O-O 10. O-O Bd7)  (9... dxc4 10. Bxc4 Be7)  (9... d4 10. exd4 Nxd4 11. Nxd4 Bxd4 12. Bd2) 10. O-O Bxc3 11. bxc3 O-O { Czarne muszą się spieszyć } (11... Bd7 12. Rab1 b6 13. Bd6 { [%cal Gb1b5] })  (11... Ne4 { [%csl Gc3] } 12. cxd5 exd5 13. c4) 12. Rab1! { [%csl Gb7][%cal Rb1b7,Gc8b7] } 12... Qa3!? (12... dxc4 13. Bxc4 Qc5 { [%cal Ga7a6,Ge6e5] } (13... Qa6)) 13. Rfd1! b6 14. cxd5 Nxd5 (14... exd5 15. c4 dxc4 (15... Be6 16. cxd5 Bxd5 17. Rxd5 Nxd5 18. Qxc6) 16. Bd6) 15. Ng5! { [%csl Gh7][%cal Gc2h7,Gc8e6] } 15... f5 { [%cal Gc8e6] } (15... Nf6 { [%cal Gf4d6,Gd6f8] })  (15... g6 16. Bf3) 16. Bf3 Qc5 (16... Nce7 17. c4)  (16... Nde7 17. Bd6)  (16... Rd8 17. c4 Ndb4 18. Rxb4)  (16... Nxf4 17. Bxc6)  (16... Qxc3 17. Qxc3 Nxc3 18. Bxc6 Nxd1 19. Rxd1 Ba6 20. Bxa8)  (16... h6 17. Rxd5 hxg5 18. Bd6 Qa6 19. Bxf8 Kxf8 (19... exd5 20. Bxd5+ Kxf8 21. Bxc6 Rb8 22. Qd2)) 17. c4! { [%cal Gb1b5] } 17... Ndb4 18. Qb3 { [%cal Gf4d6] } 18... e5 19. a3!! Na6 (19... exf4 20. axb4 Qe7 21. Bxc6 Rb8 22. exf4) 20. Bxc6 Qxc6 (20... Be6 21. Nxe6) 21. c5+ Kh8 (21... Be6) 22. Nf7+ Kg8 23. Nh6+ Kh8 24. Qg8+ Rxg8 25. Nf7# *



`}
    </PGN>
  )
}

export default Game;
