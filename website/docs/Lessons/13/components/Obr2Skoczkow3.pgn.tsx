
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "????.??.??"]
[Round "?"]
[White "Enter New Game"]
[Black "?"]
[Result "*"]
[ECO "C58"]
[PlyCount "39"]
[SourceDate "2018.03.06"]
[SourceVersionDate "2018.03.06"]


1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Na5 6. Bb5+ c6 7. dxc6 bxc6 8.
Qf3 Rb8 (8... h6 9. Ne4 Nd5 {jest czesto grane. Biale powinny grac} 10. Ba4 {
[%cal Ra4e8] [#] zachowujac zwiazanie} Be7 11. d3 {[%csl Re4][%cal Gd3e4]
chodzi o to, zeby po f5 miec pod kontrola pole e4 np} O-O 12. O-O f5 13. Ng3 {
[%csl Re4][%cal Gd3e4,Gg3e4]} Be6 14. Re1 {jeszcze bardziej utrudnia e4} Bd6
15. c4 Nb4 $2 (15... Nb6 16. Bc2 Qd7 17. Bd2 $14 f4 18. Bxa5 fxg3 19. Qxg3 e4 {
[%csl Rg3][%cal Rd6g3]} 20. Qe3 exd3 21. Qxd3 $14) (15... Ne7 16. Bd2 {[%csl
Ra5]} c5 {[%cal Ga5c6] c6 bedzie dobrym polem dla skoczka} 17. Nc3 Rc8 18. Rad1
$14) 16. a3 Na6 $16 {[%csl Ra6]}) (8... Bd7 9. Bd3 $1 h6 10. Ne4 Nd5 11. b3 $1
h5 $5 12. Bb2 f5 (12... Bg4 $2 13. Qg3 {[%csl Re5][%cal Gh2h3]} Nf4 $2 14. Bxe5
$18 {[%csl Ra5]}) 13. Qg3 $1 {[%csl Re8,Rg6][%cal Gg3g6] skoczka brac nie
mozna, bo bedzie mat} fxe4 $2 (13... Qe7 14. Qg6+ Qf7 15. Qxf7+ Kxf7 16. Ng5+
Kg6 17. h4 $18) 14. Qg6+ Ke7 15. Ba3+ Nb4 16. Bxb4+ c5 17. Bxc5#) 9. Bd3 Be7
10. b3 {typowe! Pomaga w wyprowadzeniu gonca z c1} O-O 11. Bb2 h6 12. Ne4 Nxe4
13. Qxe4 f5 14. Qe3 (14. Qxe5 $4 Bf6 15. Qxb8 Bxb2 $19) 14... e4 15. Be2 Bd6 {
biale nie maja zadnych slabosci, wiec nie musza sie bac aktywnosci czarnych}
16. Na3 {[%cal Ga3c4] z idea Sc4} Qe7 17. Nc4 Nxc4 18. Bxc4+ {wymiany sa
korzystne dla bialych, ktore maja piona wiecej} Be6 19. Bxe6+ Qxe6 20. O-O-O
$16 *

`}
    </PGN>
  )
}

export default Game;
