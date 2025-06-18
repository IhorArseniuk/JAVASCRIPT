// task 10-1 #sH8c4er //
{
let div=document.getElementById('text');
const button=document.querySelector('button')
    //document.getElementByTagName('button')[0]
    button.onclick=function(){
    div.setAttribute('id','text');
    div.style.backgroundColor='rgb(123,45,45)';
    div.style.color='rgb(123,67,89,0.00)';
    console.log('click');
}
}
// task 10-2 #j693ca8 //
{
    let f1=document.getElementById('age-form');
    f1.onsubmit=function(ev){
        ev.preventDefault();
    }
let ageBtn=document.getElementById('age-butn')
    ageBtn.addEventListener('click',function(){
    const ageInput=document.getElementById('age-input');
    if(ageInput.value!==''){
        if(ageInput.value<18){
            alert('You to young')
    }}
    })
}
// task 10-3 #ymAmN2xJ //
{
let formUser=document.forms.userForm;
formUser.addEventListener('submit',(event)=>{
    event.preventDefault();
})

    formUser.addEventListener('submit',function(){
    const div=document.createElement('div');
    div.className='user-info';

   /* const nameH2=document.createElement('h2');
    nameH2.innerText=formUser.name.value;

    const surnameH2=document.createElement('h2');
    surnameH2.innerText=formUser.surname.value;

    const ageP=document.createElement('p');
    ageP.innerText=formUser.age.value;

    div.append(nameH2,surnameH2,ageP);*/

        const userName=formUser.name.value;
        const userSurname=formUser.surname.value;
        const userAge=formUser.age.value;
        let user={userName,userSurname,userAge};
        console.log(user);
        div.innerText=`${userName} ${userSurname} ${userAge}`;
    document.body.appendChild(div);
})
}
// task 10-4 #2VaLt4vDczH //
{
let currentNumber= +localStorage.getItem('number');
currentNumber +=1;
localStorage.setItem('number',currentNumber);
document.getElementById('numberdiv').innerText=currentNumber;
}
// task 10-5 #LhSfdhM3 //
{
    let date=new Date();
    let hour=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();
    let time=`${hour}${minute}${second}`
     localStorage.setItem('sesionsList',date, time);

}

