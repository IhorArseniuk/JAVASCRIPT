// task #WpkK0ZH1 //
{
    let a=[ 11, 222, 45,56,67,'delta','alpha','beta','deca','lino',true,false,'figo',33,12]
    console.log(a);
}
// task #4aDbSgh //
{
    let b=[0];
    b[0]= 12;
    b[1]='gigo';
    b[2]=true;
    b[3]=43;
    b[4]=12;
    b[5]='link'
    console.log(b);
}
// task #qLQLJSeN7i //
{
    let c = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
     let i=0;
    //1 while(i<c.length){
    //     console.log(c[i]);
    //     i++;
    // }
    //2 for (let i=0; i<c.length;i++){
    //     console.log(c[i])
    // }
    //3let i = 0;
    //while (i < c.length) {
    //    if (i % 2 !== 0){
    //        console.log(c[i]);
    //    }
    //    i++;
    //}
    //4for (let i = 0; i < c.length;i++){
    //    if( i%2 !==0){
    //        console.log(c[i]);
    //    }
    //}
    //5while(i<c.length){
    //    if(i%2 ===0){
    //        console.log(c[i]);
    //    }
    //    i++;
    //}
   //6 for(let i=0; i<c.length;i++){
   //     if(i%2===0){
   //         console.log(c[i]);
   //     }
   //     i++;
   // }
  //7  for(let i=0;i<c.length;i++){
  //      if(i % 3===0){
  //          c[i]='okten';
  //      }
  //  }
  //  console.log(c)

 // 8 c.reverse()
 //   console.log(c)
  // 9 for( let i=0;i<c.length;i++){
  //      if(c[i]%3===0){
  //          c[i]='okten';
  //      }else if(c[i]%2===0){
  //          console.log(c[i])
  //      }else if(c[i]%2!==0){
  //          console.log(c[i])
  //      }
  //      console.log(c)
  //  }
}
// task #yHAwJOyiC //
{
    let numbers=[1,33,4,12,23,56,90,78,45,49];
    for( let number of numbers){
        console.log(number);
    }
}
// task #GamKju89ob //
{
    console.log('');
    let words=['miro','max','min','nigo','niko','jof','dis','ssi','awe','kok']
    for(let word of words){
        console.log(word);
    }
}
// task #Bm76xmg //
{   console.log('');
    let mix=[123,23,45,67,78,'hoho','hipo','vino','kilo','noli'];
    for( let element of mix){
        console.log(element);
    }
}
// task #u3vmD0YJXh //
{   console.log('');
    let mixedArray=[12,67,90,'gigo',true,'jodi',null,'figo',false,125];
    for(let element of mixedArray){
        if(typeof element === 'boolean'){
            console.log(element);
        }
    }
}
// task #9stMq2ou //
{
    console.log('');
    let array = [12, 67, 90, 'gigo', true, 'jodi', 0, 'figo', false, 129];
    for (let i of array) {
        if (typeof i === 'number') {
            console.log(i);
        }
    }
}
// task #mK4pmM4 //
{
    console.log('');
    let strings =['gigo','jodi',null,23,'koko',false,90,23,true,'koki'];
    for(let i of strings){
        if(typeof i === 'string'){
            console.log(i);
        }
    }
}
// task #0pm3EyTKy9 //
{
    console.log('');
    let array = []
    array[0] = 'hipo';
    array[1] = 'vino';
    array[2] = 3;
    array[3] = 56;
    array[4] = 'mis';
    array[5] = 78;
    array[6] = true;
    array[7] = false;
    array[8] = 12;
    array[9] = 'ihor';
    //for (let i of array) {
    //    console.log(i);
    //}

// task #mDMWMW5a //
    console.log('');
  //  for (let arrayElement =0; arrayElement<10;arrayElement+=1) {
  //      let number = array[arrayElement];
  //          console.log(number);
  //          document.write(`<h1>${arrayElement} - ${[number]}</h1>`);
  //  }
// task #4sXhaa5YMM //
   // for (let arrayElement=0; arrayElement<100;arrayElement+=1){
   //     console.log(arrayElement);
   //     document.write(`<h1>${arrayElement} <h1>`)}
   // }
// task #s24slNyz7 //
    //for (let arrayElement=0; arrayElement<100;arrayElement +=2){
    //console.log(arrayElement);
    //document.write(`<h1>${arrayElement}</h1>`)}
    //}
// task #zananT5FR1 //
    //for (let i=0; i<100;i++){
    //if(i%2===0){
    //    console.log(i);
    //    document.write(`<h1>${i}</h1>`);
    //}}
// task #Tfrwls7FM //
  // for( let i=0; i<100;i++){
  //     if(i%2 !==0){
  //         console.log(i);
  //         document.write(`<h1>${i}</h1>`);
  //     }
  // }
}
// task #reLkOkTB29Q //
{
    let books=[
        { title: 'Persi Jackson', pages: 123, authors:[{name:'Joane',age:67},{name:'Jane',age:78}], ganres:['fantasy']},
        {title:'Green Mile', pages:265,authors:{name:'Stewart',age:23 },ganres:['drama','realism']},
        {title:'Odisea', pages:90, authors:[{name:'Gomer',age:56},{name:'Ofelio',age:70}], ganres:['drama','myth','epic']},
        {title:'50 Days', pages:550,authors:[{name:'Tiodoro',age:43}],ganres:['surviving','realism']},
        {title:'Merry Popins', pages:324,authors:[{name:'Nicolle',age:33},{name:'Marry',age:53},{name:'Anna',age:89}],ganres:['drama','fantastic',]}]
    let ganresmax=0;
    let bookWitchMaxGanres=null;
    for(let i of books){
        let book=i;
       let ganresCoun=book.ganres.length;
      if(ganresCoun>ganresmax){
        ganresmax=ganresCoun;
        bookWitchMaxGanres=book
      }

    }
    console.log(bookWitchMaxGanres);
    console.log('');
    let bigBook=0;
    let biggestBook=null;
    for (let i of books){
        let book= i;
        let bookCount=book.pages;
        if(bookCount>bigBook){
            bigBook=bookCount;
            biggestBook=book;
        }
    }
    console.log(biggestBook)
    console.log('');
    let bookWitchMaxAuthors=null;
    for(let i of books){
        let book=i;
        let authorsCurent=book.authors.length;
        if(authorsCurent>=2){
            bookWitchMaxAuthors=book}}
            console.log(bookWitchMaxAuthors)
console.log('');
    let longestTitle = '';
    let bookWithLongestTitle = null;
    for (let book of books)
    { let titleCount= book.title.length;
        if (titleCount > longestTitle)
        { longestTitle = titleCount;
            bookWithLongestTitle = book; } }
    console.log( bookWithLongestTitle);
    console.log('');
    let bookWitchOneAuthor=null;
    for(let i of books){
        let book=i;
        if(book.authors.length===1){
            bookWitchOneAuthor=book;
        }
    }
    console.log(bookWitchOneAuthor);
}
// task //
{
let empty=[];
//for(let i=0;i<50;i++){
//    if(i%2===0){
//        empty.push(i);
//    }
//}
//console.log(empty);
//    for(let i=0;i<50;i++){
//        if(i%2!==0){
//            empty.push(i);
//        }
//    }
    //for(let i=0;i<20;i++){
    //    let randomNumber=Math.floor(Math.random()*100);
    //    empty.push(randomNumber);
    //}
  //  for(let i=0;i<20;i+=3){
  //      let randomNumber=Math.floor(Math.random()*732)+8;
  //      empty.push(randomNumber);
  //  }
    let newEmpty=[1,4,7,8,10,14,5,9,12,7,1,4 ];
//    for(let i=0;i<50;i+=3){
//        let randomNum =Math.floor(Math.random()*732);
//        if(randomNum%2===0){
//            empty.push(randomNum);
//        }
//    }
//    newEmpty.push(empty)

    for(let i=0;i<newEmpty.length;i++){
        if(newEmpty[i+1] % 2===0){
            console.log(newEmpty[i]);
        }
    }
    console.log('');
    let priceSum=0;
    let priceArray =[100,250,50,168,120,345,188];
    for(let i=0;i<priceArray.length;i++){
        priceSum+=priceArray[i];
}
let priceMidl=priceSum/priceArray.length;
    console.log(priceMidl)

    console.log('');

    let numbArray =[12,24,34,42,53,61,79,82,93,10, 40,50,80];
    let newNumb=[];
    for (let i=0; i<numbArray.length;i++){
        let xFiveValue=numbArray[i]*5;
        newNumb.push(xFiveValue);
    }
    console.log(newNumb);
    console.log('');

    let newMixedArray=[12,67,90, 'gighouo', true, 'jodpoi', 0, 'figipo', false, 129];
    let secondMixedArray=[];
    for(let i=0;i<newMixedArray.length;i++){
        if(typeof newMixedArray[i]=== 'number'){
            secondMixedArray.push(newMixedArray[i])
        }
    }
    console.log(secondMixedArray);
}
