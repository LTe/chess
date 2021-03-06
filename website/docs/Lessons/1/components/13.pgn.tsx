
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
[FEN "5k2/8/1BB3K1/8/8/8/8/8 w - - 0 1"]
[PlyCount "5"]
[SourceVersionDate "2021.01.21"]


{[#] Jak biale powinny grac?} 1. Bc5+ {[%cal Rc6e8,Rc5f8] spychamy krola do
naroznika} Kg8 2. Bd5+ Kh8 3. Bd4# *

`}
    </PGN>
  )
}

export default Game;
