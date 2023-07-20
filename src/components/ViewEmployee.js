import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee, getEmployee } from "../actions/EmployeeActions";

const ViewEmployee = () => {

    const {edata,loading,error,emessage} = useSelector((state) => state.elist);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getEmployee());
    },[dispatch]);

    const handleDelete = (eid)=>{
        dispatch(deleteEmployee(eid));
    };


    if(loading)
    {
        return(<>
            <h1>Loading....</h1>
        </>);
    }
    if(error!="")
    {
        return(<>
            <h1>{error}</h1>
        </>);
    }

    return (
        <>
            <h1 className="text-center">View Employee</h1>
            {emessage!="" && <h2>{emessage}</h2>}

            <div className="items">
                <div className="container">
                    <table border="0" className="table">
                        <thead>
                            <tr>
                                <th>EID</th>
                                <th>NAME</th>
                                <th>SALARY</th>
                                <th>DEPARTMENT</th>
                                <th>GENDER</th>

                            </tr>
                        </thead>
                        <tbody>
                            {edata.map((obj, index) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{obj.eid}</td>
                                            <td>{obj.ename}</td>
                                            <td>{obj.salary}</td>
                                            <td>{obj.department}</td>
                                            <td>{obj.gender}</td>
                                            <button type="button" className="btn-delete" onClick={(e)=>handleDelete(obj.eid)}>DELETE</button>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}
export default ViewEmployee;