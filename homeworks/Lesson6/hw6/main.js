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
// task 6-4 #0b89BkYZwu //
console.log('');
{
    let str = ' dirty string   ';
    console.log(str.trim());
}
// task 6-5 #bfoJuse4ZzP //
{
    console.log('');
    let str = 'Чому ревуть воли як ясла повні';
   let stringToarray=(str)=>{
      if(str){
       str=str.split(' ');
       return str}
      return ['']
   }
   console.log(stringToarray(str))

}
// task 6-6 #Rbr5kEQ //
{
    console.log('');
    let nums = [10,8,-7,55,987,-1011,0,1050,0];
    let mappededNums = nums.map(function(value){
        return value+'';
    })
    console.log(mappededNums);

}
// task 6-7 #5hqyKTfmc //
{
    console.log('');
    let nums = [11,21,3];
    let sortNums=(array,direction)=>{
            if(direction==='ascending'){
                return(array.sort((a,b) => a-b))
            }
            else if(direction==='descending'){
              return(  array.sort((a,b)=>b-a))
            }
            else{return 'Error'}
        }
    console.log(sortNums(nums ,'descending'));
}
// task 6-8 #yo06d74c1C //
{
    console.log('');
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    let mappedCourses=coursesAndDurationArray.sort((a,b) =>b.monthDuration-a.monthDuration)
    .filter((a)=>a.monthDuration>5)
    .map((value,index)=>{
           value.id=index+1
           return value;
    });
    console.log(mappedCourses);
}
// task 6-9 #4LJn7zBx //
{
    console.log('');
    let coursesArray = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];
//let searchSassInCourses=(array)=>{return  array.forEach((value)=>{if(value.modules.includes('sass')){
//    console.log(value)}})}
//    searchSassInCourses(coursesArray);
//console.log('');
//let searchDockerInCourses=(array)=>{return array.forEach((value)=>{if(value.modules.includes('docker'))
//{console.log(value);}
//})}
//    searchDockerInCourses(coursesArray);
    console.log(coursesArray.filter((value)=>{return value.modules.includes('sass')}))
    console.log(coursesArray.filter((value)=>{return value.modules.includes('docker')}))
}
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
    cards('diamond');
    cards('spade');
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
