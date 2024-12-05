import React from "react";
// import './home/home.css';
export default class Slider extends React.Component {
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 p-0">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <button data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" />
                                    <button data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} />
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block img-fluid home_slider_img" src="https://themewagon.github.io/tasteit/images/bg_1.jpg" alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <div className="d-block img-fluid  home_slider_img"style={{backgroundImage:"url('https://themewagon.github.io/tasteit/images/bg_2.jpg')","backgroundRepeat":"no-repeat", backgroundSize:"100% 100%"}}>
                                      </div>
                                    </div>
                                  
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}


