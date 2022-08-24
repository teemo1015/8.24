import React from "react";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container flex">
          <div className="left">
            <div className="img">
              <img src="./images/banner.jpg" alt="" />
            </div>
          </div>
          <div className="right topMarign">
            <h1>
              你的網站夠快嗎？
              <br />
              打造快速的網站
            </h1>
            <div className="SocailIcon">
              <i className="fab fa-facebook-f facebook"></i>
              <i className="fab fa-instagram instagram"></i>
              <i className="fab fa-twitter twitter"></i>
              <i className="fab fa-youtube youtube"></i>
              <i className="fab fa-pinterest pinterest"></i>
              <i className="fab fa-dribbble dribbble"></i>
            </div>
            <p>
              Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis. eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </p>
            <button className="primary-btn">Contact Us</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
