
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2020.10.10"]
[Round "?"]
[White "Enter New Game"]
[Black "?"]
[Result "*"]
[ECO "C02"]
[Annotator "chess"]
[PlyCount "30"]
[EventDate "2020.??.??"]
[SourceVersionDate "2020.10.10"]


{[%evp 0,30,16,28,41,8,69,36,36,15,20,20,19,7,-8,7,57,52,52,59,59,33,48,48,33,
28,94,75,70,36,49,18,38]} 1. e4 e6 {obrona francuska} 2. d4 {jest najlepsze,
bo zabiera centrum} d5 {[%csl Rc8]} 3. e5 {[%csl Rc8] w tym pliku omowimy
wariant zamkniety od strony czarnych. Centrum zostalo zamkniete i gra rozegra
sie na skrzydlach.Plan czarnych zwiazany jest z przelomem ..c5 i postawieniem
hetmana na b6.} c5 {[%cal Ga8c8]} 4. c3 {[%csl Rc1,Rc8,Gf1,Gf8] [#] Glowna
pozycja wariantu zamknietego. Problemem czarcnyh jest ich goniec z c8. Dlatego
najprosciej jest wymienic go jak najszybciej sie da} (4. Nf3 cxd4 5. Nxd4 (5.
Bd3 Nc6 6. O-O {biale chca wykorzystac piona e5 jako klin w pozycji czarnych i
wzmocnic go przez Gf4, He2 itd, wiec rozbijamy centrum} f6 $1 7. Bf4 fxe5 8.
Nxe5 {[%cal Rd1h5]} Nf6 9. Nd2 Bd6 10. Qe2 O-O 11. Ndf3 Qc7 $11) 5... Qb6 {
[%cal Gf8c5,Rc5f2] i Gc5}) (4. Qg4 $6 Nc6 5. Nf3 Qa5+ $1 6. Bd2 (6. c3 $2 cxd4
7. Nxd4 Nxe5 $19) 6... Qb6 {[%csl Rb2,Rd4] z naciskiem na d4 i b2}) (4. dxc5
Nc6 {[%csl Re5]} 5. Nf3 (5. Bb5 $6 Bxc5 6. Qg4 Kf8 {[%csl Rb2,Rb5][%cal Gd8b6,
Rb6f2,Gc6e5] krol jest bezpieczny a grozi Hb6. Dodatkowo pion e5 jest pod
biciem}) 5... Bxc5 {[%csl Rb2,Rf2][%cal Gd8b6,Rb6f2] i Hb6 z dobra gra}) 4...
Qb6 {[%csl Rb2,Rd4][%cal Gc8d7,Gd7b5] hetman naciska na d4 i b2 i w ten sposob
utrudnia wyprowadzenie Gc1} 5. Nf3 Bd7 $1 {[%csl Rb2,Rc1,Rc3,Rd4,Yd7,Re5,Gf1,
Gf8][%cal Gd7b5] z idea Gb5 i wymiana zlego gonca za dobrego gonca bialych.
Wtedy czarne zostana z dobrym goncem na f8, a biale ze zlym na c1.} 6. Bd3 {
[%cal Rc5d4,Gd7b5]} (6. a3 {wyglada dziwnie, ale biale maja zamiar zagrac b4 i
wziac przestrzen na hetmanskim skrzydle i przy okazji zmniejszyc nacisk
czarnych na piona b.} cxd4 7. cxd4 Bb5 {znowu gramy swoje} 8. Bxb5+ Qxb5 9. Nc3
(9. Qe2 Qxe2+ 10. Kxe2 Nc6 $11 {[%csl Rd4,Gf5,Rg4][%cal Ga8c8,Gg8e7,Ge7f5,
Gh7h5,Rg2g4,Gc6d4]}) 9... Qa6 {nie wolno pozwolic na roszade} 10. b4 $5 (10.
Ne2 Ne7 11. O-O Nec6 {drugi skoczek pojdzie na d7} 12. Nf4 Nd7 13. Nd3 Rc8 14.
Be3 Be7 15. Rc1 O-O {[%cal Gd7b6,Gb6c4,Gf7f6] czarne nie maja problemow}) 10...
Nd7 (10... Bxb4 $2 {nie jest dobre, bo} 11. axb4 Qxa1 12. Nb5 {[%csl Rc7,Rd6]
[%cal Gd1c2,Ge1g1,Gc1b2] i biale maja fantastyczny atak}) 11. Bd2 {[%cal Gb4b5]
} (11. b5 Qa5 12. Bd2 Qd8 {[%csl Rb5][%cal Gd7b6,Gb6c4,Gg8e7,Ge7f5,Gh7h5,Gf8e7,
Ga8c8] i pozniej skoczek przejdzie przez b6 na c4, wieza na c8, Se7-f5 itd})
11... Qd3 {uniemozliwia bialym roszade} 12. Qe2 (12. Qa4 a6) 12... Qxe2+ 13.
Kxe2 {rozi Sb5, wiec} a6 {[%cal Ga8c8,Gg8e7,Ge7c6,Gf8e7] i dalej Se7-c6, Wc8 i
czarne sa OK}) (6. Be2 cxd4 $1 7. cxd4 Bb5 8. Nc3 (8. O-O Bxe2 9. Qxe2 Qa6 10.
Qxa6 Nxa6 $11 {[%cal Ga6b4,Ga8c8,Ga6b8,Gb8c6,Gg8e7,Ge7f5]}) 8... Bxe2 9. Nxe2
Ne7 10. O-O Nec6 $1 {[%cal Gb8d7] drugi skoczek pojdzie na d7} (10... Nf5 $6 {
nie jest tu tak dobre, bo bialy skoczek jest juz na e2 i broni d4}) 11. Rb1 {
[%csl Rb4][%cal Gb8d7,Gb2b4] b4 jest idea} a5 $1 (11... Nd7 $2 12. b4 {czarne
sa pozbawione przestrzeni i nie moga bic na b4} Bxb4 $3 13. a3 $18) 12. Qd2 {
hetman chce isc na f4, albo g5, wiec sensowne jest} h6 {[%csl Rg5][%cal Rf3g5,
Rd2g5]} 13. h4 Nd7 14. Rd1 Qa6 15. a3 {[%cal Gb2b4] kolejny raz z idea b4, wiec
} a4 {[%cal Ra4b3] zeby moc zbic w przelocie} 16. Nc3 Na5 17. Qf4 Nb3 18. Nd2
Nxc1 19. Rbxc1 Be7 {czarne niemaja zadnych problemow} 20. Qg4 {mozna grac
ciekawe} g5 $1 (20... O-O $4 {tu nie dziala} 21. Nxd5 $1 exd5 22. Qxd7 $18) 21.
Nf3 Nb6 22. hxg5 hxg5 $13) 6... cxd4 $1 {zanim zagramy ..Gb5 musimy wtracic to
bicie.} (6... Bb5 $2 {od razu nie dziala, bo} 7. dxc5 Bxc5 8. b4 {i teraz nie
przechodzi} Bxf2+ 9. Ke2 {[%csl Rf2][%cal Gh1f1] i Wf1 i czarne traca gonca.})
7. cxd4 (7. Nxd4 Bc5 {[%cal Rb6g1] od razu atak po oslabionej przekatnej.} 8.
Qg4 (8. Bc2 $2 Nc6 $17 {[%csl Rd4,Rf2][%cal Rb6f2,Rb6b2] nacisk na d4 jest nie
do odparcia}) 8... Ne7 $1 (8... g6 $2 {[%csl Rd6,Re7,Rf6,Rg5,Rg7,Rh6] broni
piona, ale oslabia czarne pola, po ktorych wejdzie boialy goniec. Z zasady nie
chcemy grac g6 w obronie francuskiej, lepiej oddac piona.}) 9. O-O (9. Qxg7 {
jest krytyczne, ale po} Rg8 10. Qf6 (10. Qxh7 Bxd4 11. cxd4 Qxd4 {[%csl Re5]
[%cal Gb8c6] i ginie pion e5}) 10... Rxg2 11. Bxh7 Bxd4 12. cxd4 Qxd4 {[%csl
Rb2][%cal Rd4b2,Rd4f2,Gd7b5]} 13. Nc3 (13. Qh8+ $2 Ng8 $1 14. Bxg8 $4 Qxf2+ 15.
Kd1 Qe2#) 13... Qg4 14. h4 Qh5 15. Kf1 {czarne moga grac} Rg4 {[%csl Rh4]} 16.
f3 Rg3 17. Kf2 Rxf3+ 18. Qxf3 Qxh7 19. Bg5 Nbc6 {[%csl Re5][%cal Gh7c2,Ge8c8]
biale maja wieze za lekka figure i piona, ale ich pion e5 jest slaby, grozi
tez 0-0-0 i Wg8, albo Hc2} 20. Qf6 O-O-O 21. Rac1 {[%csl Rc2][%cal Gh7c2,Rc1c8]
} Kb8 22. b4 Re8 {Pozycja czarnych jest ok i nie dziala} 23. b5 $2 {bo} Nb4 {
[%csl Rc1,Re5,Rf2][%cal Gb4d3]}) 9... Ng6 {[%csl Re5][%cal Rg6e5]} 10. Nf3 Bb5
{w koncu pozbywamy sie bialopolaka} 11. Bxb5+ Qxb5 12. Nbd2 Nd7 {[%csl Re5]
[%cal Rg6e5,Rd7e5] czarne sa gotowe do 0-0 i Wac8, wiec biale powinny grac
energicznie} 13. c4 Qc6 $1 (13... dxc4 $2 14. Nxc4 {i bialy skoczek jest
aktywny, broni e5 i grozi czasami wejsciem na d6}) 14. b3 (14. cxd5 $4 Qxd5 {
[%csl Re5][%cal Rd5e5,Rd7e5,Rg6e5] ginie pion}) 14... Ndxe5 15. Nxe5 Nxe5 16.
Qxg7 Ng6 {wszystko sie broni} 17. Nf3 {[%cal Gf3e5,Rg7h8] grozi Se5} (17. cxd5
Qxd5 18. Nf3 O-O-O {i ryzykowne dla bialych jest} 19. Qxf7 $2 {bo} Rdf8 20. Qg7
Rxf3 $1 21. gxf3 Bd4 $19 {[%cal Rd4a1,Rd4g7]}) 17... Bf8 18. Qd4 dxc4 19. Bg5 {
[%csl Rd8][%cal Rg5d8] biale graja na aktywnosc} (19. Qxc4 Qxc4 20. bxc4 Rc8
$17) (19. bxc4 {pion c4 jest slaboscia}) 19... c3 20. Rad1 Be7 (20... c2 $4 21.
Qd8+ Rxd8 22. Rxd8#) 21. Qg7 (21. Bxe7 Kxe7 $15) 21... Bf8 22. Qd4 Be7 23. Qg7
{remis przez powtorzenie posuniec.}) 7... Bb5 8. O-O (8. Bxb5+ Qxb5 {biale
maja problem z roszada i chyba musza grac} 9. Nc3 Qa6 $1 {[%cal Ra6f1]} 10. Ne2
{ale skoczek nie stoi dobrze na e2.} (10. Qe2 Qxe2+ {[%csl Rd4][%cal Gb8c6,
Gg8e7,Ge7f5,Ga8c8,Ge8d7] i w takiej koncowce czarne sa ok, postawia skoczka na
c6, Wc8 i przejda drugim skoczkiem przez e7 na f5, zeby naciskac na d4}) 10...
Bb4+ {[%csl Rd4][%cal Gb8c6,Gg8e7,Ge7f5,Ga8c8] i Sc6, Wc8, Se7-f5 z typowa gra
dla tego wariantu}) 8... Bxd3 9. Qxd3 Qa6 $1 {[#] typowe. Biale raczej nie
chca wymieniac figur, bo maja wiecej przestrzeni a im mniej figur na
szachownicy, tym mniej wazna jest przestrzen.} 10. Qb3 (10. Qxa6 Nxa6 {[%csl
Rc2][%cal Ga8c8,Ga6b4] i Wc8, Se7-f5}) 10... Nc6 11. Nc3 {[%csl Rd6][%cal
Gc3b5] z idea Sb5} Bb4 {[%csl Rb5][%cal Rc3b5]} 12. a4 {[%cal Gc3b5] ponawia
grozbe Sb5, wiec czarne musza grac} (12. Na4 {biale unikaja wymiany na c3} b5
13. Nc5 Bxc5 14. dxc5 Nge7 $11 {[%csl Re5][%cal Ge7g6] z dynamicznie rowna
pozycja}) 12... Bxc3 $1 13. bxc3 {[%csl Rc3] pion c3 jest odstalym slabym pion.
} (13. Qxc3 Rc8 {i hetman nie czuje sie na c3 komfortowo}) 13... Na5 $1 {
[%cal Ga5c4,Ga8c8] walka o pole c4, zeby biale nie mogly pozbyc sie piona
przez c4} 14. Qc2 Nc4 15. Nd2 (15. Ba3 $2 Nxa3 16. Rxa3 Ne7 17. Rb1 Rc8 18. Rb5
Rc7 19. h4 {[%cal Gf3g5,Rc2h7] jesli czarne teraz zroszuja, to biale licza na
Sg5 z atakiem} h6 $1 {[%csl Rg5] odbiera g5 skoczkowi} 20. Qd3 O-O $15 {
[%csl Rc4][%cal Gf8c8,Ge7f5,Ge7c6,Gc6a5,Ga5c4] i Wfc8 z naciskiem na piona c})
15... Ne7 {[%cal Ga8c8,Ga6c4,Ge7f5,Ge7c6,Gc6a5,Ga5c4] i Wc8. W przypadku Sxc4
odbijamy hetmanem} *

`}
    </PGN>
  )
}

export default Game;
