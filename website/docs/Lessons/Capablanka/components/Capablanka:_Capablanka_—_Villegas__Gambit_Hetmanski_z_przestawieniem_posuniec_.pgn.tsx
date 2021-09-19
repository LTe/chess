
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`[Event "Capablanka: Capablanka — Villegas (Gambit Hetmański z przestawieniem posunieć)"]
[Site "https://lichess.org/study/nEi1SvSC/6c3sI98L"]
[Result "*"]
[UTCDate "2021.03.25"]
[UTCTime "17:25:23"]
[Variant "Standard"]
[ECO "D04"]
[Opening "Queen's Pawn Game: Colle System"]
[Annotator "https://lichess.org/@/LTe_e"]

1. d4 { [%eval 0.0] } (1. e4) 1... d5 { [%eval 0.17] } 2. Nf3 { [%eval 0.13] } (2. c4 { Bardziej popularny }) 2... Nf6 { [%eval 0.12] } (2... c5 { Według Tarrascha — jedyna poprawna }) 3. e3 { [%eval 0.0] } (3. c4 { Gambit Hetmański })  (3. Bg5) 3... c6 { [%eval 0.39] } (3... c5)  (3... g6 { Bobby Ficher to grał } 4. c3 { Obrona Greunfelda }) 4. Bd3 { [%eval 0.29] [%csl Rf5][%cal Gc8f5,Rd3f5] } (4. c4 Bf5 { Obrona słowiańska } (4... e6 { Obrona półsłowiańska })) 4... Bg4 { [%eval 0.44] [%csl Rf3][%cal Gg4d1] } 5. c4! { [%eval 0.09] } 5... e6 { [%eval 0.43] [%cal Re6d5,Rc6d5,Rf8a3] } 6. Nbd2 { [%eval 0.25] [%cal Rd2c4] } 6... Nbd7 { [%eval 0.33] } 7. O-O { [%eval 0.52] } 7... Be7 { [%eval 0.1] } (7... Bd6) 8. Qc2 { [%eval 0.04] } { Ustawienie baterii } { [%cal Gc2g6,Rd3g6] } 8... Bh5 { [%eval 0.36] [%cal Rh5g6,Rg6d3] } (8... O-O 9. Ne5 Bh5 10. f4 { [%cal Gf4e5] }) 9. b3 { [%eval 0.06] } 9... Bg6 { [%eval 0.47] } 10. Bb2 { [%eval 0.24] } 10... Bxd3 { [%eval 0.27] } 11. Qxd3 { [%eval 0.35] [%cal Gf3e5,Re3e4] } 11... O-O { [%eval 0.23] } 12. Rae1 { [%eval 0.27] } 12... Qc7 { [%eval 0.16] } 13. e4 { [%eval 0.12] } { Wykorzystanie przewagi tempa ze względu na chęć wymiany białopolowych gońców } { [%cal Re1e4,Ge4e5] } (13. c5)  (13. Ne5) 13... dxe4 { [%eval 0.12] } 14. Nxe4 { [%eval 0.23] } 14... Nxe4 { [%eval 0.18] } 15. Rxe4! { [%eval 0.23] [%cal Gd7c6] } (15. Qxe4 { Ruch wieżą jest o wiele silniejszy (RxE4) }) 15... Bf6 { [%eval 0.24] } (15... Nf6 16. Rh4 { [%cal Gd4d5,Gb2f6] }) 16. Qe3! { [%eval 0.36] } (16. h3 Nc5 17. dxc5 Bxb2) 16... c5 { [%eval 0.21] [%cal Gc5d4,Rd7c5] } 17. Ne5 { [%eval 0.07] } 17... cxd4?! { [%eval 0.67] } { Inaccuracy. Rfd8 was best. } { [%cal Gd4e3] } (17... Rfd8 18. h4) 18. Nxd7! { [%eval 0.62] [%cal Gd4e3] } (18. Bxd4 Bxe5 19. Bxe5 Nxe5 20. Rxe5 Rfd8) 18... Qxd7 { [%eval 0.6] [%cal Gb2f6,Rg7f6,Be4g4,Bg4g8] } (18... dxe3 19. Nxf6+ Kh8 (19... gxf6 20. Rg4+ Kh8 21. Bxf6#) 20. Rh4 { [%cal Gh4h7] } 20... h6 21. Rxh6+ gxh6 22. Ne8+ (22. Nd5+ { [%cal Gd5c7] })) 19. Bxd4 { [%eval 0.58] } 19... Bxd4 { [%eval 0.7] } 20. Rxd4 { [%eval 0.81] } 20... Qc7 { [%eval 0.73] } 21. Rfd1 { [%eval 0.75] [%cal Gd4d7] } 21... Rfd8 { [%eval 0.77] [%cal Ge3d2,Ge3d3] } 22. b4 { [%eval 0.28] } (22. Qd3)  (22. Qd2)  (22. Rxd8+? Rxd8 23. Rxd8+ Qxd8 24. Qxa7 Qd1#) 22... Rxd4 { [%eval 0.31] } 23. Qxd4 { [%eval 0.32] } 23... b6? { [%eval 0.25] } (23... a6) 24. g3 { [%eval 0.32] } { Furtka dla króla } 24... Rc8 { [%eval 0.33] } 25. Rc1 { [%eval 0.5] [%cal Gc1c4] } 25... Rd8 { [%eval 0.46] } 26. Qe3! { [%eval 0.38] [%csl Gd2,Rc5][%cal Gd8d2,Re3d2] } 26... Kf8 { [%eval 0.57] } 27. c5 { [%eval 0.44] } 27... bxc5 { [%eval 0.51] [%cal Gb4c5] } 28. Qe4! { [%eval 0.66] [%csl Rc6][%cal Gc7c6,Re4c6,Bc1c7,Bc1c5] } (28. bxc5 Qc6 { [%csl Bc5] }) 28... Rd5 { [%eval 0.75] } 29. bxc5 { [%eval 0.65] [%cal Re4h7] } 29... g6?! { [%eval 1.57] } { Inaccuracy. Qc6 was best. } (29... Qc6 30. Qxh7 Rxc5 31. Qh8+ Ke7 32. Rxc5 Qxc5 33. Qxg7 Qc1+ 34. Kg2 Qc6+ 35. Kh3 Qd5 36. Qb2) 30. c6 { [%eval 1.74] } 30... Kg7 { [%eval 1.34] } (30... Ke7 31. Qh4+ Kd6? 32. Qb4+ Ke5 33. Qf4#) 31. a4! { [%eval 1.04] [%csl Rb5][%cal Be4b4,Bb4b7,Gd5b5,Ra4b5] } 31... Rd6?? { [%eval 7.49] } { Blunder. Rd8 was best. } (31... a5 { [%cal Ge4c4,Gc4a6,Ga6b7] })  (31... Rd8 32. Rc5 h5 33. Qb4 Rb8 34. Qd4+ Kg8 35. Qd7 Rc8 36. a5 Kg7 37. Qd4+ Kg8 38. h4) 32. Qe5+ { [%eval 7.35] } 32... f6 { [%eval 7.94] } 33. Qxd6 { [%eval 7.88] } 33... Qxd6 { [%eval 7.93] } 34. c7 { [%eval 8.11] } *



`}
    </PGN>
  )
}

export default Game;
