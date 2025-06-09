//  task 8-1 #iz6emEsP2BA //
{
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    //console.log(coursesAndDurationArray.map(function(value, index){return {id:index+1, ...value  }}))
    //console.log(coursesAndDurationArray.map((value, index)=>{return {id:index+1,...value}}));

}
// task 8-2 #AiN5CoUQ //
{
   function copyDeep(object){
       if(object){
        JSON.stringify(object)
       }else if(null||undefined|| NaN){
       console.log('try again')}
   }
}
