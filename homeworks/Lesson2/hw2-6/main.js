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
