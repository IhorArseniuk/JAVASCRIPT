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
    function writer (){
        return document.write(`<ul>
                                 <li>${arguments[0]}</li>
                                 <li>${arguments[1]}</li>
                                 <li>${arguments[2]}</li>
                              </ul>`)
    }
    let text =writer('one', 'two', 'three');
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
