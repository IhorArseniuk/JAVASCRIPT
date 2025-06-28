// task 9-1 #8Nmt60ZT //
{
    let div=document.createElement('div');
    div.classList.add('wrap','collapse', 'alpha', 'beta');
    div.innerText='HI try div'
    document.body.appendChild(div);

    let copyDiv=div.cloneNode(true);
    copyDiv.classList.toggle('exclusive')
    document.body.appendChild(copyDiv);
}
// task 9-2 #OPLI89c9G //
{
    let nav=['Main','Products','About us','Contacts'];
    let menu=document.createElement('ul');
    for(let item=0;item<nav.length;item++){
        let option=document.createElement('li');
        option.innerText=nav[item];
        menu.appendChild(option)
    }
    document.body.appendChild(menu);
}
// task 9-3 #jeBqHV525U5 //
{
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
let coursesDiv=document.createElement('div');
/*coursesDiv.classList.add('courses-container');
for(let cours of coursesAndDurationArray ){
    const coursDiv=document.createElement('div');
    coursDiv.classList.add('course')
        const coursName=document.createElement('h2');
        coursName.innerText=cours.title;
        const coursDuration=document.createElement('p');
        coursDuration.innerText=cours.monthDuration;
        coursDiv.append(coursName,coursDuration);

    coursesDiv.appendChild(coursDiv);
}*/
    for(let cours of coursesAndDurationArray){
        const course=document.createElement('div');
        course.innerText=`${cours.title} ${cours.monthDuration}`
        coursesDiv.appendChild(course);
    }
document.body.appendChild(coursesDiv);
}
// task 9-4 #Kx1xgoKy8 //
{
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    let courses=document.createElement('div');
    courses.className = 'courses-container';
    for(let course of coursesAndDurationArray){
        const cour=document.createElement('div');
        cour.classList.add('item');

        const courseTitle=document.createElement('h2');
        courseTitle.innerText=course.title;
        courseTitle.classList.add('heading');

        const courseDuration=document.createElement('p');
        courseDuration.innerText=course.monthDuration;
        courseDuration.classList.add('description')

        cour.append(courseTitle,courseDuration);
        courses.appendChild(cour)
    }
    document.body.appendChild(courses);
}
