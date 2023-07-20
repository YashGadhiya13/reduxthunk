import axios from "axios";
import config from '../utility/config.json';

const getProduct = ()=> {
    return dispatch =>{
        dispatch({type:"LOADING_START"});
        axios.get(config.BASE_URL + "getProducts.php")
        .then((response)=>{
            if(response.status==200)
            {
                dispatch({type:"LOADING_END"});
                var json = response.data;
                dispatch({type:"GET_PRODUCTS",payload:json["data"]})
            }
        }).catch((error)=>{
            dispatch({type:"LOADING_END"});
            dispatch({type:"ERROR",payload:error.message});
            console.log(error);
        });


    }; 
}
const deleteProduct = (pid)=> {
    return dispatch => {
        dispatch({type:"LOADING_START"});       
        var params = {
            "pid":pid
        };
        // var params = new FormData();
        // params.append("pid",pid);
        axios.post(config.BASE_URL + "deleteProductJson.php",JSON.stringify(params))
        .then((response)=>{
            if(response.status==200)
            {
                dispatch({type:"LOADING_END"});
                var json = response.data;
                if(json["status"]=="true")
                {
                    dispatch({type:"DELETE_PRODUCTS",payload:json["message"]})
                    dispatch(getProduct());
                }
            }
        })
        .catch((error)=>{
            dispatch({type:"LOADING_END"});
            dispatch({type:"ERROR",payload:error.message});
        })
    };
}

const getinsertProduct = (params) => {
    return dispatch => {

        axios.post(config.BASE_URL + "insertProductNormal.php", params).then((response) => {
            if ((response.status == 200)) {
                var json = response.data;
                if (json["status"] == "true") {
                    dispatch({ type: "ADD_DATA", payload: json["message"] });
                    dispatch(getProduct());
                }
            }
        }).catch((error) => {
            dispatch({ type: "ERROR", payload: error.message });
        })
    };
}


const editProduct= (pid)=>{
    var params = new FormData();
    params.append("pid",pid)
    return dispatch => {
        axios.post(config.BASE_URL + "getSingleProduct.php", params).then((response) => {
            if ((response.status == 200)) {
                var json = response.data;
                //console.log(json);
                if (json["status"] == "true") {
                    dispatch({ type: "EDIT_PRODUCTS", payload: json["data"] });
                }
            }
        }).catch((error) => {
            dispatch({ type: "ERROR", payload: error.message });
        })
    }
}

const updateProduct = (params) => {
    return dispatch => {

        axios.post(config.BASE_URL + "updateProductNormal.php", params).then((response) => {
            if ((response.status == 200)) {
                var json = response.data;
                if (json["status"] == "true") {
                    dispatch({ type: "UPDATE_DATA"});
                    dispatch(getProduct());
                }
            }
        }).catch((error) => {
            dispatch({ type: "ERROR", payload: error.message });
        })
    };
}
export {getProduct,deleteProduct,getinsertProduct,editProduct,updateProduct};