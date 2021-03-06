
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`[Event "Capablanka: Capablanca — Eliskases — Partia Włoska"]
[Site "https://lichess.org/study/nEi1SvSC/VhRHIiS2"]
[Result "*"]
[UTCDate "2021.04.10"]
[UTCTime "07:47:41"]
[Variant "Standard"]
[ECO "C50"]
[Opening "Italian Game: Giuoco Pianissimo, Canal Variation"]
[Annotator "https://lichess.org/@/LTe_e"]

1. e4 e5 2. Nf3 Nc6 (2... Nf6) 3. Bc4 { [%csl Gf7][%cal Gc4f7] } (3. Bb5 { Partia Hiszpańska }) 3... Bc5 (3... Nf6) 4. Nc3 (4. c3) 4... Nf6 5. d3 d6 6. Bg5 { Wariant Canala } (6. Be3) 6... h6 { Odejście gońcem bez bicia == strata tempa } { [%cal Gc3d5] } (6... Na5) 7. Bxf6 (7. Bh4 g5 8. Bg3 { Osłabienie pionków po stronie króla nie ma znaczenia bo czarne i tak mogą zrobić długą roszade }) 7... Qxf6 8. Nd5! { [%cal Gd5c7,Gd5f6] } 8... Qd8 (8... Qg6 9. Nh4 (9. Qd2) 9... Qg5 10. g3) 9. c3 Ne7 (9... Be6 10. d4 exd4 11. cxd4)  (9... a5 { [%cal Gb2b4] })  (9... a6! 10. d4 exd4 11. cxd4 Ba7)  (9... Na5)  (9... O-O) 10. Ne3 (10. d4 Nxd5 11. Bxd5 exd4) 10... Be6 (10... Bb6 11. O-O O-O 12. d4 { [%cal Gd6e5] } 12... Ng6 { [%cal Gg6e5,Gd6e5] }) 11. Bxe6 fxe6 12. Qb3 Qc8 *



`}
    </PGN>
  )
}

export default Game;
