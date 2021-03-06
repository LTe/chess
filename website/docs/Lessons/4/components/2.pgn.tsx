
import React from 'react'
import PGN from '../../../../src/components/PGN'

function Game() {
  return (
    <PGN>
        {`﻿[Event "?"]
[Site "?"]
[Date "2021.02.10"]
[Round "?"]
[White "Enter New Game"]
[Black "?"]
[Result "*"]
[ECO "C50"]
[Annotator "Marcin"]
[PlyCount "11"]
[SourceVersionDate "2021.02.10"]


{Ten plik omawia podstawowe zasady gry w debiucie.} 1. e4 {zawsze staramy sie
wstawic piona do centrum. Jesli przeciwnik nam pozwoli, to wstawimy do centrum
2 piony} e5 {czarne tez wstawiaja piona do centrum} (1... g6 {umozliwia bialym
zabranie calego centrum} 2. d4 $1) (1... e6 {jesli przeciwnik idzie pionem o
jedno pole, to my zawsze o 2} 2. d4 $1) (1... b6 2. d4) (1... a6 $2 2. d4 h6 $2
3. Nc3 g6 4. Nf3 b6 5. Bc4 {[%csl Rf7][%cal Gf3e5,Gc4f7,Ge5f7,Gd1f3] i widzimy,
ze czarne zlamaly zasady, nie wyprowadzily figur i nie zajely centrum i dalo
to bialym ogromna przewage}) 2. Nf3 {[%cal Gf3d4,Gf3e5] najlepsze pole dla
skoczka bo atakuje e5 i d4} Nc6 {skoczek broni piona i kontroluje d4} (2... d6
{nie jest dobre, bo nie wyprowadza figury i biale moga grac} 3. d4 {[%cal
Gf3d4] z gra w centrum}) 3. Bc4 {[%csl Rf7][%cal Gc4d5,Rc4f7] goniec atakuje
pole d5 i f7- najslabsze pole w obozie czarnych} Bc5 {[%cal Gc5d4,Rc5f2]} (3...
Nf6 {[%csl Re4]} 4. d3 {i roszada i wyprowadzamy kolejne figury}) 4. O-O {
[%cal Gf1f2] [#] teraz bialy krol jest bezpieczny za pionami, wieza natomiast
broni f2. Biale wyprowadza jeszcze skoczka i Gc1i otworza centrum} Nf6 {
[%cal Rf6e4] skoczek atakuje piona, wiec gramy} 5. d3 {co umozliwia tez
wyprowadzenie gonca} O-O 6. Bg5 {[%cal Gb1d2,Gc2c3,Gd3d4] i Sc3} *

`}
    </PGN>
  )
}

export default Game;
