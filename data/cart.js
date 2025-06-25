export const cart=[];
export function addToCart(productId){
let matchingItem;
        cart.forEach((cartItem)=>{
            if(productId===item.productId){
                matchingItem=item;
            }
        });
        if(matchingItem){
            matchingItem.quantity+=1;
        }
        else{
        cart.push({
            productId,
            quantity:1
        });
    }
}