// task 7-1 #XjJuucOMR0 //
{
    function User (id,name,surname, email,phone,array){
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        array.push(this)
    }
    let users=[];
    new User(1,'Ihor','Ivanov','<EMAIL>','+380991234567',users);
    new User(2,'Ivan','Petrov','<EMAIL>','+380991234567',users);
    console.log(users);
}
