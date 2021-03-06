
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

1. e4 e6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nd7 5. Nf3 Ngf6 6. Nxf6+ Nxf6 7. Ne5 Bd6 8. Qf3 c6?! { Inaccuracy. O-O was best. } (8... O-O 9. Bg5 Be7 10. c3 c5 11. dxc5 Qc7 12. Nc4 Qxc5 13. Be3 Qc7 14. Qg3 Qxg3 15. hxg3) 9. c3 O-O 10. Bg5 Be7 11. Bd3 Ne8?! { Inaccuracy. c5 was best. } (11... c5 12. dxc5) 12. Qh3 f5 13. Bxe7 Qxe7 14. O-O?! { Inaccuracy. O-O-O was best. } (14. O-O-O Nf6 15. Bc2 a5 16. g4 g6 17. Qh4 Nd5 18. g5 c5 19. dxc5 Qxc5 20. Qg3 b5) 14... Rf6 15. Rfe1 Nd6 16. Re2 Bd7 17. Rae1 Re8 18. c4?! { Inaccuracy. Bc2 was best. } (18. Bc2 Nf7) 18... Nf7 19. d5?! { Inaccuracy. Nxf7 was best. } (19. Nxf7 Qxf7) 19... Nxe5 20. Rxe5 g6 21. Qh4 Kg7 22. Qd4 c5 23. Qc3 b6 24. dxe6 Bc8?! { Inaccuracy. Bc6 was best. } (24... Bc6 25. Be2) 25. Be2? { Mistake. Bc2 was best. } (25. Bc2) 25... Bxe6?? { Blunder. Qd6 was best. } (25... Qd6) 26. Bf3 Kf7 (26... Qd7 27. Bd5 Bf7 28. Rxe8 Bxe8 29. Re6 Qd8 30. Qe5 Bf7 31. Re7) 27. Bd5 Qd6 28. Qe3 Re7?! { Inaccuracy. f4 was best. } (28... f4 29. Qh3) 29. Qh6 Kg8 30. h4 a6 31. h5 f4 32. hxg6 hxg6 (32... Rxg6 33. Rxe6 Rxh6 (33... Rgxe6 34. Bxe6+ (34. Rxe6))  (33... Rexe6 34. Rxe6 (34. Qxg6+ hxg6 35. Rxe6 Qc7 36. Re8+)) 34. Rg6+ Kf8 35. Rg8#) 33. Rxe6 Rfxe6?! { Inaccuracy. Rexe6 was best. } 34. Qxg6+ *



`}
    </PGN>
  )
}

export default Game;
