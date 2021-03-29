
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
[PlyCount "24"]
[EventDate "2020.??.??"]
[SourceVersionDate "2020.10.10"]


{[%evp 0,24,19,38,30,45,34,45,45,49,49,-3,2,19,23,8,26,34,58,20,24,31,33,31,48,
10,14]} 1. e4 e6 2. d4 d5 3. Nc3 (3. Nd2 {prowadzi do tych samych pozycji} dxe4
4. Nxe4 Bd7) 3... dxe4 4. Nxe4 Bd7 {[%cal Gd7c6,Rc6e4,Re4f3]} 5. c4 $5 {[#]}
Bc6 {[%csl Re4]} 6. Nc3 (6. Bd3 $4 Qxd4 $19) 6... Nf6 {wzmacnia kontrole nad
polem d5 i bialym nie jest latwo przeforsowac ten przelom} 7. Nf3 Bb4 8. Be2
O-O 9. a3 Bxc3+ 10. bxc3 Be4 $5 {idea tgo ruchu jes umozliwienie przesuniecia
piona c7} 11. O-O (11. Nd2 $2 Bxg2 12. Rg1 Bc6 $17) (11. Be3 c5 12. O-O Nc6 $11
) (11. Ne5 c5 $1 (11... Bxg2 $2 12. Rg1 Be4 {nie jest tak bezpieczne przy
skoczku na e5, wiec lepiej tego piona nie brac}) 12. f3 (12. O-O Qa5 {i Sc6,
Wd8, druga na c8}) 12... Bg6 {czarne sa ok}) 11... c5 {[%cal Gd8a5] i Sc6 z
dobra gra} 12. Nd2 (12. Ne5 Nc6 $11) 12... Bg6 $11 *

`}
    </PGN>
  )
}

export default Game;
