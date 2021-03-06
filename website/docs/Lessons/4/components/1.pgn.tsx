
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "Play"]
[Site "Chess.com"]
[Date "2021.01.31"]
[Round "?"]
[White "LTe_e"]
[Black "woohah"]
[Result "1-0"]
[ECO "C20"]
[WhiteElo "1207"]
[BlackElo "1153"]
[Annotator "Marcin"]
[PlyCount "71"]
[EventDate "2021.??.??"]


1. f3 $2 {[%csl Rf2,Rf7] zasada:
NIGDY NIE RUSZAMY PIONKOW F2 I F7 BEZ POWODU} (1. e4 $1 {[%cal Gg1f3,Gf1c4,
Ge1g1] wstawia piona do centrum}) 1... e5 2. e4 d5 $2 (2... Bc5 $1 {[%cal
Rc5g1] [#] biale beda mialy problem ze zrobieniem roszady}) 3. Nc3 Nf6 4. a3 $2
{zasada: w debiucie gramy pionami wylacznie do centrum, albo jesli cos
zyskujemy} (4. exd5 Nxd5 5. Nge2) 4... d4 5. Nd5 $4 (5. Nce2) 5... c6 $2 (5...
Nxd5 6. exd5 Qxd5 $19) 6. Nb4 c5 7. Bb5+ Nc6 $2 (7... Bd7) 8. Nxc6 Qb6 (8...
bxc6 9. Bxc6+ Bd7 10. Bxa8) 9. Nxd4+ Bd7 10. Bxd7+ Nxd7 11. Nf5 g6 12. Ne3 Bg7 13. b4 $2 (13. Ne2 O-O 14. O-O {[%cal Gb2b3,Gc1b2] jeszcze postawimy Gb2 i
rozwoj zakonczyny}) 13... Qb5 $2 (13... cxb4 14. axb4 Qxb4 {czarne zyskuja
bicia}) 14. c4 $2 Qc6 15. Ne2 O-O 16. b5 (16. Bb2) 16... Qf6 17. Nd5 $2 {
ZASADA: NIE RUSZAMY FIGURA W DEBIUCIE WIECEJ NIZ RAZ.} (17. O-O {i Gb2, zeby
zakonczyc rozwoj figur.[ Trzeba grac wszystkimi figurami}) 17... Qh4+ 18. Ng3
Nf6 19. O-O Nxd5 20. exd5 $2 (20. cxd5) 20... Qd4+ 21. Kh1 Qxa1 22. Qc2 Qd4 23.
Bb2 Qh4 24. Ne4 Rfd8 25. f4 exf4 26. Bxg7 Kxg7 27. d4 cxd4 28. Qb2 Re8 29.
Qxd4+ Kf8 30. Qh8+ Ke7 31. d6+ Ke6 32. Qg7 Kf5 33. Qxf7+ Kxe4 34. Qd5+ Ke3 35.
Rf3+ Ke2 36. Qd3+ 1-0

`}
    </PGN>
  )
}

export default Game;
