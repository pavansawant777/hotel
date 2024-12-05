import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Menu() {
    useEffect(() => {
        AOS.init({ duration: 4000 });
    }, []);
    return (
        <>
            {/* <h1>Home</h1> */}
            <section>
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
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4EtxPKIxyASCXwJCJvN2RcNCFShYCFs9oFLPAdb2GRPFJP2-" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Rava idli
                                                    </b></h6>
                                                    <p className=""> Oil, Potatoes, Samber</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h4"><b>₹80</b></h5>
                                            </div>
                                        </div>

                                        <div className="row bbottom pb-3">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTBrgWqSRMNmUpzouQP9nC8jyxnWYBZcXegvh0s3Igd9rklggbQ" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Dosa
                                                    </b></h6>
                                                    <p className=""> rava, semolina, rice rava</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h4"><b>₹90</b></h5>
                                            </div>
                                        </div>

                                        <div className="row bbottom pb-3">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="http://t1.gstatic.com/images?q=tbn:ANd9GcTlHYwrskmTn_by6Xk4BBJCIsXzyZqO0T4jt6Ev8lMK5LnbaOD2Gz9xkcexGCL8iSiA23OJ" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>French toast</b></h6>
                                                    <p className="">eggs, milk, cream, pan-fried</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h4"><b>₹90</b></h5>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://c.ndtvimg.com/2021-05/gpnu7igs_-curd-upma_640x480_17_May_21.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Upma</b></h6>
                                                    <p className="">Reva, semolina, green chilies, vegetables, oil</p></div>
                                            </div>
                                            <div className="col-3 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <h5 className="danger h4"><b >₹70</b></h5>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/poori-puri-recipe-768x1152.jpg.webp" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Halwa poori</b></h6>
                                                    <p className="">Chapati flour, black chickpeas, tamarind paste, garam masala</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h4"><b>₹99</b></h5>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://www.allrecipes.com/thmb/JS43mD2rA6_cCs9eTlXNGRHT5oQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5143634-ac5ad80b28f44c53bd0fd6d570f61f0d.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Cheese omelette</b></h6>
                                                    <p className="">Butter, Milk,Cheese, oil</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h4"><b>₹99</b></h5>
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
                                                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQVZUPEPI6jspZfGC2LgZTc33_mfpITikXOuE0mXAFesNSKhhzq" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Paneer butter masala</b></h6>
                                                    <p className="">Paneer, garam masala, vegetables </p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h6 className="danger h4"><b>₹250</b></h6>
                                            </div>
                                        </div>
                                        <div className="row bbottom pb-3">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://minimalistbaker.com/wp-content/uploads/2016/02/AMAZING-Chana-Masala-made-in-1-Pot-So-healthy-flavorful-and-delicious-vegan-glutenfree-chanamasala-recipe-minimalistbaker.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Chana Masala </b></h6>
                                                    <p className="">Chana, garam masala, vegetables</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h4"><b>₹220</b></h5>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://rainbowplantlife.com/wp-content/uploads/2021/06/Dal-Makhani-edited-photos-5-of-6.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Dal makhani</b></h6>
                                                    <p className="">Urad ki Dal, Mash ki Dal, garam masala, vegetables</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h4"><b>₹230</b></h5>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmS7qVvLisBtTcTn6QXhOcLLHqSYwRwFcbg&s" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Aloo gobi</b></h6>
                                                    <p className="">Potatoes, tomato paste, garam masala, ginger</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h4"><b>₹220</b></h5>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Punjabi-Aloo-Matar-Recipe.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Aloo Matar </b></h6>
                                                    <p className="">Potatoes, green peas, garam masala, kasuri meth</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h4"><b>₹230</b></h5>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2020/06/palak-paneer-recipe.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Palak Paneer</b></h6>
                                                    <p className="">Panner, garam masala, vegetables</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h4"><b>₹230</b></h5>
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
                                                <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2023/02/paneer-curry-dhaba-style-768x1152.jpg.webp" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Paneer achaari</b></h6>
                                                    <p className=""> Paneer, garam masala, vegetables, Tomatoe past</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h4"><b>₹260</b></h5>
                                            </div>
                                        </div>
                                        <div className="row bbottom pb-3">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="http://t2.gstatic.com/images?q=tbn:ANd9GcSPmeZnEoyK604gEP48eVk3VgkbkxhPandPNQms5x9AjHm4go_v" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Capsicum rice </b></h6>
                                                    <p className="">Rice, garam masala, vegetables</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h4"><b>₹240</b></h5>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="http://t1.gstatic.com/images?q=tbn:ANd9GcRxQlUSM1NTlRNlqCDEbPSCkjPivUozCf6mBhr3YesoBgH2JuiP" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Dum Aloo</b></h6>
                                                    <p className="">Meat, Potatoes, Garam Masala, Tomatoe</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h4"><b>₹220</b></h5>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Kale-Slaw-Spring-Salad_EXPS_BMZ19_197793_E11_30_8b-10.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Vegetarian linguine</b></h6>
                                                    <p className="">Vegetables, Cheese, Potatoes, Garam Masala, Tomatoe</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h4"><b>₹240</b></h5>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="http://t0.gstatic.com/images?q=tbn:ANd9GcSUGJrIkNcJX6aza4iq6Co41ie0QsnmuJEt0GKo5qxWs6aghOD0" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Gujarati Kadhi</b></h6>
                                                    <p className="">Vegetables, Curd,  Garam Masala</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h4"><b>₹230</b></h5>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="http://t2.gstatic.com/images?q=tbn:ANd9GcS-odKey4kvPHnTi_a-4PoSWUZynZt4fsYPOTW0VFJcovUpBkPG" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Rajma Chawal</b></h6>
                                                    <p className="">Vegetables, Rajma,  Garam Masala</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h4"><b>₹220</b></h5>
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
                                                <img src="http://t3.gstatic.com/images?q=tbn:ANd9GcTMIgrKKZV1NPDUUyjZlzr1rVxB4Q6UQmFK-1gO8PYfMXcxl4ot" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Brownies</b></h6>
                                                    <p className=""> Cocoa powder and chocolate chips,</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h4"><b>₹90</b></h5>
                                            </div>
                                        </div>
                                        <div className="row bbottom pb-3">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://sallysbakingaddiction.com/wp-content/uploads/2014/05/sugar-cookies-300x450.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Cookies</b></h6>
                                                    <p className="">Brown sugar, chocolate chips, egg, baking soda, vanilla</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h4"><b>₹150</b></h5>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFVsbIdI93PrfsDNrLZQUlV4NFvKfdXYkwrH5G5pbGgkG3oxdlgHEgiUHRVaq7DzFHS6I&usqp=CAU" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Cheesecake</b></h6>
                                                    <p className="">Cream cheese, sour cream, graham cracker crumbs, lemon</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h4"><b>₹140</b></h5>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://hips.hearstapps.com/hmg-prod/images/chocolate-martini-pin-1547505235.jpg?crop=1xw:0.9453781512605042xh;center,top&resize=980:*" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Chocolate cobbler</b></h6>
                                                    <p className="">Self rising flour, unsweetened cocoa powder, white sugar</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h4"><b>₹120</b></h5>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://www.whiskaffair.com/wp-content/uploads/2018/08/Paneer-Kheer-2-3-378x504.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Custards</b></h6>
                                                    <p className=""> cream, milk, puddings, custards</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h4"><b>₹150</b></h5>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-9 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://www.southernliving.com/thmb/Tm6pTL_SQpgooylc-Zel3VJi4r4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2425701_50yea45211_1_1_0_1-02a7d1055d9a4c0cb2980140bfbd936b.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Double chocolate peanut butter pie</b></h6>
                                                    <p className=""> Creamy peanut butter, cream cheese, cool whip</p></div>
                                            </div>
                                            <div className="col-3 mt-4">
                                                <h5 className="danger h4"><b>₹160</b></h5>
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
                                            <div className="col-9  col-md-8 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://www.virginwines.co.uk/hub/wp-content/uploads/2021/06/Bottle-of-De-Martino-Single-Vineyard-La-Cancha-2017-with-a-glass-of-red-wine-on-a-table-in-front-of-a-window.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover "><b>Cabernet Sauvignon</b></h6>
                                                     <br/>
                                                    </div>
                                            </div>
                                            <div className="col-3 col-md-4 mt-4">
                                                <h6 className="danger text-center  h4"><b>₹2,000</b></h6>
                                            </div>
                                        </div>

                                        <div className="row bbottom pb-3">
                                            <div className="col-9  col-md-8 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://www.virginwines.co.uk/hub/wp-content/uploads/2021/06/Bottle-of-De-Martino-Single-Vineyard-La-Cancha-2017-with-a-glass-of-red-wine-on-a-table-in-front-of-a-window.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover "><b>Cabernet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></h6>
                                                     <br/>
                                                    </div>
                                            </div>
                                            <div className="col-3 col-md-4 mt-4">
                                                <h6 className="danger text-center  h4"><b>₹1,599</b></h6>
                                            </div>
                                        </div>
                                        <div className="row bbottom pb-3">
                                            <div className="col-9  col-md-8 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://www.spencers.in/media/catalog/product/1/1/1100733_1.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover "><b>Sula &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></h6>
                                                     <br/><br/> 
                                                </div>
                                            </div>
                                            <div className="col-3 col-md-4 mt-4">
                                                <h6 className="danger text-center  h4"><b>₹1,899</b></h6>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-9  col-md-8 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="http://t1.gstatic.com/images?q=tbn:ANd9GcTBvUORg5eih3RdHacf5JId6cQSCHzhEktxnivUBx4tex-mcz1X" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover "><b>Syrah &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></h6>
                                                     <br/><br/> 
                                                </div>
                                            </div>
                                            <div className="col-3 col-md-4 mt-4">
                                                <h6 className="danger text-center  h4"><b>₹2,000</b></h6>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-9  col-md-8  mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://www.spencers.in/media/catalog/product/1/2/1259156.jpg" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover "><b>Fratelli &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></h6>
                                                     <br/><br/> 
                                                </div>
                                            </div>
                                            <div className="col-3 col-md-4 mt-4">
                                                <h6 className="danger text-center  h4"><b>₹2,000</b></h6>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-9  col-md-8 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://lh3.googleusercontent.com/hzGPU_PLxaVupMDC_cnYSmOve3usfbcTSLEm9fRFJIKH2UxXb6G3PNkqjcpJc9gXW7hfvyNNVllT59BoDjHaOBAWmR8=w360-rw" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%'}} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover "><b>York &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></h6>
                                                     <br/><br/> 
                                                </div>
                                            </div>
                                            <div className="col-3 col-md-4 mt-4">
                                                <h6 className="danger text-center  h4"><b>₹2,399</b></h6>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-9  col-md-8 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="http://t1.gstatic.com/images?q=tbn:ANd9GcSiXOrX_Dcmtri6nzzskQkGvWaUEz32-0ZyJ8O-0lNegz-L7YZK" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover "><b>Pinot Noir &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></h6>
                                                     <br/><br/> 
                                                </div>
                                            </div>
                                            <div className="col-3 col-md-4 mt-4">
                                                <h6 className="danger text-center  h4"><b>₹3,000</b></h6>
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
                                            <div className="col-9 col-md-8 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://static.toiimg.com/photo/104368492.cms" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Tea &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></h6>
                                                    <br/> <br/><br/> 
                                                </div>
                                            </div>
                                            <div className="col-3 col-md-4 mt-4">
                                                <h5 className="danger h4"><b>₹40</b></h5>
                                                <br/><br/><br/>
                                            </div>
                                        </div>
                                        <div className="row bbottom pb-3">
                                            <div className="col-9 col-md-8 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pltA2U43TSDjBfxH5oQ6wyne1-xVE5eJdg&s" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Cold Coffee &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></h6>
                                                </div>
                                            </div>
                                            <div className="col-3 col-md-4 mt-4">
                                                <h5 className="danger h4"><b>₹120</b></h5>
                                                <br/><br/><br/>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-9 col-md-8 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-ZIobq8RxBro_CYrwSP90Ym7NGwcOOmHTg&s" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Hot Coffee &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></h6>
                                                </div>
                                            </div>
                                            <div className="col-3 col-md-4 mt-4">
                                                <h5 className="danger h4"><b>₹60</b></h5>
                                                <br/><br/><br/>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-9 col-md-8 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://img-mm.manoramaonline.com/content/dam/mm/mo/pachakam/readers-recipe/images/2022/3/22/mango-lessi.jpg?w=575&h=299" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Lassi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></h6>
                                                </div>
                                            </div>
                                            <div className="col-3 col-md-4 mt-4">
                                                <h5 className="danger h4"><b>₹150</b></h5>
                                                <br/><br/><br/>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-9 col-md-8 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCxLfsMuV7sqW6HqR-EUHtdOuFImySvI2KmA&s" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Mastani &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></h6>
                                                </div>
                                            </div>
                                            <div className="col-3 col-md-4 mt-4">
                                                <h5 className="danger h4"><b>₹160</b></h5>
                                                <br/><br/><br/>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-9 col-md-8 mt-4" style={{ display: "flex", flexDirection: 'row' }}>
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIrzW9_zLBNFgNmvDMnaj2Ju9NsfbTiSbQcU2ZTQi9gRuEfXZ6kz1WAO-eCXSyutG8idg&usqp=CAU" className="imghover" alt="" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
                                                <div className="ml-4 conatin">
                                                    <h6 className="texthover"><b>Black Tea &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></h6>
                                                </div>
                                            </div>
                                            <div className="col-3 col-md-4 mt-4">
                                                <h5 className="danger h4"><b>₹60</b></h5>
                                                <br/><br/><br/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>        
    )
}