// task 6-10 #bolvdlhP //
{
    console.log('');
    let cardsHolder=[];
    let cards=(suit)=>{
        if(suit==='heart'||suit==='diamond'){
            color='red'
        }else if(suit==='spade'||suit==='club'){
            color='black'
        }else{ return 'Try again'}
        let suits=   [   {  cardSuit:suit, value: 6, color: color},
            {  cardSuit:suit, value: 7, color: color},
            {  cardSuit:suit, value: 8, color: color},
            {  cardSuit:suit, value: 9, color: color},
            {  cardSuit:suit, value: 10, color:color},
            {  cardSuit:suit, value: 'jack', color:color},
            {  cardSuit:suit, value: 'queen', color:color},
            {  cardSuit:suit, value: 'king', color:color},
            {  cardSuit:suit, value: 'ace', color: color}]
        cardsHolder.push(...suits)}
    cards('heart',);
    cards('spade');
    cards('diamond');
    cards('club');
    console.log(cardsHolder);
    console.log(cardsHolder.find((item)=>{return item.cardSuit==='spade'&& item.value==='ace';}));
    console.log(cardsHolder.filter(value=> value.value===6))
    console.log(cardsHolder.filter(value=> value.color==='red'))
    console.log(cardsHolder.filter(value=>value.cardSuit==='diamond'))
    console.log(cardsHolder.filter((value)=>{return value.cardSuit==='club'&& value.value!==6&& value.value!==7&& value.value!==8&& value.value!==9 }))


// task 6-11 #EP5I1UUzAX //

    console.log('');
const redusedCards=cardsHolder.reduce((accumulator,value)=>{
        if(value.cardSuit==='heart'){
            accumulator.heart.push(value);
        }else if(value.cardSuit==='diamond'){
            accumulator.diamond.push(value);
        }else if(value.cardSuit==='spade'){
            accumulator.spade.push(value);
        }else if(value.cardSuit==='club'){
            accumulator.club.push(value);
        }return accumulator;},
    {heart:[], diamond:[],spade:[] , club:[],});
console.log(redusedCards);
}
