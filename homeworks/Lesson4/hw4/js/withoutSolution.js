// task 4-12 #mkGDenYnNjn //
{
    console.log('');
// 1
    /* function exchange(sumUa,currencyValues,exchangeCurrency){
         let exhangedSum=0;
       let  currencyValue= currencyValues=[{currency:'USD',value:25},{currency:'EUR',value:43},{currency:'JPY',value:0.24}];
         for(let i of currencyValue){
             if(i.currency===exchangeCurrency){
                 exhangedSum=sumUa/i.value+i.currency;
             }}
         return exhangedSum
     }
     console.log(exchange(1000, '','EUR'))
*/
//2

    function exchange(sumUa,currencyValues,exchangeCurrency){
        let currentChosen;
        for(let i of currencyValues){
            if(i.currency===exchangeCurrency){
                currentChosen=i;
            }
        }
        return sumUa/currentChosen.value+currentChosen.currency;
    }
    console.log(exchange(100000,[{currency:'USD',value:25},{currency:'EUR',value:43},{currency:'JPY',value:0.24}],'JPY'))

}
