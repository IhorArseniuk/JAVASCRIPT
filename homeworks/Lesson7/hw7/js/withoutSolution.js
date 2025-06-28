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
let filtred=users3.ownfilter(function (n) {return n.id%2===0})//(n=>  n.id%2===0)
console.log(filtred);

Array.prototype.myForEach=function(callback){
    const result=[];
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){result.push(this[i])}
    }
    return result
};
let userNames=users3.myForEach(function(n){ console.log( n.name.toUpperCase())})
