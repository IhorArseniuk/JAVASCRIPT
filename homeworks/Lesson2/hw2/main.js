// task 2-1 #67kfznmiMl //
{let card=[123,'Tito',true,13.4,1245,'Litvin',145,{firstname:'Ivanovich'}, {age:18}, {gender:'man'} ];
console.log(card[0]);
console.log(card[1]);
console.log(card[2]);
console.log(card[3]);
console.log(card[4]);
console.log(card[5]);
console.log(card[6]);
console.log(card[7]);
console.log(card[8]);
console.log(card[9]);}
// task 2-2 #LARqoUj5I //
{
let book1={
    title:'Green Mile',
    pageCount:123,
    genre:'Drama'
}
    let book2={
        title:'Effect Lucifer',
        pageCount:309,
        genre:'Psychological'
    }
    let book3={
        title:'Weel Of Time',
        pageCount:576,
        genre:'Fantasy'
    }
}
// task 2-3 #sA3Gg1sCp//
{
    let bookOdisea={
        title:'Odisea',
        pageCount:222,
        genre:'Drama',
        authors:[{name: 'Gomer', age:21}, {name:'Ofelio', age:22}]
}
let bookFawn={
        title:'Fawn',
        pageCount:222,
        genre:'Drama',
    authors:[{name:'Roberto',age:44},{name:'Filirino',age:55}]
}
let bookHarryPother={
        title:'Harry Potter',
        pageCount:123,
        genre:'Fantasy',
        authors:[{name:'Joane',age:67},{name:'Jane',age:78}]
}
}
// task 2-4 #jCHFnEbdmFd //
{
let users=[
    { name:'Ihor', username:'IA', password:'man1' },
    {name:'b', username:'b',password:'b1'},
    {name:'c', username:'c',password:'c1'},
    {name:'f', username:'f',password:'f1'},
    {name:'g', username:'g', password:'g1'},
    {name:'h1', username:'h1', password:'h1'},
    {name:'r', username:'r', password:'r1'},
    {name:'s', username:'s', password:'s1'},
    {name:'t',username:'t',password:'t1'},
    {name:'u', username:'u', password:'u1'},
]
    console.log(users[7]);
}
// task 2-5 #coYydZuaeEB //
{
let monday= {morning:+10,afternoon:+15, evening:+7};
let tuesday={morning: +12,afternoon:+17,evening:+10};
let wednesday={morning:+13,afternoon:+18,evening:+7};
let thursday={morning:+9,afternoon:+19,evening:+5};
let friday={morning:+7,afternoon:+13,evening:+6};
let saturday={morning:+9,afternoon:+17,evening:+10};
let sunday={morning:+3, afternoon:+11,evening:+12};
let weekWeather=[
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
];
    console.log(weekWeather[5])
}
// task 2-6 #bAUsaq6LI //
{
    let x=+-3;
    if(x!==0){
        console.log(value='Вірно')
    }else{
        console.log(value='Невірно')
    }
}
// task 2-7 #3ckURgvs //
{
    let time = 55;
    if (time >= 0 && time < 15) {
        console.log('1/4 quarter')
    } else if (time >= 15 && time < 30) {
        console.log('2/4 quarter')
    } else if (time >= 30 && time < 45) {
        console.log('3/4 quarter')
    } else if (time >= 45 && time < 60) {
        console.log('4/4 quarter')
    }
}
// task 2-8 #UMoNq4biWGe //
{
    let day= 31;
    if (day>=1 && day<=10) {
        console.log('1 decade')
    }else if (day>=11 && day<=21){
        console.log(' 2 decade')
    }else if(day>=22 && day<=31){
        console.log('3 decade')
    }
}
// task 2-9 #KzrtqyQ //
{
    //let monday='Monday';
    //let tuesday='Tuesday';
    //let wednesday='Wednesday';
    //let thursday='Thursday';
    //let friday='Friday';
    //let saturday='Saturday';
    //let sunday='Sunday';
    let week=[{id:1,name:'monday'}, {id:2,name:'tuesday'},{id:3, name:'wednesday'},{id:4, name:'thursday'},{id:5,name:'friday'},{id:6,name:'saturday'},{id:7,name:'sunday'}]
    let dayDate=+prompt('Write the day of the week');
    //switch(dayDate){
    //    case 1:
    //        console.log(monday);
    //        break
    //    case 2:
    //        console.log(tuesday);
    //        break
    //    case 3:
    //        console.log(wednesday);
    //        break
    //    case 4:
    //        console.log(thursday);
    //        break
    //    case 5:
    //        console.log(friday);
    //        break
    //    case 6:
    //        console.log(saturday);
    //        break
    //    case 7:
    //        console.log(sunday);
    //        break
    //     default:
    //         console.log('Error')
    //}
    switch(dayDate){
        case 1:
            console.log(week[0]);
            break
        case 2:
            console.log(week[1]);
            break
        case 3:
            console.log(week[2]);
            break
        case 4:
            console.log(week[3]);
            break
        case 5:
            console.log(week[4]);
            break
        case 6:
            console.log(week[5]);
            break
        case 7:
            console.log(week[6]);
            break
        default:
            console.log('Error')
    }
}
// task 2-10 #uwsz1RnTQJ1 //
{
    let userNum1=6;
    let userNum2=12;
    if (userNum1>userNum2){
        console.log(userNum1)
    }else if( userNum2>userNum1){
        console.log(userNum2)
    }else if(userNum1===userNum1){
        console.log('===')
    }
}
// task 2-11 #iBvqtjEm //
{
    let x=0;
    if(x === null || x === 0 || x===undefined || x===NaN || x===false || x ===''){
        x='default'
        console.log(x)}
    let y=0;
    if(! y){
        y='default'
        console.log(y)
    }
}
// task 2-12 #awLXL6TBzg //
{
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    if(coursesAndDurationArray [0]['monthDuration']>5){
        console.log('Супер')
        console.log(coursesAndDurationArray)
    }if(coursesAndDurationArray[1]['monthDuration']>5){
    console.log('Супер')
} if(coursesAndDurationArray[2]['monthDuration']>5){
    console.log('Супер')
} if(coursesAndDurationArray[3]['monthDuration']>5){
    console.log('Супер')
} if(coursesAndDurationArray[4]['monthDuration']>5){
    console.log('Супер')
} if(coursesAndDurationArray[5]['monthDuration']>5){
    console.log('Супер')
}
}
