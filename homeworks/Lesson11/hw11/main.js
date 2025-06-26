// task 11-1 #HmvAfRQM //
{
    fetch('https://dummyjson.com/carts')
        .then(res => res.json())
        .then(res => {console.log(res)
            let{carts}=res
            for(const cart of carts){
                let divCart=document.createElement('div');
                divCart.className='div-cart';

                const id=document.createElement('h3');
                 id.innerText='ID'+' ' + cart.id;

                const productsDiv=document.createElement('div');
                productsDiv.className='products-div';

                const productP=document.createElement('h4')
                productP.innerText='Products:';

                productsDiv.appendChild(productP);

                const {products}=cart;

                for(const product of products){
                    const productInfo=document.createElement('p');
                     productInfo.innerText=product.title;

                     const productImg=document.createElement('img');
                     productImg.className='product-img';
                     productImg.src=product.thumbnail;

                     const productPrice=document.createElement('p');
                     productPrice.innerText=product.price+'$';

                    productsDiv.append(productInfo,productImg,productPrice);
                }

                const totalPrice=document.createElement('p');
                totalPrice.className='total-price';
                totalPrice.innerText='Price'+ ' ' +cart.total+'-USD';

                const discountedTotalPrice=document.createElement('p');
                discountedTotalPrice.className='discounted-price';
                discountedTotalPrice.innerText='Discounted price'+' '+cart.discountedTotal+'-USD';

                const userId=document.createElement('h4');
                userId.innerText='User id '+' ' + cart.userId;

                const totalProducts=document.createElement('p');
                totalProducts.innerText='Total products'+' '+cart.totalProducts;

                const totalQuantity=document.createElement('p');
                totalQuantity.innerText='Total Quantity'+' '+cart.totalQuantity;

                divCart.append(id,productsDiv,totalPrice,discountedTotalPrice,userId,totalProducts,totalQuantity);
                document.body.appendChild(divCart);
            }

        })
}
