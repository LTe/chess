
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "Let's Play!"]
[Site "Chess.com"]
[Date "2021.01.20"]
[Round "?"]
[White "imri1"]
[Black "LTe_e"]
[Result "1-0"]
[ECO "D02"]
[WhiteElo "1228"]
[BlackElo "1012"]
[Annotator "Marcin"]
[PlyCount "51"]
[EventDate "2021.??.??"]


1. d4 d5 2. Bf4 Nc6 $6 {[#] ZASADA: PO 1.d4 d5 NIGDY NIE GRAMY SC6. WYJATEK:
JESLI PIONEK JEST JUZ NA C5} (2... Bf5) 3. Nf3 Bg4 4. e3 Nf6 5. c4 e6 6. c5 $6
(6. Nc3) 6... Be7 7. Nbd2 O-O 8. Be2 Qd7 $2 9. Ne5 Qe8 $4 (9... Nxe5 10. Bxe5
Bxe2 11. Qxe2 $11) 10. Bxg4 Ne4 11. Bf3 Nxf2 $4 {powiecamy tylko jesli
wygrywamy} (11... Nxd2) 12. Kxf2 g5 13. Bg3 b6 14. Nxc6 Qxc6 15. b4 a5 16. h4
axb4 17. hxg5 Ra3 18. Be4 f6 19. Qh5 fxg5+ 20. Kg1 Rf7 21. Qh6 Rg7 22. Rf1 Bf6
23. Rxf6 Qe8 24. Bxh7+ Kh8 25. Bf5+ Rh7 26. Qxh7# 1-0

`}
    </PGN>
  )
}

export default Game;
