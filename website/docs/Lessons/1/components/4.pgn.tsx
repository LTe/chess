
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.01.21"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "Marcin"]
[SetUp "1"]
[FEN "8/8/8/8/8/4k3/2R5/1R3K2 w - - 0 1"]
[PlyCount "27"]
[SourceVersionDate "2021.01.21"]


{[%cal Gb1b3,Gc2c4,Gb3b5] [#]Wieze matuja podobnie jak wieza i hetman, ale
czasami trzeba je przerzucic na druga strone szachownicy.} 1. Rb3+ Kd4 {
[%csl Rc4][%cal Rd4c4] teraz nie mozna grac Wc4, wiec przerzucamy wieze} 2. Rh2
{[%cal Gh2h4,Gb3h3]} Kc4 3. Rg3 {teraz wieze sa bezpieczne} Kd4 4. Rh4+ Ke5 5.
Rg5+ Kf6 {znowu przerzucamy wieze} 6. Ra5 Ke6 7. Rb4 Kd6 8. Rb6+ Kc7 9. Rh6 Kd7
10. Rg5 Ke7 11. Rg7+ Kf8 12. Ra7 Kg8 {[%cal Gh6h8]} 13. Rb6 Kf8 14. Rb8# *

`}
    </PGN>
  )
}

export default Game;
