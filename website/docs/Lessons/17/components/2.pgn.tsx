
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "Rated Rapid game"]
[Site "https://lichess.org/jOrRsfZ5"]
[Date "2021.05.31"]
[Round "?"]
[White "LTe_x"]
[Black "mratan"]
[Result "0-1"]
[ECO "C40"]
[WhiteElo "981"]
[BlackElo "1040"]
[Annotator "chess"]
[PlyCount "66"]
[EventDate "2021.??.??"]
[EventType "rapid"]
[SourceVersionDate "2020.07.27"]


1. e4 e5 2. Nf3 f6 $4 {[%csl Rf7][%cal Rf1c4,Rc4g8]} 3. Bc4 $6 (3. Nxe5 $1 {[#]
} Qe7 (3... fxe5 4. Qh5+ g6 (4... Ke7 5. Qxe5+ Kf7 6. Bc4+ Kg6 7. Qf5+ Kh6 8.
d4+ g5 9. h4 $18) 5. Qxe5+ Kf7 6. Qxh8 $18) 4. Nf3 Qxe4+ 5. Be2 {[%cal Ge1g1,
Gh1e1,Re1e8] i 0-0 i We1}) 3... d5 $4 4. exd5 $6 (4. Bxd5 {mamy piona wiecej,
ale nie psujemy struktury}) 4... Bc5 5. c3 (5. O-O) 5... Bf5 6. d4 exd4 7. cxd4
Bb4+ 8. Bd2 a5 9. d6 $2 {nie oddajemy za free} (9. O-O {i We1}) 9... Qxd6 10.
Qe2+ $2 (10. O-O {[%cal Gf1e1,Gg8e7] i WE1}) 10... Ne7 $2 (10... Qe7 {po
wymianie hetmanow czarne nie maja problemow}) 11. O-O c6 $2 (11... Nbc6) 12. a3
$6 (12. Re1 {rozwoj i nacisk}) 12... Bxd2 13. Nbxd2 b5 $2 14. Rac1 $4 (14. Ba2
{[%cal Ra2g8] zeby czarne nie mogly zrobic roszady}) 14... bxc4 15. Nxc4 Qe6
16. Rfe1 $2 {pozwala wymienic hetmany, a majac figure wiecej nie wymieniamy.} (
16. Qd2 {[%cal Gf1e1] i We1. Z hetmanem zawsze mamy szanse na atak.}) 16... Kf7
$2 (16... Qxe2) 17. Ng5+ $4 (17. Qxe6+ $1 Bxe6 18. Nd6+ Kg6 19. Rxe6 $18) 17...
fxg5 18. Ne5+ Kf6 19. Rc5 Na6 $2 (19... Nd7) 20. Rxa5 Rhd8 21. Qh5 g6 (21...
Nc7 {[%cal Gc7d5]}) 22. Nd7+ $2 Rxd7 $4 (22... Qxd7) 23. Rxe6+ Bxe6 24. Qxh7
Rxd4 25. g3 Rd1+ $2 (25... Bd5 $1 {[%cal Gd5h1,Gd4d1]}) 26. Kg2 Rd5 27. Ra4 Nf5
28. Re4 Re5 29. Rxe5 Kxe5 30. Qxg6 Bd5+ 31. f3 Ne3+ $2 (31... Rg8 {[%cal Rg8g5]
}) 32. Kh3 $4 (32. Kf2 $1 Nc4 33. b3 Nb6 34. Qxg5+ Kd6 35. Qf4+ {[%cal Gh2h4,
Gg3g4,Gg4g5,Gh4h5] i h4 i idziemy pionami}) 32... Rh8+ 33. Qh6 Rxh6# 0-1

`}
    </PGN>
  )
}

export default Game;
