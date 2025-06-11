//  task 8-1 #iz6emEsP2BA //
{
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4},
    ];
    //console.log(coursesAndDurationArray.map(function(value, index){return {id:index+1, ...value  }}))
    console.log(coursesAndDurationArray.map((value, index)=>{return {id:index+1,...value}}));


// task 8-2 #AiN5CoUQ //

   function copyDeep(object){
       if(object){
           let functions=[];
           for(let key in object){
               if(typeof(object[key])==='function'){
                const functionClone=object[key].bind({})
                   functions.push({functionClone,key});
               }
           }
           let copy =JSON.parse(JSON.stringify(object));
          for(let func of functions){
              copy[func.key]=func.functionClone
          }
           return copy;
       }else return 'try again'
    }
    const user=copyDeep({
        name:'Brian',
        age:40,
        nationality:'Ukrainian',
        greeting(){console.log `Hello`}
    })
   console.log(user);


}
