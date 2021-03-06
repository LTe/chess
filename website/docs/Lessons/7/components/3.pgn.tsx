
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.03.03"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "chess"]
[SetUp "1"]
[FEN "8/8/8/4KP2/8/4kp2/8/8 w - - 0 1"]
[PlyCount "1"]
[SourceVersionDate "2021.03.03"]


{[%cal Ge3e5] [#] Opozycja jest wtedy kiedy dwa krole stoja na przeciwko
siebie o nieparzysta liczbe pol i zawsze jest niekorzystna dla strony, ktora
musi wykonac ruch. Ta strona traci opozycje i nie osiaga swojego celu} 1. Kd5 *

`}
    </PGN>
  )
}

export default Game;
