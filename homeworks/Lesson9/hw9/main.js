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
// task 9-5 //
{
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
    const coursesInfoDiv=document.createElement('div');
   let  coursesInfo=(array,objeckt)=>{
        for(let course of array){
            const courseTitle=document.createElement('div');
            courseTitle.innerHTML=`<h1>${course.title}</h1>`;

            const courseDuration=document.createElement('div');
            courseDuration.innerHTML=`<p>${course.monthDuration}</p>`;

            const courseHourDuration=document.createElement('div');
            courseHourDuration.innerHTML=`<p>${course.hourDuration}</p>`;
            const modulesDiv=document.createElement('div');
            const modulsList=document.createElement('ul');

            for(let key in course){
                if(Array.isArray(course[key])){
                    for(let item of course[key]){

                            if (item !== 'html' && item !== 'css' && item !== 'js') {
                                const modulsLi = document.createElement('li');
                                modulsLi.innerText = item;
                                modulsList.appendChild(modulsLi);
                                modulesDiv.appendChild(modulsList);
                            } else {
                            const modulesItemDiv = document.createElement('div');
                            modulesItemDiv.innerText = item;
                            modulesDiv.appendChild(modulesItemDiv);
                        }
                    }
                }
            }
            const courseDiv=document.createElement('div');
            courseDiv.append(courseTitle,courseDuration,courseHourDuration,modulesDiv)
            objeckt.appendChild(courseDiv);
        }
}
    document.body.appendChild(coursesInfoDiv);
coursesInfo(coursesArray,coursesInfoDiv);


}
