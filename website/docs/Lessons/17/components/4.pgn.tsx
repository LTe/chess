
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.06.02"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "8/8/4k1p1/8/4KPP1/8/8/8 w - - 0 1"]
[PlyCount "13"]
[SourceVersionDate "2021.06.02"]


{[#]Jak biale powinny grac?} 1. g5 $1 {[%csl Rf6]} (1. f5+ $2 {zeby wygrac
pozycje K+P na K trzeba miec swojego krola przed pionem} gxf5+ 2. gxf5+ Kf6 3.
Kf4 Kf7 $1 4. Kg5 Kg7 5. f6+ Kf7 6. Kf5 Kf8 $1 7. Ke6 Ke8 8. f7+ Kf8 9. Kf6 $11
) 1... Kf7 (1... Kd6 2. f5 gxf5+ 3. Kxf5 Ke7 4. Kg6 Kf8 5. Kh7 $18) 2. Kd5 $1 {
[%csl Re6] tzw oflankowanie} (2. Ke5 $2 Ke7 3. f5 $2 gxf5 4. Kxf5 Kf7 {bialy
krol nie wejdzie przed piona} 5. g6+ Kg7 6. Kg5 Kg8 $1 $11) 2... Ke7 3. Ke5 $1
{opozycja, ruch czarnych} Kf7 (3... Kd7 4. Kf6 $18) 4. Kd6 {[%csl Re6,Re7]} Kg7
5. Ke6 Kh7 6. Kf7 Kh8 7. Kxg6 $18 *

`}
    </PGN>
  )
}

export default Game;
