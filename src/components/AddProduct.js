import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getinsertProduct, updateProduct} from "../actions/ProductActions"


const AddProduct = () => {

    const[pid,setPid] = useState();
    const[ProductName,setProductName] = useState();
    const[ProductQty,setProductQty] = useState();   
    const[ProductPrice,setProductPrice] = useState(); 
    
    const dispatch = useDispatch();

    var singledata = useSelector((state)=>state.list.singledata);

    useEffect(()=>{
       if(singledata!=null)
       {
        setProductName(singledata["pname"]);
        setProductQty(singledata["qty"]);
        setProductPrice(singledata["price"]);
        setPid(singledata["pid"]);
       }
    },[singledata]);

    const handleSubmit = (e) => {
        e.preventDefault();

        var params = new FormData();
        params.append("pid",pid);
        params.append("pname",ProductName);
        params.append("qty",ProductQty);
        params.append("price",ProductPrice);

        dispatch(getinsertProduct(params));

        setPid("");
        setProductName("");
        setProductQty("");
        setProductPrice("");

    }
    const handleUpdate = (e) => {
        e.preventDefault();

        var params = new FormData();
        params.append("pid",pid);
        params.append("pname",ProductName);
        params.append("qty",ProductQty);
        params.append("price",ProductPrice);

        dispatch(updateProduct(params));

        setPid("");
        setProductName("");
        setProductQty("");
        setProductPrice("");

    }

    return (
        <>
            <h1 className="text-center">Products Details</h1>
            <div className="items">
                {singledata!=null ? <form onSubmit={handleUpdate} >
                    <div className="container">
                        <table>
                            <thead>
                                <tr>
                                    <th className="txtname1">Product Name</th>
                                    <th><input type="text" className="txtname" onChange={(e)=>setProductName(e.target.value)} value={ProductName}></input></th>
                                </tr>
                                <tr>
                                    <th>Quantity</th>
                                    <th><input type="text" className="discount" onChange={(e)=>setProductQty(e.target.value)} value={ProductQty}></input></th>
                                </tr>
                                <tr>
                                    <th>Price</th>
                                    <th><input type="text" className="txtprice" onChange={(e)=>setProductPrice(e.target.value)} value={ProductPrice}></input></th>
                                </tr>
                                
                            </thead>
                        </table>
                    </div>  
                    <div className="text-center">           
                        <button type="submit" className="btn-submit">Update</button> 
                    </div>                    
                </form> : <form onSubmit={handleSubmit} >
                    <div className="container">
                        <table>
                            <thead>
                                <tr>
                                    <th className="txtname1">Product Name</th>
                                    <th><input type="text" className="txtname" onChange={(e)=>setProductName(e.target.value)} value={ProductName}></input></th>
                                </tr>
                                <tr>
                                    <th>Quantity</th>
                                    <th><input type="text" className="discount" onChange={(e)=>setProductQty(e.target.value)} value={ProductQty}></input></th>
                                </tr>
                                <tr>
                                    <th>Price</th>
                                    <th><input type="text" className="txtprice" onChange={(e)=>setProductPrice(e.target.value)} value={ProductPrice}></input></th>
                                </tr>
                                
                            </thead>
                        </table>
                    </div>  
                    <div className="text-center">           
                        <button type="submit" className="btn-submit">Submit</button> 
                    </div>                    
                </form>}
            </div>

        </>
    );
}
export default AddProduct;