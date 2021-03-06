
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
[FEN "8/8/8/k7/P3N3/8/8/7K w - - 0 1"]
[PlyCount "11"]
[SourceVersionDate "2021.01.21"]


{[#] W jaki sposob biale powinny obronic pionka.} 1. Nc3 {skoczek jest poza
kwadratem} (1. Nc5 $2 {jest zle, bo krol zbije skoczka i zostanie w kwadracie
pionka a4} Kb4 2. Kg2 Kxc5 3. Kf3 Kb4 $11) 1... Kb4 2. Kg2 $1 Kxc3 {[%cal
Ga4e4,Ge4e8] krol wyszedl z kwadratu i pion ucieknie} (2... Ka5 3. Kf3 {
pion sam nie wygra, ale pomoze mu krol} Kb4 4. Ke3 Ka5 5. Kd3 Kb4 6. Kd4 Ka5 7.
Kc4 {[%csl Rb4]} Ka6 8. Kb4 Kb6 9. a5+ Ka6 10. Nd5 Kb7 11. Kb5 Ka7 12. a6 Kb8
13. Kb6 Ka8 14. Nc7+ Kb8 15. a7+ Kc8 16. a8=Q+ $18) 3. a5 Kb4 4. a6 Kb5 5. a7
Kb6 6. a8=Q $18 *

`}
    </PGN>
  )
}

export default Game;
