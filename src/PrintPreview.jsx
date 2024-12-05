import axios from 'axios';
import "./home.css"
import React, { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
const obj = [
  {
    "bill_id": 1,
    "user_id": 1,
    "customer_name": "Sarthak Misal",
    "email": "sarthakmisal@hotmail.com",
    "was_online": "no",
    "table_number": 3,
    "table_category": "",
    "price_paid": "3788",
    "items_ordered": "Paneer Chilli,Paneer Chilli,Chana Masala,Pizza,",
    "item_prices": "179,179,190,199,",
    "date_modified": "2024-07-05 01:21:02",
    "status": "paid",
    "quantity": "1,2,1,5,"
  },
  {
    "bill_id": 2,
    "user_id": 1,
    "customer_name": "Rutuja",
    "email": "rutu@gmail.com",
    "was_online": "no",
    "table_number": 1,
    "table_category": "",
    "price_paid": "2596",
    "items_ordered": "Pizza,Pizza,",
    "item_prices": "199,199,",
    "date_modified": "2024-07-05 09:41:19",
    "status": "paid",
    "quantity": "1,2,"
  },
  {
    "bill_id": 10,
    "user_id": 1,
    "customer_name": "admin@gmail.com",
    "email": "SARTHAKRMISAL05@GMAIL.COM",
    "was_online": "yes",
    "table_number": 9,
    "table_category": "Public",
    "price_paid": "557",
    "items_ordered": "Pizza,Burger,",
    "item_prices": "199,159,",
    "date_modified": "2024-07-14 22:55:25",
    "status": "unpaid",
    "quantity": "2,1,"
  }
]
function PrintPreview({ Auth }) {
  const navigate = useNavigate();
  const [Item, setItem] = useState({});
  const { id } = useParams();

  const fetchBill = async () => {
    try {
      const item = await axios.get(`http://localhost:5000/getBillItem/${id}`);
      console.log(item.data);
      setItem(item.data);
    } catch (err) {
      console.error("Error fetching bill item:", err);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    } else {
      fetchBill();
    }
  }, [id, navigate]);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [Auth, navigate]);

  if (!Item) {
    return <h1 className='text-danger text-center'>Loading...</h1>;
  }

  return (
    // <h1>hello</h1>
    <div className="container-fluid mt-5 mb-4">
      <div className="row">
       <h3 className='head'><u>Billing Table </u></h3>
        <div className="col-12 mt-1 shadow text-center">
          <table border={'1'}width={'100%'}>
            <tr className='bg-warning'>
              <th>Customer_name</th>
              <th>Email</th>
              <th>Price_paid</th>
            </tr>
            {obj.map(ele =>
              <>
                <tr>
                  <td>{ele.customer_name}</td>
                  <td>{ele.email}</td>
                  <td>{ele.price_paid}</td>

                </tr>
              </>
            )}
          </table>
          </div>
      </div>
    </div>
  );
}

export default PrintPreview;
