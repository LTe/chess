---
title: Szach królem i Hetmanem
sidebar_label: Szach królem i Hetmanem
slug: /
---

import PGN from '../src/components/PGN'

Aby dać mata królem i hetmanem należy zepchnąć króla przeciwnika na bandę (bok szachownicy).
Aby tego dokonać musisz wymusić pozycję w której:
 
* króle są na przeciwko siebie
* jest Twój ruch

Następnie zaczynamy:

* szach hetmanem
* trzymanie odłegłości skoczkowej (nie dalej niż koń może się posunąć)

<PGN>
[Event "?"]
[Site "?"]
[Date "2021.01.21"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[Annotator "Marcin"]
[SetUp "1"]
[FEN "8/8/8/8/4k3/Q7/4K3/8 w - - 0 1"]
[PlyCount "35"]
[SourceVersionDate "2021.01.21"]

{[#] Aby dac mata krolem i hetmanem nalezy zepchnac krola przeciwnika na bande.
Zeby to zrobic trzeba ustawic pozycje, w ktorej krole sa na przeciwko siebie i
jest nasz ruch. Wtedy dajemy szacha hetmanem i spychamy krola} 1. Qa4+ Kf5 2.
Ke3 $1 {[%cal Ge3e5,Ge5f5] zawsz eodlgelosc skoczkowa} Kg5 (2... Ke5 {krole sa
na przeciwko i spychamy} 3. Qa5+) 3. Kf3 Kh5 4. Kg3 {w koncu krol musi zagrac}
Kg5 5. Qa5+ {[%cal Rg3f4,Rg3g4,Rg3h4]} Kf6 6. Kg4 $1 Ke6 (6... Kg6 7. Qa6+) 7.
Kf4 Kd6 8. Ke4 Kc6 9. Kd4 Kd6 10. Qa6+ Kd7 11. Ke5 Kc7 12. Kd5 Kd7 13. Qb7+ Ke8
14. Kd6 {[%cal Gd6e8]} Kf8 15. Ke6 Kg8 16. Kf6 Kh8 17. Kg6 Kg8+ 18. Qb8# *
</PGN>
