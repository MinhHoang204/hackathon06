import React, { useState } from 'react'
import "./Banner.scss"
export default function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "./banner/banner-1.jpg",
        "./banner/banner-2.jpg",
        "./banner/banner-3.jpg",
        "./banner/banner-4.jpg",
        "./banner/banner-5.jpg",
    ]
            
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0: prev + 1))
    }
    const prevSlide  = () => {

    }
  return (
    <div className="banner">
  {/* Images */}
  <div className="slides fade">
    <img
      className="banner-images"
      src="banner/banner-1.jpg"
      alt="Banner-1"
      style={{ width: "60%" }}
    />
  </div>
  <div className="slides fade">
    <img
      className="banner-images"
      src="banner/banner-2.jpg"
      alt="Banner-2"
      style={{ width: "60%" }}
    />
  </div>
  <div className="slides fade">
    <img
      className="banner-images"
      src="banner/banner-3.jpg"
      alt="Banner-3"
      style={{ width: "60%" }}
    />
  </div>
  <div className="slides fade">
    <img
      className="banner-images"
      src="banner/banner-4.jpg"
      alt="Banner-4"
      style={{ width: "60%" }}
    />
  </div>
  <div className="slides fade">
    <img
      className="banner-images"
      src="banner/banner-5.jpg"
      alt="Banner-4"
      style={{ width: "60%" }}
    />
  </div>
  {/* Next and previous buttons */}
  <a className="prev" >
    ❮
  </a>
  <a className="next">
    ❯
  </a>
</div>
  )
}
