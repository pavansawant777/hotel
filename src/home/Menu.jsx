import React, { useEffect, useState } from "react";
import '../home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";

export default function Menu({ setPlaced }) {
    const [menu, setMenu] = useState([]);
    const [menuType, setMenuType] = useState(0);

    const fetchMenu = async () => {
        try {
            const response = await axios.get("http://localhost:5000/getMenuItems");
            setMenu(response.data);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    const orderItem = async (id) => {
        try {
            const response = await axios.post(`http://localhost:5000/orderItem/${id}/${localStorage.getItem('token')}`);
            if (response.data.Status === "Requested") {
                alert(response.data.Status);
                setPlaced(response.data.Customer);
            }
        } catch (error) {
            console.error("Error ordering item:", error);
        }
    };

    useEffect(() => {
        fetchMenu();
        AOS.init({ duration: 4000 });
    }, []);

    const filterMenu = menu.filter(men => menuType === 0 || men.cat_id === menuType);

    useEffect(() => {
        AOS.init({ duration: 4000 });
    }, []);
    return (
        <>
            {/* <h1>Home</h1> */}
            {/* <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="zminus">
                                <p className="Specialties text-center">Specialties</p>
                            </div>
                            <div className="zplus">
                                <h1 className="text-center ourmenu" data-aos="fade-right">OUR MENU</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-md-4 col-sm-6 col-12 bg-light menucardborder" >
                            <div className="card bg-light" style={{ border: 'none' }}>
                                <div className=" card-body  bordered">
                                    <img src="coconut.png" alt="" className=" coconut1" />
                                    <img src="coconut.png" alt="" className=" coconut2" />
                                </div>
                                <div className=" card-body bordered" style={{ marginTop: '-30px' }}>
                                    <div className="row  pb-2">
                                        <div className="col-12 text-center">
                                            <h3 className="ml- pb-2"><b>BREAKFAST</b></h3>
                                        </div>
                                        <div className="row bbottom pb-3">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://t4.ftcdn.net/jpg/05/61/78/69/360_F_561786951_IdQbtR0bga3RzISgodGvIRMFEBqmjfcn.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Veg Roast Source</b></h6>
                                                    <p className="">Meat, Potatoes, Rice, Tomatoe</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h3"><b>$29</b></h5>
                                            </div>
                                        </div>
                                        <div className="row bbottom pb-3">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_640.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Veg Roast Source</b></h6>
                                                    <p className="">Meat, Potatoes, Rice, Tomatoe</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h3"><b>$29</b></h5>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://img.etimg.com/thumb/msid-94248099,width-480,height-360,imgsize-86276,resizemode-75/bread-pakora.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Veg Roast Source</b></h6>
                                                    <p className="">Meat, Potatoes, Rice, Tomatoe</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h3"><b>$29</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-12 bg-light menucardborder">
                            <div className="card bg-light" style={{ border: 'none' }}>
                                <div className=" card-body  bordered">
                                    <img src="coconut.png" alt="" className=" coconut1" />
                                    <img src="coconut.png" alt="" className=" coconut2" />
                                </div>
                                <div className=" card-body bordered" style={{ marginTop: '-30px' }}>
                                    <div className="row  pb-2">
                                        <div className="col-12 text-center">
                                            <h3 className="ml- pb-2"><b>DINNER</b></h3>
                                        </div>
                                        <div className="row bbottom pb-3">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://t4.ftcdn.net/jpg/05/61/78/69/360_F_561786951_IdQbtR0bga3RzISgodGvIRMFEBqmjfcn.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Veg Roast Source</b></h6>
                                                    <p className="">Meat, Potatoes, Rice, Tomatoe</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h3"><b>$29</b></h5>
                                            </div>
                                        </div>
                                        <div className="row bbottom pb-3">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_640.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Veg Roast Source</b></h6>
                                                    <p className="">Meat, Potatoes, Rice, Tomatoe</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h3"><b>$29</b></h5>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://img.etimg.com/thumb/msid-94248099,width-480,height-360,imgsize-86276,resizemode-75/bread-pakora.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Veg Roast Source</b></h6>
                                                    <p className="">Meat, Potatoes, Rice, Tomatoe</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h3"><b>$29</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-12 bg-light menucardborder">
                            <div className="card bg-light" style={{ border: 'none' }}>
                                <div className=" card-body  bordered">
                                    <img src="coconut.png" alt="" className=" coconut1" />
                                    <img src="coconut.png" alt="" className=" coconut2" />
                                </div>
                                <div className=" card-body bordered" style={{ marginTop: '-30px' }}>
                                    <div className="row  pb-2">
                                        <div className="col-12 text-center">
                                            <h3 className="ml- pb-2"><b>LUNCH</b></h3>
                                        </div>
                                        <div className="row bbottom pb-3">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://t4.ftcdn.net/jpg/05/61/78/69/360_F_561786951_IdQbtR0bga3RzISgodGvIRMFEBqmjfcn.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Veg Roast Source</b></h6>
                                                    <p className="">Meat, Potatoes, Rice, Tomatoe</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h3"><b>$29</b></h5>
                                            </div>
                                        </div>
                                        <div className="row bbottom pb-3">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_640.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Veg Roast Source</b></h6>
                                                    <p className="">Meat, Potatoes, Rice, Tomatoe</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h3"><b>$29</b></h5>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://img.etimg.com/thumb/msid-94248099,width-480,height-360,imgsize-86276,resizemode-75/bread-pakora.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Veg Roast Source</b></h6>
                                                    <p className="">Meat, Potatoes, Rice, Tomatoe</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h3"><b>$29</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>
                    <div className="row mt-5" >
                        <div className="col-md-4 col-sm-6 col-12 bg-light menucardborder" >
                            <div className="card bg-light" style={{ border: 'none' }}>
                                <div className=" card-body  bordered">
                                    <img src="coconut.png" alt="" className=" coconut1" />
                                    <img src="coconut.png" alt="" className=" coconut2" />
                                </div>
                                <div className=" card-body bordered" style={{ marginTop: '-30px' }}>
                                    <div className="row  pb-2">
                                        <div className="col-12 text-center">
                                            <h3 className="ml- pb-2"><b>DESSERTS</b></h3>
                                        </div>
                                        <div className="row bbottom pb-3">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://t4.ftcdn.net/jpg/05/61/78/69/360_F_561786951_IdQbtR0bga3RzISgodGvIRMFEBqmjfcn.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Veg Roast Source</b></h6>
                                                    <p className="">Meat, Potatoes, Rice, Tomatoe</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h3"><b>$29</b></h5>
                                            </div>
                                        </div>
                                        <div className="row bbottom pb-3">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_640.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Veg Roast Source</b></h6>
                                                    <p className="">Meat, Potatoes, Rice, Tomatoe</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h3"><b>$29</b></h5>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://img.etimg.com/thumb/msid-94248099,width-480,height-360,imgsize-86276,resizemode-75/bread-pakora.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Veg Roast Source</b></h6>
                                                    <p className="">Meat, Potatoes, Rice, Tomatoe</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h3"><b>$29</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 bg-light menucardborder">
                            <div className="card bg-light" style={{ border: 'none' }}>
                                <div className=" card-body  bordered">
                                    <img src="coconut.png" alt="" className=" coconut1" />
                                    <img src="coconut.png" alt="" className=" coconut2" />
                                </div>
                                <div className=" card-body bordered" style={{ marginTop: '-30px' }}>
                                    <div className="row  pb-2">
                                        <div className="col-12 text-center">
                                            <h3 className="ml- pb-2"><b>WINE CARD</b></h3>
                                        </div>
                                        <div className="row bbottom pb-3">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://t4.ftcdn.net/jpg/05/61/78/69/360_F_561786951_IdQbtR0bga3RzISgodGvIRMFEBqmjfcn.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Veg Roast Source</b></h6>
                                                    <p className="">Meat, Potatoes, Rice, Tomatoe</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h3"><b>$29</b></h5>
                                            </div>
                                        </div>
                                        <div className="row bbottom pb-3">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_640.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Veg Roast Source</b></h6>
                                                    <p className="">Meat, Potatoes, Rice, Tomatoe</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h3"><b>$29</b></h5>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://img.etimg.com/thumb/msid-94248099,width-480,height-360,imgsize-86276,resizemode-75/bread-pakora.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Veg Roast Source</b></h6>
                                                    <p className="">Meat, Potatoes, Rice, Tomatoe</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h3"><b>$29</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 bg-light menucardborder"  >
                            <div className="card bg-light" style={{ border: 'none' }}>
                                <div className=" card-body  bordered">
                                    <img src="coconut.png" alt="" className=" coconut1" />
                                    <img src="coconut.png" alt="" className=" coconut2" />
                                </div>
                                <div className=" card-body bordered" style={{ marginTop: '-30px' }}>
                                    <div className="row  pb-2">
                                        <div className="col-12 text-center">
                                            <h3 className="ml- pb-2"><b>DRINKS & TEA</b></h3>
                                        </div>
                                        <div className="row bbottom pb-3">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://t4.ftcdn.net/jpg/05/61/78/69/360_F_561786951_IdQbtR0bga3RzISgodGvIRMFEBqmjfcn.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Veg Roast Source</b></h6>
                                                    <p className="">Meat, Potatoes, Rice, Tomatoe</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h3"><b>$29</b></h5>
                                            </div>
                                        </div>
                                        <div className="row bbottom pb-3">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_640.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Veg Roast Source</b></h6>
                                                    <p className="">Meat, Potatoes, Rice, Tomatoe</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h3"><b>$29</b></h5>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://img.etimg.com/thumb/msid-94248099,width-480,height-360,imgsize-86276,resizemode-75/bread-pakora.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Veg Roast Source</b></h6>
                                                    <p className="">Meat, Potatoes, Rice, Tomatoe</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h3"><b>$29</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-unstyled d-flex cursor-pointer justify-content-around">
                            <li onClick={() => setMenuType(1)}>Breakfast</li>
                            <li onClick={() => setMenuType(2)}>Lunch</li>
                            <li onClick={() => setMenuType(3)}>Dinner</li>
                            <li onClick={() => setMenuType(0)}>All</li>
                        </ul>
                    </div>
                    {filterMenu.map(men => (
                        <div className="col-md-4" key={men.id}>
                            {/* <div className="card">
                                <div className="card-header">
                                    {men.dish_name}
                                </div>
                                <div className="card-body">
                                    <button onClick={() => orderItem(men.id)} className="btn btn-primary">Order it</button>
                                </div>
                                <div className="card-footer">
                                    {men.dish_price}
                                </div>
                            </div> */}
                            <div className="row bbottom pb-3">
                                <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                    <img src={"http://localhost:5000/uploads/" + men.dish_image} className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                    <div className="ml-4 conatin">
                                        <h6 onClick={() => orderItem(men.id)} className="texthover cursor-pointer"><b>{men.dish_name}</b></h6>
                                        <p className="">{men.dish_contents}</p></div>
                                </div>
                                <div className="col-3 mt-4">
                                    <h5 className="danger h3"><b>&#8377;&nbsp;{men.dish_price}</b></h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


