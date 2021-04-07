
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
Goniec nie może wrócić na d2 } { [%cal Ga1d1,Gd1d8,Rf4d2] } (8... Qe7 9. Be2 (9. cxd5 Nxd5 10. Nxd5) 9... dxc4 10. Bxc4 b5 11. Be2 Qd6 (11... Bb7 12. Nxb5))  (8... a6!) *



`}
    </PGN>
  )
}

export default Game;
