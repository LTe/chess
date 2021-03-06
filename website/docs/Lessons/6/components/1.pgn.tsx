
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.02.24"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "8/6pp/8/8/8/1k5K/p7/R7 w - - 0 1"]
[PlyCount "17"]
[SourceVersionDate "2021.02.24"]


{[#] Biale zaczynaja i uzyskuja remis.} 1. Rf1 $1 {dalej od krola, zeby nie
mogl atakowac wiezy} (1. Kg4 $4 Kb2 2. Rg1 a1=Q 3. Rxa1 Kxa1 $19) 1... Kb2 {
[%cal Ga2a1] czarne chca dorobic hetmana} 2. Rf2+ $1 Kb3 (2... Kb1 3. Rf1+ Kb2
4. Rf2+ {itd}) 3. Rf3+ {biale moga szachowac w nieskonczonosc} Kb4 (3... Kb2 4.
Rf2+ $11) 4. Rf1 $1 {uniemozliwia dorobienie hetmana} Kb3 5. Rf3+ Kb2 6. Rf2+
Kb3 7. Rf3+ Kb4 8. Rf1 {[%cal Rf1a1] itd i remis przez powtorzenie ruchow} Kb3
(8... Kb5 $4 9. Ra1 Kb4 10. Rxa2 $18) 9. Rf3+ $11 *

`}
    </PGN>
  )
}

export default Game;
