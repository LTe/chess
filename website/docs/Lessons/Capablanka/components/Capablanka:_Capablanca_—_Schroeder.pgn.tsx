
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`[Event "Capablanka: Capablanca — Schroeder"]
[Site "https://lichess.org/study/nEi1SvSC/Wv5yNJUV"]
[Result "*"]
[UTCDate "2021.03.30"]
[UTCTime "18:15:15"]
[Variant "Standard"]
[ECO "D63"]
[Opening "Queen's Gambit Declined: Orthodox Defense, Henneberger Variation"]
[Annotator "https://lichess.org/@/LTe_e"]

1. d4 d5 (1... Nf6 { Indyjska obrona }) 2. Nf3 e6 (2... c5 { Polecany przez Tarrascha }) 3. c4 Nf6 4. Nc3 { Gambit Hetmańskie nie został przyjety } 4... Nbd7 (4... Be7 { Bardziej elastyczne }) 5. Bg5 (5. Bf4 { [%cal Gc7c5] } 5... c5) 5... Be7 6. e3 { [%cal Ge2e3,Bc1g5,Rf1d3] } 6... O-O { [%cal Gh7h6,Gg5h4] } 7. Rc1 a6 { [%cal Gd5c4,Rf1c4,Bb7b5] } 8. Qc2 { [%csl Gd3][%cal Gc2h7,Gf1d3,Rd3h7] } (8. h3 $140 dxc4 9. Bxc4 b5 { [%cal Gc8b7,Gc7c5] }) 8... Re8 { Walka o tempo, czekamy na wyjście gońca } { [%cal Gf1d3] } (8... h6 { [%cal Gg5h4,Gd5c4,Gb7b5,Gc7c5] }) 9. Bd3 dxc4 10. Bxc4 b5 { Zdobycie tempa } 11. Bd3 Bb7 (11... c5 12. Bxf6 Nxf6 13. Ne4 { [%csl Gh7] }) 12. a4 { [%cal Gc7c5] } 12... b4 13. Bxf6 (13. Ne2 c5 { [%csl Gc5][%cal Gd7f8] }) 13... Nxf6 14. Ne4 { [%cal Ge4c5,Gc2c5,Gd4c5,Gc1c5] } 14... Nxe4 (14... h6 $140 15. Nc5 (15. Nxf6+ Bxf6 16. Bh7+)) 15. Bxe4 Bxe4 (15... b3 16. Bxh7+ Kh8 17. Qd3) 16. Qxe4 (16. Qc6) 16... c5! 17. dxc5 Qa5 { [%cal Ga5c5] } 18. b3 (18. c6 Qxa4 { [%csl Ge7,Gf6][%cal Ge7f6] }) 18... Bxc5 19. Ng5 h6 (19... f5 20. Qc4 { [%cal Ga2g8] })  (19... g6 20. Qf3 Ra7 (20... Rf8 21. Nxf7 Rxf7 { [%cal Gf3a8] }) 21. Qc6) 20. Qh7+ Kf8 21. Qh8+ (21. Ne4 Bb6 22. Rc6) 21... Ke7 22. Qxg7 hxg5 23. Qxg5+ Kd6 24. Ke2 { [%csl Gd1][%cal Gh1d1,Gd1d7] } 24... Rac8 (24... Bb6? 25. Rhd1+) 25. Rc4 Kc6 26. Rhc1 Kb6 { [%cal Ga5b6,Ga5a6,Ga5b4,Ga5c5,Ra5a4,Rb3a4] } 27. h4! f5 (27... Rc7 28. h5 Rec8 { [%cal Gc8c5,Gc7c5,Rg5c5] } 29. h6 Bd6 (29... Bf8 30. Qxa5+ Kxa5 31. Rxc7) 30. Qxa5+ Kxa5 31. Rxc7 Rxc7 32. Rc6 (32. Rxc7 Bxc7 33. f4 Bd8 34. g4 Bf6 35. g5 Bh8 36. e4 Kb6 37. f5 exf5 38. exf5 Kc5 39. g6 fxg6 40. fxg6 Kd5 41. g7 Bxg7 42. hxg7 Ke6 43. g8=Q+)) 28. Qg7 { [%cal Gg7h8,Gg7a1] } 28... Re7 (28... Rc7 29. Qxc7+ Kxc7 30. Rxc5+) 29. Qe5 { [%csl Ge5] } 29... Rc6? (29... Rec7 30. Qxe6+) 30. Rxc5 Rxc5 31. Qd6+ Rc6 32. Qxc6+ Ka7 33. Rc5 *



`}
    </PGN>
  )
}

export default Game;
