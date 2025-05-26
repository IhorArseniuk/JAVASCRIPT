// task 6-1 #dFeorS3m7u //
{
    function length (item,index){
        return index(item)
    }
    length('hello world',(item)=>{console.log(item.length)});
    length('lorem ipsum',(item)=>console.log(item.length));
    length('javascript is cool',(item)=>console.log(item.length));

    let strings=['hello world','lorem ipsum','javascript is cool'];
    for(let string of strings){
        console.log(string.length);
    }
}
// task 6-2 #8lld9HMxXWB //
{
    console.log('');
    let strings=['hello okten', 'lorem ipsum','javascript is cool'];
    for(let string of strings){
        console.log(string.toUpperCase())
    }

     function toUpperCasez(string, toUpperCase){
        return toUpperCase(string)
     }
    toUpperCasez(strings,(string)=>{for(let i of string){console.log(i.toUpperCase())}})
}
// task 6-3 #ClDsAm7xba7 //
{
    console.log('');
    let strings=['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
    for(let string of strings){
        console.log(string.toLowerCase())
    }

    function toLowerCasez(string, toLowerCase){
        return toLowerCase(string)
    }
    toLowerCasez(strings,(string)=>{for(let i of string){console.log(i.toLowerCase())}})
}
