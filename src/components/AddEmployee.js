import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getinsertEmployee } from "../actions/EmployeeActions";


const AddEmployee = () => {

    const[eid,setEid] = useState();
    const[gender,setGender] = useState();
    const[EmployeeName,setEmployeeName] = useState();
    const[EmployeeSalary,setEmployeeSalary] = useState();   
    const[Department,setDepartment] = useState(); 
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        var params = new FormData();
        params.append("eid",eid);
        params.append("ename",EmployeeName);
        params.append("salary",EmployeeSalary);
        params.append("department",Department);
        params.append("gender",gender);

        dispatch(getinsertEmployee(params));

        setEmployeeName("");
        setEmployeeSalary("");
        setDepartment("");
        setGender("");
    }

    return (
        <>
            <h1 className="text-center">Employee Details</h1>
            <div className="items">
                <form onSubmit={handleSubmit} >
                    <div className="container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Employee Name</th>
                                    <th><input type="text" className="txtname" onChange={(e)=>setEmployeeName(e.target.value)} value={EmployeeName}></input></th>
                                </tr>
                                <tr>
                                    <th>Salary</th>
                                    <th><input type="text" className="txtsalary" onChange={(e)=>setEmployeeSalary(e.target.value)} value={EmployeeSalary}></input></th>
                                </tr>
                                <tr>
                                    <th>Department</th>
                                    <th><input type="text" className="txtdepart" onChange={(e)=>setDepartment(e.target.value)} value={Department}></input></th>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <th><input type="text" className="txtgender" onChange={(e)=>setGender(e.target.value)} value={gender}></input></th>
                                </tr>
                                
                            </thead>
                        </table>
                    </div>  
                    <div className="text-center">           
                        <button type="submit" className="btn-submit">Submit</button> 
                    </div>                    
                </form>
            </div>

        </>
    );
}
export default AddEmployee;