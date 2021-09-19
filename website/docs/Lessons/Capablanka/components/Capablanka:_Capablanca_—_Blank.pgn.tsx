
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`[Event "Capablanka: Capablanca — Blank"]
[Site "https://lichess.org/study/nEi1SvSC/YiBmaVlK"]
[Result "*"]
[UTCDate "2021.03.13"]
[UTCTime "14:12:25"]
[Variant "Standard"]
[ECO "C10"]
[Opening "French Defense: Rubinstein Variation, Capablanca Line"]
[Annotator "https://lichess.org/@/LTe_e"]

1. e4 { [%eval 0.25] } 1... e6 { [%eval 0.13] } 2. d4 { [%eval 0.0] } 2... d5 { [%eval 0.0] } 3. Nc3 { [%eval 0.0] } 3... dxe4 { [%eval 0.28] } 4. Nxe4 { [%eval 0.36] } 4... Nd7 { [%eval 0.49] } 5. Nf3 { [%eval 0.13] } 5... Ngf6 { [%eval 0.39] } 6. Nxf6+ { [%eval 0.53] } 6... Nxf6 { [%eval 0.25] } 7. Ne5 { [%eval 0.0] } 7... Bd6 { [%eval 0.28] } 8. Qf3 { [%eval 0.3] } 8... c6?! { [%eval 0.94] } { Inaccuracy. O-O was best. } (8... O-O 9. Bg5 Be7 10. c3 c5 11. dxc5 Qc7 12. Nc4 Qxc5 13. Be3 Qc7 14. Qg3 Qxg3 15. hxg3) 9. c3 { [%eval 0.91] } 9... O-O { [%eval 1.39] } 10. Bg5 { [%eval 1.38] } 10... Be7 { [%eval 1.45] } 11. Bd3 { [%eval 1.66] } 11... Ne8?! { [%eval 2.61] } { Inaccuracy. c5 was best. } (11... c5 12. dxc5) 12. Qh3 { [%eval 2.41] } 12... f5 { [%eval 2.61] } 13. Bxe7 { [%eval 2.6] } 13... Qxe7 { [%eval 2.79] } 14. O-O?! { [%eval 1.87] } { Inaccuracy. O-O-O was best. } (14. O-O-O Nf6 15. Bc2 a5 16. g4 g6 17. Qh4 Nd5 18. g5 c5 19. dxc5 Qxc5 20. Qg3 b5) 14... Rf6 { [%eval 2.41] } 15. Rfe1 { [%eval 2.32] } 15... Nd6 { [%eval 2.4] } 16. Re2 { [%eval 2.59] } 16... Bd7 { [%eval 2.38] } 17. Rae1 { [%eval 2.71] } 17... Re8 { [%eval 2.62] } 18. c4?! { [%eval 2.0] } { Inaccuracy. Bc2 was best. } (18. Bc2 Nf7) 18... Nf7 { [%eval 2.27] } 19. d5?! { [%eval 1.65] } { Inaccuracy. Nxf7 was best. } (19. Nxf7 Qxf7) 19... Nxe5 { [%eval 1.87] } 20. Rxe5 { [%eval 2.04] } 20... g6 { [%eval 2.37] } 21. Qh4 { [%eval 2.21] } 21... Kg7 { [%eval 2.54] } 22. Qd4 { [%eval 2.5] } 22... c5 { [%eval 2.51] } 23. Qc3 { [%eval 2.74] } 23... b6 { [%eval 2.74] } 24. dxe6 { [%eval 2.7] } 24... Bc8?! { [%eval 4.17] } { Inaccuracy. Bc6 was best. } (24... Bc6 25. Be2) 25. Be2? { [%eval 2.19] } { Mistake. Bc2 was best. } (25. Bc2) 25... Bxe6?? { [%eval 4.74] } { Blunder. Qd6 was best. } (25... Qd6) 26. Bf3 { [%eval 4.67] } 26... Kf7 { [%eval 4.43] } (26... Qd7 27. Bd5 Bf7 28. Rxe8 Bxe8 29. Re6 Qd8 30. Qe5 Bf7 31. Re7) 27. Bd5 { [%eval 5.03] } 27... Qd6 { [%eval 4.68] } 28. Qe3 { [%eval 4.31] } 28... Re7?! { [%eval 5.62] } { Inaccuracy. f4 was best. } (28... f4 29. Qh3) 29. Qh6 { [%eval 5.62] } 29... Kg8 { [%eval 5.46] } 30. h4 { [%eval 5.58] } 30... a6 { [%eval 5.71] } 31. h5 { [%eval 5.31] } 31... f4 { [%eval 5.59] } 32. hxg6 { [%eval 5.5] } 32... hxg6 { [%eval 5.84] } (32... Rxg6 33. Rxe6 Rxh6 (33... Rgxe6 34. Bxe6+ (34. Rxe6))  (33... Rexe6 34. Rxe6 (34. Qxg6+ hxg6 35. Rxe6 Qc7 36. Re8+)) 34. Rg6+ Kf8 35. Rg8#) 33. Rxe6 { [%eval 5.46] } 33... Rfxe6?! { [%eval 64.9] } { Inaccuracy. Rexe6 was best. } 34. Qxg6+ { [%eval 64.94] } *



`}
    </PGN>
  )
}

export default Game;
