
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
[FEN "8/8/4k1p1/8/4K1PP/8/8/8 b - - 0 1"]
[PlyCount "12"]
[SourceVersionDate "2021.06.02"]


{[%csl Gh4][%cal Ge6h8] [#]Ta pozycja jest trudniejsza dla bialych, bo
istnieje pion h, ktory czesto robi remis. Jak biale powinny grac?} 1... Kd6 (
1... Kf6 2. Kd5 Kf7 3. Ke5 {[%csl Re6,Rf6]} Ke7 4. g5 $1 Kd7 (4... Kf7 5. Kd6 {
[%csl Re6,Re7]} Kg7 6. Ke7 {[%csl Rf6,Rf7]} Kh7 7. Kf7 Kh8 8. Kxg6 $18) 5. Kf6
$18) 2. Kf4 Ke6 3. Kg5 $1 {[%csl Rg6]} (3. h5 $2 gxh5 4. gxh5 Kf7 5. Kg5 Kg8
$11) 3... Kf7 4. Kh6 Kf6 5. g5+ (5. h5 $4 gxh5 6. gxh5 Kf7 7. Kh7 Kf8 8. Kh8
Kf7 9. Kh7 Kf8 10. Kh8 $11) 5... Kf7 6. Kh7 {[%cal Rg5f6]} Ke6 7. Kxg6 *

`}
    </PGN>
  )
}

export default Game;
