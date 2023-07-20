const initialstate = {
    loading:true,
    edata: [],
    error:"",
    emessage:""
}
const EmployeeReducer = (state=initialstate, action) => {
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
        case "GET_EMPLOYEE":
            return {
                ...state,
                edata:action.payload
            };
        case "ADD_EMPLOYEE":
            return {
                ...state,
                emessage:action.payload
            };
        case "DELETE_EMPLOYEE":
            return {
                ...state,
                emessage:action.payload
            };
        default:
            return state;
        
           
    }
    
}


export default EmployeeReducer;