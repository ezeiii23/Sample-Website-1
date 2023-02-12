import "./App.css";
import { LoremIpsum } from "react-lorem-ipsum";
import Carousel from "react-bootstrap/Carousel";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
function App() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: isVisible ? 1 : 0 },
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });
    observer.observe(ref.current);
  }, [ref]);
  return (
    <div className="">
      <Header />
      <div className="container-fluid ">
        <div className="bg-dark p-5"></div>
        <div className="img-container p-2 animation-cover">
          <img
            src={"img/3.jpg"}
            class="img-fluid cover-image img-hover image-opacity"
            alt=""
          />
          <div className="middle-text">
            <div className="text">BUY NOW</div>
          </div>
        </div>
        <div className="bg-dark p-5"></div>
        <div>
          <div className="carousel-height p-2">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-img"
                  src="img/1c.jpg"
                  alt="1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-img"
                  src="img/2c.jpg"
                  alt="2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-img"
                  src="img/3c.jpg"
                  alt="3"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-img"
                  src="img/4c.jpg"
                  alt="4"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-img"
                  src="img/5c.jpg"
                  alt="5"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="bg-dark p-5 mt-4">
          <div className="text-color ">
            <figure>
              <blockquote class="blockquote">
                <LoremIpsum />
              </blockquote>
              <figcaption class="blockquote-footer">
                Unknown <cite title="Source Title"></cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-lg-6">
            <animated.img
              ref={ref}
              style={fadeIn}
              onLoad={() => setIsVisible(true)}
              src="img/content1.jpg"
              alt="5"
              className="d-block w-100 content-img"
            />
          </div>
          {/* <div className="col-lg-6">
              <img
                src="img/content1.jpg"
                alt="5"
                className="d-block w-100 content-img" />
            </div> */}

          <div className="col-lg-6">
            <h1>PRODUCT NAME</h1>
            <h3>BRAND</h3>
            <h2>PRICE</h2>
            <div className="text-color mt-5 ">
              <LoremIpsum />
              <div>
                Add to Cart
                <img
                  src={"img/2.png"}
                  width="47"
                  height="47"
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark p-2 "></div>
        <div className="row p-2">
          <div className="col-lg-6 text-end">
            <h1>PRODUCT NAME</h1>
            <h3>BRAND</h3>
            <h2>PRICE</h2>
            <div className="text-color mt-5">
              <LoremIpsum />
              <div>
                Add to Cart
                <img
                  src={"img/2.png"}
                  width="47"
                  height="47"
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <animated.img
              ref={ref}
              style={fadeIn}
              onLoad={() => setIsVisible(true)}
              src="img/content2.jpg"
              alt="5"
              className="d-block w-100 content-img"
            />
            {/* <img
              src="img/content2.jpg"
              alt="5"
              className="d-block w-100 content-img"
            /> */}
          </div>
        </div>
        <div className="bg-dark p-2"></div>
        <div className="row p-2">
          <div className="col-lg-6">
            <animated.img
              ref={ref}
              style={fadeIn}
              onLoad={() => setIsVisible(true)}
              src="img/content3.jpg"
              alt="5"
              className="d-block w-100 content-img"
            />
            {/* <img
              src="img/content3.jpg"
              alt="5"
              className="d-block w-100 content-img"
            /> */}
          </div>
          <div className="col-lg-6">
            <h1>PRODUCT NAME</h1>
            <h3>BRAND</h3>
            <h2>PRICE</h2>
            <div className="text-color mt-5">
              <LoremIpsum />
              <div>
                Add to Cart
                <img
                  src={"img/2.png"}
                  width="47"
                  height="47"
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark p-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
