import axios from 'axios';
import React, { useState } from 'react';

function Tables({ placed, setPlaced, Tables, setBookingStatus }) {
    const [tableType, setTableType] = useState(0);
    let filterTables = [];

    if (Tables) {
        filterTables = Tables.filter(tab => tableType === 0 || tab.cat_id === tableType);
    }

    async function bookTable(t_id, t_cat) {
        try {
            const res = await axios.post(`http://localhost:5000/book_table/${t_id}/${t_cat}/${localStorage.getItem('token')}/${localStorage.getItem('Requirement')}`);
            if (res.data.Status) alert(res.data.Status);

            if (res.data.Status === "Table Booked") {
                localStorage.removeItem(`isBooked${placed}`)
                localStorage.setItem(`isBooked${res.data.user}`, true);
                setBookingStatus("serving");
                setPlaced(res.data.user)
            }
        } catch (error) {
            console.error("Error booking table:", error);
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Available Tables</h1>
                        <ul className="list-unstyled d-flex justify-content-around cursor-pointer">
                            <li onClick={() => setTableType(1)}>Private</li>
                            <li onClick={() => setTableType(3)}>Public</li>
                            <li onClick={() => setTableType(2)}>Family</li>
                            <li onClick={() => setTableType(0)}>All</li>
                        </ul>
                    </div>
                    {filterTables.map((e, sn) => (
                        <div className="col-md-4" key={sn}>
                            {/* <div className="card border">
                                <div className="card-header">{e.id}</div>
                                <div className="card-body">
                                    <div>{e.price_per}</div>
                                    <h3>{e.cat_name}</h3>
                                    <h3>{e.is_available === "yes" ? "Available" : "Unavailable"}</h3>
                                </div>
                                <div className="card-footer">
                                    <button
                                        className="btn"
                                        onClick={() => bookTable(e.id, e.cat_id)}
                                        disabled={e.is_available !== "yes"}
                                    >
                                        Book It
                                    </button>
                                </div>
                            </div> */}
                            <div className="card table-card">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb2yoorSB3mnsTDJ1iFWgZiZX9KNW6EpsJtA&s" className="card-img-top table-img" alt="Special Table 3" />
                                <div className="card-body">
                                    <h5 className="card-title">Table No {e.table_number}</h5>
                                    <div className="span d-flex justify-content-center">
                                        <button onClick={() => bookTable(e.id, e.cat_id)} disabled={e.is_available!=="yes"} className="btn btn-primary book-btn text-center">Book</button>
                                    </div>
                                    {/* <button className="btn btn-danger remove-btn" disabled>Remove</button> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
export default Tables;