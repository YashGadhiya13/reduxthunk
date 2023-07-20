import axios from "axios";
import config from '../utility/config.json';


const getEmployee = ()=> {
    return dispatch =>{
        dispatch({type:"LOADING_START"});
        axios.get(config.BASE_URL + "getEmployee.php")
        .then((response)=>{
            if(response.status==200)
            {
                dispatch({type:"LOADING_END"});
                var json = response.data;
                dispatch({type:"GET_EMPLOYEE",payload:json["data"]})
            }
        }).catch((error)=>{
            dispatch({type:"LOADING_END"});
            dispatch({type:"ERROR",payload:error.message});
            console.log(error);
        });
    }; 
}

const getinsertEmployee = (params) => {
    return disptach => {
        axios.post("https://elastic-ishizaka.217-174-245-235.plesk.page/studentapi/insertEmployeeNormal.php",params).then((response)=> {
            if((response.status==200)){

            

                var json = response.data;
                console.log(json);
                if(json["status"]="true"){
                    disptach({type:"ADD_EMPLOYEE",payload:json["message"]});
                    disptach(getEmployee());
                }
            }
        }).catch((error)=>{
            disptach({ type: "ERROR", payload: error.message });
        })
    }
}

const deleteEmployee = (eid)=> {
    return dispatch => {
        dispatch({type:"LOADING_START"});       
        var params = {
            "eid":eid
        };
        // var params = new FormData();
        // params.append("pid",pid);
        axios.post(config.BASE_URL + "deleteEmployeeJson.php",JSON.stringify(params))
        .then((response)=>{
            if(response.status==200)
            {
                dispatch({type:"LOADING_END"});
                var json = response.data;
                if(json["status"]=="true")
                {
                    dispatch({type:"DELETE_EMPLOYEE",payload:json["message"]})
                    dispatch(getEmployee());
                }
            }
        })
        .catch((error)=>{
            dispatch({type:"LOADING_END"});
            dispatch({type:"ERROR",payload:error.message});
        })
    };
}


export {getEmployee,getinsertEmployee,deleteEmployee};