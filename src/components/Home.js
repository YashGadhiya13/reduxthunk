import React from "react";
import AddProduct from "./AddProduct";
import ViewProducts from "./ViewProduct";
import AddEmployee from "./AddEmployee";
import ViewEmployee from "./ViewEmployee";

const Home = () => {

    return(
        <>
            <div className="Home">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <AddProduct />
                        </div>
                        <div className="col-6">
                            <AddEmployee />
                        </div>
                        <div className="col-6">
                            <ViewProducts />
                        </div>
                        <div className="col-6">
                            <ViewEmployee />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;