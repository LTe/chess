
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.04.11"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "6b1/5p2/2B2K2/7k/8/6P1/8/8 w - - 0 1"]
[PlyCount "19"]
[SourceVersionDate "2021.04.11"]


{[#] Biale wygrywaja dzieki lepszemu goncowi} 1. Bf3+ {[%csl Rg4,Rh4]} (1. Kg7
$2 Kg4 2. Kxg8 Kxg3 $11) (1. Bd7 $2 Bh7 2. Kxf7 Kg5 $11) 1... Kh6 2. g4 {
[%csl Rg5,Rh5]} Kh7 (2... Bh7 3. g5#) 3. g5 {[%csl Rg6,Rh6]} Kh8 4. Be4 $1 {
zugzwang} Bh7 5. Bxh7 Kxh7 6. Kxf7 Kh8 7. Kg6 (7. g6 $2 $11) 7... Kg8 8. Kh6
Kh8 9. g6 Kg8 10. g7 $18 *

`}
    </PGN>
  )
}

export default Game;
