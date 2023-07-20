import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, editProduct, getProduct } from "../actions/ProductActions";

const ViewProducts = () => {

    

    const dispatch = useDispatch();

    let {data,loading,error,message} = useSelector((state)=>state.list);



    useEffect(()=>{
        dispatch(getProduct());
    },[dispatch]);

    const handleDelete = (pid)=>{
        dispatch(deleteProduct(pid));
    };


    const handleEdit = (pid)=>{
        dispatch(editProduct(pid));
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
            <h1 className="text-center">View Products</h1>
            {message!="" && <h2>{message}</h2>}
            <div className="items">
                <div className="container">
                    <table border="0" className="table">
                        <thead>
                            <tr>
                                <th>PID</th>
                                <th>NAME</th>
                                <th>QTY</th>
                                <th>PRICE</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((obj,index)=>{
                                return (<>
                                    <tr>
                                        <td>{obj.pid}</td>
                                        <td>{obj.pname}</td>
                                        <td>{obj.qty}</td>
                                        <td>{obj.price}</td>

                                        <button type="butotn" onClick={(e)=>handleDelete(obj.pid)} className="btn-delete">DELETE</button>
                                        <button type="butotn" onClick={(e)=>handleEdit(obj.pid)} className="btn-delete">EDIT</button>

                                    </tr>
                                </>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}
export default ViewProducts;