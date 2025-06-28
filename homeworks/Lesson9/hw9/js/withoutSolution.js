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
    const coursesDiv=document.createElement('div');
    coursesDiv.className = 'courses-box';
    let  coursesInfo=(array,objeckt)=>{
        for(let course of array){
            const courseTitle=document.createElement('div');
            courseTitle.innerHTML=`<h1>${course.title}</h1>`;
            courseTitle.className='course-title';

            const courseDuration=document.createElement('div');
            courseDuration.innerHTML=`<p class="month-duration">${course.monthDuration}</p>`;

            const courseHourDuration=document.createElement('div');
            courseHourDuration.innerHTML=`<p>${course.hourDuration}</p>`;
            const modulesDiv=document.createElement('div');
            modulesDiv.className = 'modules-container';
            const modulsList=document.createElement('ul');
            modulsList.className='course-ul';
            for(let key in course){
                if(Array.isArray(course[key])){
                    for(let item of course[key]){
                        if (item !== 'html' && item !== 'css' && item !== 'js') {
                            const modulsLi = document.createElement('li');
                            modulsLi.className='modules-li';
                            modulsLi.innerText = item;
                            modulsList.appendChild(modulsLi);
                            modulesDiv.appendChild(modulsList);
                        } else {
                            const modulesItemDiv = document.createElement('div');
                            modulesItemDiv.className='modules-item-div';
                            modulesItemDiv.innerText = item;
                            modulesDiv.appendChild(modulesItemDiv);
                        }
                    }
                }
            }
            const courseHourAndMonthDiv = document.createElement('div');
            courseHourAndMonthDiv.append(courseDuration,courseHourDuration);
            courseHourAndMonthDiv.className='course-month-hour-duration';
            const courseDiv=document.createElement('div');
            courseDiv.className='course-info'
            courseDiv.append(courseTitle,courseHourAndMonthDiv,modulesDiv)
            objeckt.appendChild(courseDiv);
        }
    }
    document.body.appendChild(coursesDiv);
    coursesInfo(coursesArray,coursesDiv);
}
