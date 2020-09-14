export const initialState = {
    basket: [{
        id: "212121",
        title: "Apple iPad Pro(12.9-inch)",
        price: 521,
        image: "https://images-na.ssl-images-amazon.com/images/I/6162WMQWhVL._AC_SL1500_.jpg",
        rating: 4
    },{
        id: "212122",
        title: "Apple iPad Pro(12.9-inch)",
        price: 521,
        image: "https://images-na.ssl-images-amazon.com/images/I/6162WMQWhVL._AC_SL1500_.jpg",
        rating: 4
    }],
    user: null
};

export const getBasketTotal = (basket) => (
    console.log(basket),
    basket?.reduce((amount, item) => amount + item.price, 0)
)

function reducer(state, action) {

    console.log(action.type)

    switch (action.type) {
        case 'ADD_TO_BASKET':
            // Logic to add to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];

            // find id the id exist inside basket
            const index = state.basket.findIndex((basketIndex) =>  basketIndex.id === action.id)

            if (index) {
                // We found the id, splice it
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `id ${action.id} does not exists in basket.`
                )
            }

            return { 
                ...state, 
                basket: newBasket
            };
            break;
        default:
            return { ...state};
    }
}

export default reducer;