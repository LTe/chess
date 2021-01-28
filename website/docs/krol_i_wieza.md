---
title: Szach królem i Wieżą
sidebar_label: Szach królem i Wieżą
---

import PGN from '../src/components/PGN'

Robimy podobnie jak [tutaj](krol_i_hetman.md)

Aby dać mata królem i wieżą należy zepchnąć króla przeciwnika na bandę (bok szachownicy).
Aby tego dokonać musisz wymusić pozycję w której:
 
* króle są na przeciwko siebie
* jest Twój ruch

Następnie zaczynamy:

* szach wieża
* trzymanie odłegłości skoczkowej (nie dalej niż koń może się posunąć)
* gdy król zbliży się do wieży, przerzucamy ją na drugą stronę
* próbujemy doprowadzić ponownie do sytuacji gdzie król jest na przeciwko i jest nasz ruch
możemy to zrobić poprzed `oddanie` ruchu wieżą -- zobacz ruch `6.`


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
[FEN "8/8/8/8/4k3/R7/4K3/8 w - - 0 1"]
[PlyCount "57"]
[SourceVersionDate "2021.01.21"]

{[#]} 1. Ra4+ Kd5 2. Ke3 {odleglosc skoczkowa} Kc5 3. Kd3 Kb5 4. Rh4 $1 Ka5 5.
Kc3 Kb5 6. Rg4 $1 {oddajemy tempo} Ka5 (6... Kc5 7. Rg5+) 7. Kb3 Kb5 8. Rg5+
Kc6 9. Kb4 Kd6 10. Kc4 Ke6 11. Kd4 Kf6 12. Ra5 $1 Ke6 13. Rb5 $1 {oddajemy ruch
} (13. Ke4 Kd6) 13... Kf6 14. Ke4 Kg6 15. Kf4 Kh6 16. Kg4 Kg6 17. Rb6+ Kf7 18.
Kg5 Ke7 19. Kf5 Kd7 20. Ke5 Kc7 21. Rh6 $1 Kd7 22. Rg6 {znowu oddaje ruch} Ke7
23. Rg7+ Kf8 24. Ra7 Ke8 25. Kd6 Kf8 26. Ke6 Kg8 27. Kf6 Kh8 28. Kg6 Kg8 29.
Ra8# *
</PGN>
