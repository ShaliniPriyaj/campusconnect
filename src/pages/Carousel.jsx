import React from "react";

const Carousel = () => {
  return (
    <div className="detailed-view-bg-container">
      <div className="detailed-view-card-container">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://i.ytimg.com/vi/8sIjd2U0gYM/maxresdefault.jpg" className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src="https://www.careerguide.com/career/wp-content/uploads/2022/12/logoist-34-1.png" className="d-block w-100" alt="Slide 2" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
