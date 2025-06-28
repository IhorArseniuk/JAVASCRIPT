// task 3-1 #y7crMeFwHcS //
{
for (let i = 0; i<10; i++){
    document.write( '<div>hello</div>')
    console.log(i);
}
}
// task 3-2 #TYj7ncx //
{
    console.log('');
    for (let i =0;i<10;i++){
        document.write(
            `<div>Hello gays ${[i]}</div>`
        )
        console.log(i);
    }
}
// task 3-3 #uzkt71dp //
{
    console.log('');
    let i=0;
  while(i<20){
    document.write(
        `<h1>fifa</h1>`);
    i++;
    console.log(i);

}
}
// task 3-4 #OeT7t3uUMFi //
{
    console.log('');
    let i=0;
 while(i<20){
     document.write(`<h1>Fifa ${i}</h1>`)
     i++;
     console.log(i);
 }
}
// task 3-5 #vLSZKMlO //
{
    console.log('');
    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
    document.write('<ul>');
    for (let listItem of listOfItems){
        document.write(`<li>${listItem }</li>`);
    }
    document.write('</ul>');
}
// task 3-6 #Hdjws7E //
{
    let products = [
        {title: 'milk',
        price: 22,
        image:'https://w7.pngwing.com/pngs/543/416/png-transparent-organic-milk-organic-food-dairy-products-cream-milk-packaging-cream-grocery-store-organic-farming.png'},

    {

        title: 'juice',

        price: 27,

            image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'

    },

    {

        title: 'tomato',

        price: 47,

            image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'

    },
    {

        title: 'tea',

        price: 15, image: 'https://img.freepik.com/free-vector/tea-ad-with-hand-drawing-decoration_52683-30533.jpg?semt=ais_hybrid&w=740'

    }];
   for (let product of products){
       document.write(`
        <div class=”product-card”>

        <h3 class=”product-title”>${product.title}. Price –${product.price}</h3>

        <img src="${product.image}" alt="product" class="product-image">

</div>`)
   }
}
// task 3-7 #4WrHwFTEop0 //
{
    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];
    //for (let user of users){
    //    if (user.status===true)
    //  console.log(user)}
    //}
    //for (let user of users){
    //  if (!user.status){
    //      console.log(user)
    //  }
    //}
    for (let user of users){
        if (user.age==31){
            console.log(user)
        }
    }
}
