const initialstate = {
    loading:true,
    data: [],
    error:"",
    message:"",
    singledata:null
}
const ProductReducer = (state=initialstate, action) => {
    switch(action.type){
        case "LOADING_START":
            return {
                ...state,
                loading:true
            };
        case "LOADING_END":
                return {
                    ...state,
                    loading:false
                };
        case "ERROR":
                return {
                    ...state,
                    error:action.payload
                };
        case "GET_PRODUCTS":
            return {
                ...state,
                data:action.payload
            };
        case "DELETE_PRODUCTS":
                return {
                    ...state,
                    message:action.payload
                };
        case "EDIT_PRODUCTS":
            return {
                ...state,
                singledata:action.payload
            };
        case "UPDATE_DATA":
                return {
                    ...state,
                    singledata:null
                };
        case "ADD_DATA":
            return {
                ...state,
                message:action.payload
            };
        default:
            return state;
    }
    
}

export default ProductReducer;