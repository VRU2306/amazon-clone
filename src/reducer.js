export const initialState = {
  basket: [],
  wishlist:[],
  payNow:[],
  user: null
}

// Selector
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item,count) => item.price*count + amount, 0)

const reducer = (state, action) => {
  switch(action.type){
    case "ADD_TO_BASKET":
    // the item must one time in basket
    const item = action.payload;
      if (state.basket.filter((item) => item.id === action.item.id).length > 0)
        return state;

      return { ...state, basket: [...state.basket, action.item] };

        case "PAYNOW":
    return {
      ...state,
        payNow: [...state.payNow, action.item],
    };
   
  case "SET_BASKET":
      const indexss = state.basket.findIndex(
        (basketItemsss) => basketItemsss.id === action.id
      ); 
      let newBasketsss = [...state.basket]
      if (indexss >= 0) {
        newBasketsss.splice(index, 1)
      } else{
        console.warn(
          `Cant remove product {id: ${action.id}} as its not in basket!`
        )
      };
       return {
        ...state,
        basket: newBasketsss
      }
    case "ADD_TO_WISHLIST":
    return {
      ...state,
      wishlist: [...state.wishlist, action.item],
    };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItems) => basketItems.id === action.id
      ); 
      let newBasket = [...state.basket]
      if (index >= 0) {
        newBasket.splice(index, 1)
      } else{
        console.warn(
          `Cant remove product {id: ${action.id}} as its not in basket!`
        )
      };
      return {
        ...state,
        basket: newBasket
      }
          case "REMOVE_FROM_PAYNOW":
      const indexssss = state.payNow.findIndex(
        (basketItemsssss) => basketItemsssss.id === action.id
      ); 
      let newBasketssss = [...state.payNow]
      if (indexssss >= 0) {
        newBasketssss.splice(index, 1)
      } else{
        console.warn(
          `Cant remove product {id: ${action.id}} as its not in delete!`
        )
      };
      return {
        ...state,
         payNow: newBasketssss
      }
      
    case "REMOVE_FROM_WISHLIST":
    const indexs = state.wishlist.findIndex(
        (basketItemss) => basketItemss.id === action.id
      ); 
      let newBaskets = [...state.wishlist]
      if (indexs >= 0) {
        newBaskets.splice(indexs, 1)
      } else{
        console.warn(
          `Cant remove product {id: ${action.id}} as its not in WISHLIST!`
        )
      };
         return {
        ...state,
        wishlist: newBaskets
      }
    case "SET_USER":
      return{
        ...state,
        user: action.user
      }

    case "EMPTY_BASKET":
      return{
        ...state,
        basket: []
        
      }
      case "EMPTY_WISHLIST":
      return{
        ...state,
        wishlist: []
        
      }
    default:
      return state;
  }
}

export default reducer