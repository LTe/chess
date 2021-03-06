
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Site "Chess.com"]
[Date "2021.01.15"]
[Round "?"]
[White "imri1"]
[Black "LTe_e"]
[Result "0-1"]
[ECO "D02"]
[WhiteElo "1209"]
[BlackElo "1122"]
[Annotator "Marcin"]
[PlyCount "56"]
[EventDate "2021.??.??"]


1. Nf3 d5 2. d4 e6 3. Bf4 Bd6 4. Bxd6 cxd6 5. e3 Nc6 6. Bb5 Qa5+ $6 {Za
wczesnie} (6... Nf6) 7. Nc3 Nf6 8. Bxc6+ $2 {nic nie daje, tylko przyciaga
piona do centrum} bxc6 9. O-O Ba6 10. Re1 Ne4 $2 {drugi ruch ta sama figura!} (
10... O-O) (10... Rb8) 11. Nxe4 dxe4 12. Nd2 O-O $2 (12... d5) 13. Nxe4 Rad8
14. b3 c5 15. c4 Bb7 {[#]} 16. Ng5 $2 (16. d5 $1 {zamyka czarnego gonca i
pozwala utrzymac skoczka w centrum}) 16... cxd4 17. Nh3 $2 dxe3 18. Rxe3 d5 19.
Re5 Qc7 20. Qe2 dxc4 21. bxc4 Rd4 22. Rc1 Rfd8 23. f3 Rd2 24. Qe3 Bxf3 25. gxf3
f6 26. Rxe6 Qxh2+ 27. Kf1 Qxh3+ 28. Kg1 Qg2# 0-1

`}
    </PGN>
  )
}

export default Game;
