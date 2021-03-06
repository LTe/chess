
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2020.10.10"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[ECO "C10"]
[Annotator "chess"]
[PlyCount "37"]
[SourceVersionDate "2020.10.10"]


1. e4 e6 2. d4 d5 3. Nc3 (3. Nd2) 3... dxe4 4. Nxe4 Bd7 5. Nf3 Bc6 6. Neg5 $5 {
[#] Bardzo agresywny wariant. Biale czesto poswiecaja na f7, albo e6.} Bd6 $1 (
6... Nf6 $4 7. Ne5 $18) 7. Bd3 (7. Ne5 Bxe5 8. dxe5 Qxd1+ 9. Kxd1 $11) (7. Bc4
h6 8. Nh3 (8. Nxe6 fxe6 9. Bxe6 Qf6 $1 {[%csl Rf3] atakuje gonca i grozi Gf3}
10. d5 Bd7 11. Nd4 Qe5+ 12. Be3 Nf6 13. Qd3 Nxd5 14. Qg6+ Kd8 15. O-O-O Nxe3
16. fxe3 Be8 $19) (8. Nxf7 $2 Kxf7 9. d5 exd5 10. Bxd5+ Kf8 $19) 8... g5 $17) (
7. Nxf7 Kxf7 8. Ng5+ Ke7 9. Bc4 Bd5 10. Nxe6 (10. Bxd5 Bb4+ $1 {wazne
wtracenie. Czarne na d5 zbija hetmanem} 11. c3 Qxd5 12. cxb4 Qxg2 13. Rf1 (13.
Qf3 Qxf3 14. Nxf3 Nf6 $11) 13... Qd5 $11 {[%cal Gg8f6,Gb8c6]}) 10... Bxe6 11.
Qe2 Kf8 12. Qxe6 (12. Bxe6 Nc6 13. Be3 Qf6 $17) 12... Qe7 $19) 7... h6 8. Ne4 (
8. Nxf7 $2 Kxf7 {nie dziala, bo biale nie maja ani Sg5, ani Se5}) 8... Nf6 9.
Qe2 (9. Nxd6+ $6 Qxd6 10. O-O Nbd7 11. Re1 O-O-O 12. c3 Rhe8 13. Ne5 Nxe5 14.
Rxe5 Nd7 15. Re1 e5 $15) 9... Nxe4 $1 {Majac mniej przestrzeni dazymy do wymian
} 10. Bxe4 Bxe4 11. Qxe4 c6 12. O-O O-O 13. c4 Nd7 14. b3 Qe7 15. Bb2 Ba3 $1
16. Bc3 Bb4 17. Bb2 Ba3 18. Bc3 Bb4 19. Bb2 $11 (19. Bxb4 Qxb4 {z dalszym ..a5
i czarne nie maja problemow}) *

`}
    </PGN>
  )
}

export default Game;
