
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`[Event "Capablanka: Menchik — Capablanka (Debiut pionka hetmańskiego)"]
[Site "https://lichess.org/study/nEi1SvSC/qtnF7H7m"]
[Result "*"]
[UTCDate "2021.03.22"]
[UTCTime "17:51:21"]
[Variant "Standard"]
[ECO "A47"]
[Opening "Queen's Indian Defense"]
[Annotator "https://lichess.org/@/LTe_e"]

1. d4 Nf6 2. Nf3 (2. c4 e5 { Gambit Budapesztański } (2... e6 3. Nf3 b6 { [%csl Ge4][%cal Gc8b7,Gb7e4,Re2e4] })) 2... b6 3. e3 { Zamiar przejścia do debiutu pionka Hetmańskiego } 3... Bb7 (3... e6 4. c4 { Wariant Hetmańsko Indyjski }) 4. Bd3 (4. c4 { Wariant Hetmańsko Indyjski }) 4... c5 5. O-O { Możliwe, że to było zbyt szybka roszada, robiąc roszadę tracisz tempo. Nieraz warto z tym poczekać. } 5... Nc6 6. c3 { [%csl Gd4][%cal Gb2d4,Gf2d4] } 6... e6 7. Ne5?! { Inaccuracy. e4 was best. } { Zbyt szybka chęć wymiany, skrzydło Hetmańskie nie jest rozwinięte } (7. Nbd2)  (7. e4 cxd4 8. cxd4 Nb4 9. Nc3 Nxd3 10. Qxd3 Bb4 11. d5 O-O) 7... d6 { Nie wymieniamy, przez co białe tracą tempo. Czekamy, aż biały sam zaatakuje. } (7... Nxe5 8. dxe5) 8. Nxc6 Bxc6 { [%csl Gc6,Gf6,Rd3,Ge4][%cal Gf6e4,Gc6e4,Re3e4] } 9. Qe2 { [%cal Re3e4] } 9... Be7 10. Bb5 Qc7 (10... Qd7 11. Bxc6) 11. Bxc6+ Qxc6 { Aktywacja Hetmana poprzez wymianę } 12. Nd2 O-O 13. dxc5 (13. Qf3 { Wymiana Hetmantów } 13... d5 { [%csl Ge4] })  (13. e4 cxd4 14. cxd4 Rac8 { [%cal Gc8c2] })  (13. Re1) 13... dxc5 { [%cal Ga7c5] } (13... bxc5 { Odbicie do centrum lepsze według 'sztuki' }) 14. e4 { [%cal Ge4f5,Ge4d5,Gc1g5] } 14... Rad8 { [%cal Gd8d1] } (14... e5 15. c4 { Zabetonowanie centrum } { [%csl Gc5,Ge5,Ge4,Gc4][%cal Ge7a3] }) 15. e5 { Zdjęcie obowiązku ochrony pionka 'e'. } { [%csl Gd2] } 15... Nd5 { Możliwość odblokowania linii 'd' po Kf4 } { [%csl Gf4][%cal Rd8d2,Gd5f4] } 16. Nf3 Rd7 (16... Nf4) 17. Rd1 Rfd8 18. Bd2?! { Inaccuracy. Re1 was best. } (18. Re1 b5 19. Qe4 c4 20. a3 a5 21. Qg4 Kh8 22. Qh5 b4 23. Qxf7 Bc5 24. Qh5 bxc3) 18... b5! { [%csl Gb6][%cal Gd5b6,Gb6c4,Gb6a4] } (18... h6 19. Be3 (19. Bg5 Bxg5 20. Nxg5 Nf4 21. Qf3 g6 { [%cal Gf3d1,Gd7d1] } (21... Rxd1+)) 19... Nxe3) 19. Kf1?! { Inaccuracy. Re1 was best. } (19. Re1) 19... Nb6 20. Bf4?! { Inaccuracy. Bg5 was best. } { Zachęta do wymiany wież } (20. Bg5 Rxd1+) 20... h6?! { Inaccuracy. Rxd1+ was best. } { Został czaropolowy goniec, można osłabić strukturę pionków króla ze względu na ten fakt } { [%cal Gg7g5,Bg8h7] } (20... Rxd1+ 21. Rxd1) 21. Rxd7 Rxd7 22. Rd1? { Mistake. Be3 was best. } (22. Be3 Na4) 22... Rxd1+ 23. Qxd1 { [%csl Ge5][%cal Gf4e5,Gf3e5,Rb6a4,Rb6c4] } 23... Qe4! 24. Bg3? { Mistake. Be3 was best. } (24. Be3 Na4)  (24. Bd2 Nc4 { [%cal Gc4b2,Gc4e5] }) 24... Qc4+ 25. Qe2 (25. Kg1 Qxa2) 25... Qxe2+?? { Blunder. Qxa2 was best. } (25... Qxa2 26. Qxb5 Qc4+ (26... Nc4 27. h3 (27. Ne1 Nxb2 28. Kg1 a5 29. f4) 27... Qa1+ 28. Ne1 Nxb2 29. Qd7 Bf8 30. Bh4 c4 31. f4 Nd1 32. Be7) 27. Qxc4 Nxc4 28. b3 Na5 29. Nd2) 26. Kxe2 Na4 { [%cal Rd2c3,Re2d2,Ga4c3,Ga4b2] } 27. Kd2?! { Inaccuracy. c4 was best. } (27. c4 a6) 27... Nxb2 28. Kc2 Nc4 29. Nd2 Nxd2 30. Kxd2 c4 (30... b4 31. Bf4! a6 (31... Bg5? 32. Bxg5 { Mamy końcówkę pionkową }) 32. Be3 Kf8) 31. Bf4 a6 32. Be3 Kf8 33. Bb6 Ke8 34. Ke3 Kd7 35. Kd4?! { Inaccuracy. Ke4 was best. } (35. Ke4 Kc6) 35... Kc6 36. Ba7 { [%cal Ga7f2] } (36. Bc5 { Cheliśmy uninać tego ruchu poprzez Kc6 (35...) })  (36. Ba5 Bc5+ 37. Ke4 Bxf2) 36... f5 { [%csl Ge4][%cal Gf5e4] } 37. a4 (37. Bb8 g6 (37... Bc5#) 38. f4 h5 { Czarnopolowy goniec } { [%csl Ga6,Gb5,Gc4,Ge6,Gf5,Gg6,Gh5] })  (37. exf6 Bxf6+ 38. Ke4 Bxc3) 37... g6 (37... bxa4? 38. Kxc4) 38. f4 h5 39. axb5+ Kxb5 { Wolny pionek } { [%csl Ga6] } (39... axb5?) 40. g3 a5 41. Ke3 Bc5+ 42. Bxc5 Kxc5 43. Kd2 Kd5 44. Ke3 a4 45. Kd2 a3 46. Kc2 Ke4 47. Kb1 Kd3 *



`}
    </PGN>
  )
}

export default Game;
