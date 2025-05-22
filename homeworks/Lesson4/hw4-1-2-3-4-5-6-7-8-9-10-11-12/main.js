// task 4-1 #I2XsG6f //
{function S (a,b){
    return a*b;
}
let a= S(10,34)
console.log(a);}

// task 4-2 #ETGAxbEn8l //
{
    console.log('');
{
    function  Scircl (radius){
        let pi=3.14;
        return pi*radius*radius
    }
}
let circl = Scircl(34);
console.log(circl);
}

// task 4-3 #Mbiz5K4yFe7 //
{
    console.log('');
function Scylinder (r,h){
    return  2*3.14*r*(h + r);
}
let cylinder  = Scylinder(45, 80)
    console.log(cylinder);
}
// task 4-4 #SIdMd0hQ //
{
    console.log('');
    function ShowArray(array){
        for(let i of array){
            console.log(i)
        }
        return array;
    }
    let rivo = [1,2,3,4,5,6,75,8,9,106];
    ShowArray(rivo);
}
// task 4-5 #SIdMd0hQ //
{
    function writeP (array){
        return document.write(`<p>${array}</p>`);

    }
    let hello = 'hello';
     writeP (hello)
}
// task 4-6 #hOL6126 //
{
   /* function writer (){
        return document.write(`<ul>
                                 <li>${arguments[0]}</li>
                                 <li>${arguments[1]}</li>
                                 <li>${arguments[2]}</li>
                              </ul>`)
    }
    let text =writer('one', 'two', 'three');*/
    function writer (text){
        return document.write(`<ul>
                                 <li>${text}</li>
                                 <li>${text}</li>
                                 <li>${text}</li>
                              </ul>`)
    }
    let text =writer('one');
}
// task 4-7 #0Kxco1edSN //
{
  function listWriter(text, count){
      document.write(`<ul>`);
      for (let i=0;i<count;i++){
          document.write (`<li>${text}</li>`)
      }
      document.write(`</ul>`)
  }
  listWriter('miracle', 6)
}
// task 4-8 #gEFoxMMO //
{
    function arrayRebuilder(array){
        document.write(`<ul>`);
        for(let i of array){
            document.write(`<li>${[i]}</li>`)
        }
        document.write(`</ul>`);
    }
    let array = [1,2,true, 'roma', 'gigo',8,10, 'mayo','sriracha'];
    arrayRebuilder(array);
}
// task 4-9 #bovDJDTIjt //
{
    function usersFabric(array){
        document.write(`<div class="user-box">`)
        for(let i of array){
            document.write(`<div class="user">
                            <div class="user-key">${i.id}</div>
                            <div class="user-key">${i.name}</div>
                            <div class="user-key">${i.age}</div>
                                      </div>`)}
        document.write(`</div>`)
    }
    let users =[
        {id: 1, name: 'vasya', age: 31},
        {id: 2, name: 'petya', age: 30},
        {id: 3, name: 'kolya', age: 29},
        {id: 4, name: 'olya', age: 28}
    ]
    usersFabric(users);
    /*usersFabric([
        {id: 10, name: 'vasya', age: 90},
        {id: 11, name: 'oleg', age: 99},
        {id: 12, name: 'max', age: 123},
    ])*/
}
// task 4-9 #pghbnSB //
{
    console.log('');
    function arrayMinNumber(array){
        let min=0;
        for(let i =1;i<array.length;i++){
            let number = array[i]
            if(number<min){
                min=number;
            }
        }
        return min;
    }
    console.log(arrayMinNumber([5,6,8,10,11,-23,56,78,90,123,456,789]));
let numbers =[3,7,8,90,10,-125,11,45.8,4.8,123,456,789];
    console.log(arrayMinNumber(numbers));
}
// task 4-10 #EKRNVPM //
{
    console.log('');
    function arrayNumbersSum(array){
        let sum=0;
        for(let i=0;i<array.length;i++){
            sum+=array[i];
        }
        return sum;
    }
    let numbers =[3,7,8,90,10,-125,11,45.8,4.8,123,456,789];
    console.log(arrayNumbersSum(numbers));
    console.log(arrayNumbersSum([13,14,16,78,90,88,56,34,12.22]));
}
// task 4-11 #kpsbSQCt2Lf //
{
    console.log('');
    function arraySwapElements(array,index1,index2){
       let value1=array[index1];
       array[index1]=array[index2];
       array[index2]=value1;

       return array;
    }
    console.log(arraySwapElements( [12,34,5,6,7,76,89,12,],0,5))
}
// task 4-12 #mkGDenYnNjn //
{
    console.log('');
// 1
    /*function exchange(sumUa,currencyValues,exchangeCurrency){
    let exchangeCurrenc =exchangeCurrency;
    let currencyValue=currencyValues;
    let sumaUa=sumUa;
    let exhangedSum=0;
    currencyValue=[{currency:'USD',value:25},{currency:'EUR',value:43}];
    for(let i of currencyValue){
    if(currencyValue[0].currency===exchangeCurrenc){
        exhangedSum=sumaUa/currencyValue[0].value+currencyValue[0].currency;
    }else if(currencyValue[1].currency===exchangeCurrenc){
        exhangedSum=sumaUa/currencyValue[1].value+currencyValue[1].currency;
        }else{
        console.log('error')
        }}
    return exhangedSum
}*/
// 2
   /* function exchange(sumUa,currencyValues,exchangeCurrency){
        let exhangedSum=0;
      let  currencyValue= currencyValues=[{currency:'USD',value:25},{currency:'EUR',value:43},{currency:'JPY',value:0.24}];
        for(let i of currencyValue){
            if(i.currency===exchangeCurrency){
                exhangedSum=sumUa/i.value+i.currency;
            }}
        return exhangedSum
    }*/
//3
function exchange(sumUa,currencyValues,exchangeCurrency){
    let currentChosen;
    for(let i of currencyValues){
        if(i.currency===exchangeCurrency){
            currentChosen=i;
        }
    }
    return sumUa/currentChosen.value+currentChosen.currency;
}
console.log(exchange(100000,[{currency:'USD',value:25},{currency:'EUR',value:43},{currency:'JPY',value:0.24}],'JPY'));
}
