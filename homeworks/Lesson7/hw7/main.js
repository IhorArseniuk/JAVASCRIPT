// task 7-1 #XjJuucOMR0 //
{
  /* 1)  function User (id,name,surname, email,phone,array){
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
    new User(3, 'Adam', 'Gienov','<EMAIL>','+380991234567',users);
    new User(4,'Misha','Lionov','<EMAIL>','+380991234567',users);
    new User(5, 'olia', 'Mikolivka','<EMAIL>','+380991234567',users);
    new User(6,'Illia','Maryland','<EMAIL>','+380991234567',users);
    new User(7 ,'jeremy','Novinkovski','<EMAIL>','+380991234567',users);
    new User(8,'Roman','Konotopskiy','<EMAIL>','+380991234567',users);
    new User(9,'Nastya','Slobodian','<EMAIL>','+380991234567',users);
    new User(10, 'Alina','Slobodian','<EMAIL>','+380991234567',users);
    console.log(users);*/

    function User(id, name, surname, email,phone){
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
    }
    let users=[
        new User(198,'Kernes','Migdalovich','buymeacoffe.@gmail.com','+360465789678'),
        new User(2234,'Bogdan','Dzdanov','buymeacakeffe.@gmail.com','+360465789678'),
        new User(3977,'Dina','Linovka','buymeacoffe.@gmail.com','+360465789678'),
        new User(42,'Hilary','Klinton','buymeacoffe.@gmail.com','+360465789678'),
        new User(521,'Barak','Jonson','buymeacoffe.@gmail.com','+360465789678'),
        new User(6,'Maria','Lucia','buymeacoffe.@gmail.com','+360465789678'),
        new User(72,'Nicolle','Birkovka','buymeacoffe.@gmail.com','+360465789678'),
        new User(855,'Mazola','Mihran','buymeacoffe.@gmail.com','+360465789678'),
        new User(94,'Vlad','Dracula','buymeacoffe.@gmail.com','+360465789678'),
        new User(101,'Britney','Spears','buymeacoffe.@gmail.com','+360465789678'),]
    console.log(users);
    console.log('')
    // task 7-2 #2ikXsE2WiKZ //
    console.log(users.filter(user=>user.id%2===0));
console.log('')
    // task 7-3 #pOeHKct //
    console.log(users.sort ((user1,user2 )=>{
      return  user1.id - user2.id}))
}
// task 7-4  #nkMXISv //
{
    console.log('')

    function Client(id, name, surname, email, phone, ...products) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = products;
    }
        function product(title,price){
            this.title = title;
            this.price = price;
        }


    const clients = [
        new Client(1, 'Ivan', 'Arseniuk', 'loveworld.@gmail.com', '+380987456123', new product('kit-kat',12),new product('milk',34)),
        new Client(2, 'David', 'Petrenko', 'loveyou.@gmail.com', "+380098123457",  new product('cola',34),new product( 'nugat',40)),
        new Client(3, 'jana', 'Semenchuk', 'loveflover.@gmail.com', '+380567890123',  new product('phone',12000)),
        new Client(4, 'Matilda', 'Jaroslavivna', 'lovenight.@gmail.com', '+380456754196',  new product('wiskas',50)),
        new Client(5, 'Rico', 'Simson', 'lovefootball.@gmail.com', '+380967354679',  new product('Diablo V',1023)),
        new Client(6, 'Fedir', 'Sedjuk', 'lovesells@gmail.com', '+380759146223', new product('Ball',123),new product( 'Skate',500)),
        new Client(7, 'Johan', 'Mariarty', 'loveeducation.@gmail.com', '+380345786193', new product('square',43)),
        new Client(8, 'Merry', 'Poppins', 'loveokten.@gmail.com', '+380475197109', new product('cake Margarita',56),new product( 'pizza Chicago', 120)),
        new Client(9, 'Theodor', 'Rustbelt', 'lovecountry.@gmail.com', '+380786232667',  new product('mario',2000)),
        new Client(10, 'Jasmine', 'Madringo', 'lovenature.$gmail.com', '+380334125789', new product('Halo',2389),new product( 'battlefield 2099',1500),new product( 'God of War |||',678)),]
    console.log(clients);
    console.log('');

    // task 7-5 #8abtVjRv //

    console.log(clients.sort((a,b)=>{return a.order.length-b.order.length}))
}
// task 7-6 #vV9a6584I5 //
{
    console.log('')
    function Car(model,brand ,yearOfManufacturer,maxSpeed, engineCapacity) {
        this.model = model;
        this.brand = brand;
        this.yearOfManufacturer = yearOfManufacturer;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.drive = function (){
            return`Їдемо зі швидкістю ${this.maxSpeed}`};
       /* this.info = function(){
            let info =  new Map
            info.set('Model ',this.model);
            info.set('Brand',this.brand);
            info.set('Year of Manufacturer', this.yearOfManufacturer);
            info.set('Max speed',this.maxSpeed);
            info.set('engine capacity', this.engineCapacity);
            return Array.from(info)
        }*/
        this.info= function(){
             for(const item in this){
                console.log(item, this[item]);
            }} ;
        this.increaseMaxSpeed=function(newSpeed){
            if(newSpeed>0) return this.maxSpeed= newSpeed + this.maxSpeed};
        this.changeYear=function(newYear){
            if(newYear>1850)return this.yearOfManufacturer=newYear;
        };
        this.addDriver=function (driver) {
           return this.driver = driver};
    }
    let car1= new Car('prius','BMW',2008,250,300);

    car1.drive();
    car1.info();
    car1.increaseMaxSpeed(300);
    car1.changeYear(1980);
    car1.addDriver('Vito');
    console.log(car1);
}
// task 7-7 #5kla3yMpgp //
{
    console.log('');
    class CarBuilder{
        constructor(model, producer, year, maxSpeed, engineVolume){
            this.model=model;
            this.producer=producer;
            this.year=year;
            this.maxSpeed=maxSpeed;
            this.engineVolume=engineVolume;
        }
        drive= function(){return `Їдемо зі швидкістю ${this.maxSpeed}`};
        info=function(){
            for(const item in this){
              console.log(  item, this[item]);
            }
        }
        increaseMaxSpeed=function(speedToIncrease){
            if(speedToIncrease>0){return this.maxSpeed= speedToIncrease + this.maxSpeed;}
        };
        changYear=function(newYear){if(newYear>1900){return this.year=newYear}};
        addDriver=function(driver){
           if(driver){ return this.driver=driver};
        }
    };
    let auto=new CarBuilder('Hillix','TOYOTA',2012,320,400);
    console.log(auto.drive());
    auto.info();
    auto.increaseMaxSpeed(111);
    auto.changYear(2016);
    auto.addDriver(  'Anton');
    console.log(auto);
}
// task 7-8 #zg6Fifnqig //
{

    function Cinderella (name,age,footSize){
        this.name=name;
        this.age=age;
        this.footSize=footSize;
    }
    let girls=[
        new Cinderella('Elizabet',15,35),
        new Cinderella('Mary',40,42),
        new Cinderella('Anna',23,37),
        new Cinderella('Sindy',33,39),
        new Cinderella('Victoria',21,36),
        new Cinderella('Luiza',52,34),
        new Cinderella('Margot',27,41),
        new Cinderella('Alina',18,37),
        new Cinderella('Jasmine',25,38),
        new Cinderella('Maria',31,43),
    ]
    class Prince{
        constructor(name,age,shoe){
            this.name=name;
            this.age=age;
            this.shoe=shoe;
        }
        findCinderella(array){
            for(let item of array){
                for(let i in item){
                if(item[i]===this.shoe){ console.log(item)}
                }
            }
        }
    }

    let prince= new Prince('Alladin',24,38);
    prince.findCinderella(girls)
    console.log('')
    console.log(girls.find(Cinderella=>Cinderella.footSize===38))
}
// task 7-9 #gsKLAsNWM //

const users3 =[
    new User(1 ,'Eduard','Shevchenko','loveUkraine.@gmail.com','+380587624456'),
    new User(2 ,'Mikola','Lewandoski','loveUkraine.@gmail.com','+380587625456'),
    new User(3 ,'Elizabeth','Luka','loveUkraine.@gmail.com','+380587626756'),
    new User(4,'Maria','Chmelnutski','loveUkraine.@gmail.com','+380387128756'),
    new User(5 ,'Liza','Semigora','loveUkraine.@gmail.com',),
    new User(6 ,'Kyrylo','Javdoshak','loveUkraine.@gmail.com','+380987128756'),
    new User(7 ,'Ihor','Nicolovski','loveUkraine.@gmail.com','+3809870943456'),
]
Array.prototype.ownfilter=function(callback){
    const result=[];
    for(let i=0;i<this.length;i++){
    if(callback(this[i],i,this)) {result.push(this[i])}
    }
    return result;
    };
let filtred=users3.ownfilter(function (n) {return n.id%2===0})
console.log(filtred);
