import React from "react";


export default function Section(){
    return(
        <>
       <header>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 main text-center">Section</div>
            </div>
        </div>
        </header> 

        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-12  middle zoom-image">
                             <div className="row">
                             <div className="col-md-4 col-4 hotel ">
                            <img src="/img/private.jpg" height={"250px"} width={"100%"}/>
                            <p className="text-dark l mt-3">PRIVATE</p>
                         </div>
                         <div className="col-md-4 col-4 ">
                            <img src="/img/public.jpg" height={"250px"}  width={"100%"}/>
                            <p className="text-dark mt-3">PUBLIC</p>
                         </div>
                         <div className="col-md-4 col-4 ">
                            <img src="/img/family-section.jpg " height={"250px"}  width={"100%"}/>
                            <p className="text-dark mt-3">FAMILY</p>
                         </div></div>
                    </div>
                </div>
            </div>
        </section>
        
   
        </>
    )
}