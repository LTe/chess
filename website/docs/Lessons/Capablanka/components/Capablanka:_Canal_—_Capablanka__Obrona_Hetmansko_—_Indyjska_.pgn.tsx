
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`[Event "Capablanka: Canal — Capablanka (Obrona Hetmańsko — Indyjska)"]
[Site "https://lichess.org/study/nEi1SvSC/3Qn80JUj"]
[Result "*"]
[UTCDate "2021.03.15"]
[UTCTime "16:43:03"]
[Variant "Standard"]
[ECO "E16"]
[Opening "Queen's Indian Defense: Capablanca Variation"]
[Annotator "https://lichess.org/@/LTe_e"]

1. d4 Nf6 (1... d5) 2. c4 e6 (2... g6 { Obrona królewsko—indyjska (kings indian) }) 3. Nf3 { Obrona Hetmańsko — Indyjska } (3. Nd2 d5)  (3. Nc3 { Obrona Nimzowitscha })  (3. g3 { Obrona Katalońska }) 3... b6 (3... d5 { Gambit Hetmański })  (3... c5 { Nowoczesny Benoni } 4. d5 (4. Nc3))  (3... Bb4+ { Obrona Bobolubowa }) 4. g3 (4. a3 { Mniej popularne, grane przez Kasparowa na początku kariery }) 4... Bb7 { [%csl Gf3][%cal Gb7f3] } (4... Ba6 { Ruch Arana Nimzowitscha } { [%csl Gc4][%cal Ga6c4] }) 5. Bg2 Bb4+ (5... Be7) 6. Bd2 Bxd2+ (6... Qe7)  (6... Be7) 7. Nbxd2 (7. Qxd2 { [%csl Gc3][%cal Gb1c3] } 7... g6 { Losowy ruch } 8. Nc3 { Lepsza pozycja dla skoczka }) 7... O-O 8. O-O c5 9. dxc5 (9. Nb3 { Słaby nacisk na centrum konia } { [%cal Gb3d4,Gc5d4] })  (9. e3 { Bardziej pasywne, ale bez utraty piona }) 9... bxc5 10. Qc2 { Prawdopodobnie próba ustawienie wieży na półotwartej linii d } { [%csl Gd7][%cal Ga1d1,Gd1d8] } 10... Nc6 { Capablanka chce się skoncentrować na polu d4 — kończy rozwój figur } { [%csl Gd4] } 11. Rfd1 (11. e4 { Blokowanie gońca g2, oddanie inicjatywy nad kontrolą pola d4 } { [%csl Gg2,Gd4] } 11... Qb6) 11... Qb6 { [%csl Gd4][%cal Gb6d4,Gb6b2] } 12. a3 { Przygotowanie do ruchu } { [%cal Gb2b4] } 12... Rab8 13. Rab1 Rfc8? { W jaki sposób pośrednio zapobiega marszowi białego pionka b2-b4? } (13... a5 { Podobny efekt do Rfc8, ale 'pionki nie chodzą do tyłu' } { [%csl Gb4] }) 14. e4 (14. e3 e5 { Białe walczą o pole d5
Czarne walczą o pole d4 — osiągają do wcześniej } { [%csl Bd4,Gd5][%cal Be5d4] } 15. Qd3 { [%csl Gd6,Re5][%cal Gd3d6,Rc6e5] } 15... d6! { [%csl Ge5][%cal Gd6e5] } 16. Nf1 { [%csl Gd5][%cal Gf1e3,Ge3d5] } (16. Qxd6? { Nie można bić bo tracimy Hetmana! } 16... Rd8 17. Qxd8+ Rxd8) 16... Nd4)  (14. b4 cxb4 15. axb4 Nxb4 { Zapobiegamy marszowi dzięki ruchowi wieżą 13... fc8 } { [%cal Gc8c4] }) 14... e5 { [%csl Rd5,Gd4][%cal Ge5d4,Re4d5] } 15. Qd3 { [%csl Gd6][%cal Gd3d6] } 15... d6 { [%csl Ge5][%cal Gc6d4,Gd6e5] } 16. Nf1 { [%csl Gd5][%cal Gf1e3,Ge3d5] } (16. Qxd6 Rd8? { Tracimy Hetmana }) 16... Nd4! 17. Nxd4 (17. Ne3? Bxe4 18. Nd5 Bxd3 19. Nxb6 Nxf3+ 20. Bxf3 Rxb6 21. Rxd3 e4 { Strata figury }) 17... exd4 { [%csl Rd4,Re3][%cal Rc5d4,Rd4e3] } 18. b4! Qc6 { [%cal Gg2c6] } (18... h6 19. bxc5 Qxc5 20. Rxb7 Rxb7 21. e5 { Dwie lekkie figury za jedną wieże })  (18... cxb4?)  (18... Qc7 19. bxc5 dxc5 20. f4 { Groźne natarcia na skrzydło królewskie } 20... h6 21. e5 { Słabe ze względu na inicjatywę białych }) 19. bxc5 dxc5 20. Rxb7!? { [%cal Ge4e5,Ge5e6,Ge6e7,Ge7e8] } 20... Qxb7 21. e5 { [%cal Gg2b7,Ge5f6] } 21... Qb3! 22. exf6 (22. Qxb3 Rxb3 23. exf6 Rxa3 { Czarne uzyskują dwa wolne pionki } { [%csl Gd4,Ga7] }) 22... Qxd3 23. Rxd3 { [%csl Ga3,Gd4][%cal Gd3a3] } 23... Rb1! { Związany skoczek } { [%csl Rf1,Gc4][%cal Gc8e8,Ge8e1,Ge1c1,Rb1f1,Gc1c4] } 24. Bd5 (24. fxg7? { Pion g7 jest zablokowany, nie ma pośpiechu, aby go bić }) 24... Rcb8 { [%cal Gb1c1,Gb8b1] } (24... h6 25. Kg2 h5 26. Nd2 { Rozwinięcie skoczka }) 25. Kg2 { [%csl Gf1] } (25. h3 R8b3 26. Rxb3 Rxb3) 25... R8b3 26. Rxb3 Rxb3 27. Nd2 (27. a4 Ra3 28. a5 Ra4) 27... Rxa3 { [%csl Ga7] } 28. Ne4 { Plan na uzyskanie wolniaka } { [%csl Gc4][%cal Ge4c5] } 28... a5 29. Nxc5 gxf6 (29... Kf8 30. Nd7+)  (29... a4 30. Bc6 { [%cal Gc6a4] })  (29... d3 30. Kf3 h6 31. Ke3 h5 (31... d2+ 32. Kxd2)) 30. Kf1? (30. Bc6 { [%csl Ga4][%cal Gc6a4,Ra5a4] }) 30... a4 31. Ke2 { [%csl Gd4] } (31. Bc6 { Nie boimy się już tego ruchu, bo możemy dać szacha i puścić piona dalej } 31... Ra1+ 32. Kg2 a3) 31... Ra1 { [%csl Ga1][%cal Ga4a1] } 32. Nd3 { [%csl Gd4][%cal Rd4d3,Gc4c7,Gc4c8] } (32. Nxa4 Rxa4 33. Kd3 Ra7) 32... a3 33. c5 a2 34. Kf3 (34. c6 Re1+ 35. Kxe1 a1=Q+) 34... Rd1 35. Bxa2 Rxd3+ { Skoczek już nie blokuje piona } 36. Ke4 (36. Ke2 Rc3) 36... Rd2 37. Bc4 Kf8! (37... Rxf2? 38. c6 Rc2 (38... Rb2 39. c7) 39. Kd5) 38. f3 (38. c6 Ke7) 38... Rxh2 { [%csl Gd4] } 39. Kxd4 Ke7 { [%cal Ge7c5,Gc5c8] } 40. Bd3 { Centralne pole, przerzucenie gońca } { [%csl Ge4,Gg3][%cal Gc4d3,Gd3e4,Gh2g2,Gg2g3] } 40... h5! { [%csl Gg3][%cal Gh2g2,Gg2g3] } 41. Ke3 Rg2 42. Kf4 { [%csl Gg3,Gc5][%cal Gg2g3,Gf4g3] } (42. g4 h4) 42... Rg1 { [%csl Rc2][%cal Gg1c1,Gc1c5,Rd3c2] } 43. Be4 Rc1 { Ruch wygląda dość naiwnie, ale chodzi o skrępowanie gońca e4 do obrony wolnego pionka } { [%cal Gc1c5] } 44. c6 { [%csl Gc6][%cal Re4c6,Gc1c6] } 44... Rc3! 45. c7 (45. Kf5 Rc5+ 46. Kf4 Ke6 { [%cal Gf6f5] } 47. g4 (47. Ke3 f5 48. Kd4 Kd6) 47... h4)  (45. Bd5 Rc5 46. Ke4 f5+ 47. Kd4 Rc4+ 48. Kxc4 f4) 45... Rxc7 46. Bd5 Rc5 { [%csl Ge6][%cal Ge7e6] } 47. Ba2 Rb5 48. Ke3 (48. Bc4? Rb4 { [%cal Gb4g4] })  (48. Ke4 f5+) 48... Ra5 49. Bc4 Rc5 50. Ba6 (50. Ba2 f5 { [%csl Gf6][%cal Ge7f6] })  (50. Kd4 Rg5 { [%cal Gg5g3] }) 50... Ke6 51. Kf4 Rc3 52. Bf1 (52. Ke4 f5+ 53. Kf4 Kf6) 52... f5 { [%csl Gf6][%cal Ge6f6] } 53. Ba6 (53. Kg5 Rxf3 54. Bc4+ Ke5 55. Kh4 (55. Kxh5 Rxg3) 55... f4) 53... Kf6 54. Bb7 { [%csl Gf3][%cal Gb7f3] } 54... Rc4+ 55. Ke3 Kg5 { [%csl Gf4][%cal Gc4f4] } 56. Kf2 f4 { [%cal Gc4c2,Gf4g3] } 57. Kg2 f5! 58. Bd5 Rc2+ 59. Kh3 fxg3 60. Kxg3 h4+ 61. Kh3 *



`}
    </PGN>
  )
}

export default Game;
