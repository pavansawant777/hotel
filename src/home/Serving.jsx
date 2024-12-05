import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Serving({ placed }) {
    const navigator=useNavigate()
    const [orders, setOrders] = useState([]);
    // const [Total, setTotal] = useState(0)
    var itemTotal=0;
    const fetchOrders = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/OrderPlaced/${placed}`);
            setOrders(response.data);
            // console.log(placed)
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };
    const checkOut = async () => {
        const res=await axios.post(`http://localhost:5000/checkOut/${placed}`,{Total:itemTotal})
        console.log(res.data)
        alert(res.data.Status)
        if (res.data.Status === "Kindly Pay Bill"){
            localStorage.removeItem("Requirement")
            localStorage.removeItem(`isBooked${res.data.c_id}`)
            localStorage.setItem("Payment",res.data.bill)
            navigator("/profile")
        }
    }
    useEffect(() => {
        fetchOrders();
        const interval = setInterval(fetchOrders, 5000);
        return () => clearInterval(interval);
    }, [placed]);

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5 mt-5 pt-5">
                    <div className="card p-5 my-5">
                        <div className="card-header">Serving Now:</div>
                        <div className="card-body">
                            {orders.length > 0 ? (
                                // orders.map((order, index) =>{
                                //     setTotal(order.menu_item * order.quantity)
                                //     // total += itemTotal;
                                //     return (<div className="d-flex justify-content-between" key={index}>
                                //         <h6 id={index}>{order.menu_item}</h6>
                                //         <h6 id={index}>{order.quantity}</h6>
                                //     </div>)
                                //     }
                                // )
                                orders.map((order,index) => {
                                    itemTotal += order.price * order.quantity;
                                    // setTotal(order.menu_item * order.quantity)
                                    // total += itemTotal;
                                    return (
                                        <div className="d-flex justify-content-between" key={index}>
                                            <h6 id={index}>{order.menu_item}</h6>
                                            <h6 id={index}>{order.quantity}</h6>
                                        </div>
                                    );
                                })
                            ) : (
                                <p>No orders placed yet.</p>
                            )}
                        </div>
                        <div className="card-footer d-flex justify-content-around">
                            <button onClick={checkOut} className='btn'>Checkout</button><button className='border-0 '>&#8377;{itemTotal}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Serving;
