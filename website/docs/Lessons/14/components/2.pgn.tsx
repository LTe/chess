
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "Rated Correspondence game"]
[Site "https://lichess.org/4w9NA6Sg"]
[Date "2021.04.19"]
[Round "?"]
[White "classic_tryhard2"]
[Black "LTe_e"]
[Result "*"]
[ECO "E14"]
[WhiteElo "1520"]
[BlackElo "1700"]
[Annotator "lichess.org"]
[PlyCount "82"]
[EventDate "2021.??.??"]
[SourceVersionDate "2020.07.27"]


{[%evp 0,82,25,26,13,-23,-22,4,1,6,15,30,34,0,46,-312,-48,-47,53,53,477,477,
608,366,407,250,255,247,252,-128,116,-100,-129,-187,-148,-341,-326,-328,-309,
-321,-402,-352,-347,-338,-339,-339,-323,-450,-576,-618,-622,-673,-692,-781,
-818,-818,-793,-844,-878,-942,-992,-1152,-885,-1185,-1243,-1249,-1262,-2304,
-29976,-29977,-1879,-29983,-29984,-29985,-29990,-29991,-29992,-29993,-29994,
-29995,-29996,-29997,-29998,-29999,-30000]} 1. d4 d5 2. c4 e6 3. Nf3 Nf6 4. Nc3
Be7 5. e3 $2 (5. Bg5) 5... b6 $6 (5... O-O {zazwyczaj najlepiej zrobic ruchy,
ktore i tak musisz wykonac. Moze biale zbija na d5 i wtedy goniec bedzie mial
lepsze pole niz b7}) 6. Bd3 Bb7 7. e4 $4 {[#]} dxc4 $2 (7... dxe4 $18) 8. Qa4+
Bc6 9. Qxc4 Nbd7 $4 (9... O-O) 10. Qxc6 Rc8 11. Ne5 O-O 12. Bg5 Nxe5 13. dxe5
Ng4 14. h4 $4 (14. Bxe7 Qxe7 15. O-O) 14... Nxe5 15. Qb5 Nxd3+ 16. Kf1 Bxg5 17.
hxg5 Qd4 18. Nd1 c5 19. Ne3 f5 20. Qc4 Qxb2 21. Nc2 Rcd8 22. exf5 Rxf5 23.
Qxe6+ Rf7 24. Rh3 (24. g6 hxg6 25. Qc4 {[%cal Gc4h4]}) 24... Qxc2 25. Rf3 Nf4
26. Qxf7+ Kxf7 27. Rxf4+ Kg8 28. Re1 c4 29. g6 hxg6 30. Kg1 Qd2 31. Re3 c3 32.
Rc4 c2 33. g3 c1=Q+ 34. Rxc1 Qxc1+ 35. Kg2 Qc6+ 36. Kh2 Rd1 37. g4 g5 38. Re8+
Kh7 39. Re1 Rxe1 40. a3 Qh1+ 41. Kg3 Rg1# {Unterminated} *

`}
    </PGN>
  )
}

export default Game;
