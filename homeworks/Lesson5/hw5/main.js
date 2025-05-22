// task 5-1 #I2XsG6f //
{
let squareSquare= (a,b)=> a*b;
console.log(squareSquare(5,5));
}
// task 5-2 #ETGAxbEn8l //
{
    console.log('');
    let squareCircle = (radius) => Math.PI *radius*radius;
    console.log(squareCircle(12));
}
// task 5-3 #Mbiz5K4yFe7 //
{
    console.log('');
    let squareCilinder=(height, radius)=>2*Math.PI*radius*(height+radius);
    console.log(squareCilinder(34,30));
}
// task 5-4 #SIdMd0hQ //
{
    console.log('');
    let arrayElementShower=(array,i)=>{
        console.log(array[i]);
        i++;
        if(i<array.length){
            arrayElementShower(array,i);
        }
        return '';
    }
    console.log(arrayElementShower([1,2,3,4,5,6,75,8,9,106],0));
}
// task 5-5 #59g0IsA //
{
let paragrafCreator=(text)=>{
    document.write(`<p>${text}</p>`)
}
paragrafCreator('hell yea')
}
// task 5-6 #hOL6126 //
{
    let listCreator=(text)=>{
        document.write(`<ul>
                         <li>${text}</li>
                         <li>${text}</li>
                         <li>${text}</li>
                      </ul>`)
    }
    listCreator('Emperor win')
}
// task 5-7 #0Kxco1edSN //
{

}
