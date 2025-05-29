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
let listCreatorAndShower=( quantity, text)=>{
    document.write(`<ul>
                        <li>${text}</li>
                         `)
        for( let i=0;i<quantity; i++){
            document.write(`<li>${text}</li>`)
        }
        document.write(`</ul>`)
return listCreatorAndShower;}

listCreatorAndShower(5,'FAFA')
}
// task 5-8 #gEFoxMMO //
{
    let arrayBuilder=(array,item)=>{document.write(`<ul>`);
        if(item<array.length){
            document.write(`<li>${array[item]}</li>`)
            item++;
            arrayBuilder(array,item);
        }
    document.write(`</ul>`);}
    arrayBuilder([1,2,true, 'roma', 'gigo',8,10, 'mayo','sriracha'],0);
}
// task 5-9 #bovDJDTIjt //
{
    let userFabric=(array,user)=>{
        if(user<array.length){
            document.write(`
                          <div class="user">
                            <h1>${array[user].id}</h1>
                            <h2>${array[user].name}</h2>
                            <h2>${array[user].age}</h2>
                           </div>`)
            user++;
            userFabric(array,user);
        }
        return array;
    }
    userFabric([{id: 1, name: 'vasya', age: 31}, {id: 2, name: 'petya', age: 30}, {id: 3, name: 'kolya', age: 29}],0);
}
// task 5-10 #pghbnSB //
{
    let minNumberOfArray=(array)=>{
        let min=0;
        for(let item of array){
            if(item<min){
                min=item;
            }
        }
        return min;
    }
  console.log(  minNumberOfArray([12, 23, 45, 67, 89, -100, 111, 123, 145, 200]));
}
// task 5-11 #EKRNVPM //
{
    console.log('');
    let sumOfArray=(array)=>{
        let sum=0;
        for(let i=0;i<array.length;i++){
            sum+=array[i];
        }
        return console.log(sum);
    }
    sumOfArray([1,2,3,4,5,6,75,8,9,106]);
}
// task 5-12 #kpsbSQCt2Lf //
{
    console.log('');
    let swapNumbers=(array,index1,index2)=>{
        let value1=array[index1];
        array[index1]=array[index2];
        array[index2]=value1;
        return console.log(array);
}
swapNumbers([1,2,3,4,5,6,75,8,9,106],3,6);
}
// task 5-12 #mkGDenYnNjn //
{debugger;
    console.log('');
    let exhange=(sumUa,currentValue,exhangeValue) =>{
        for(let i of currentValue){
        if(i.currency===exhangeValue){
            chosenCurrency=i
        }} return console.log(sumUa/chosenCurrency.value+chosenCurrency.currency);}
    exhange(100000,[{currency:'USD',value:25},{currency:'EUR',value:43},{currency:'JPY',value:0.24}],'JPY');
}
