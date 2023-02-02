import React, { Component } from "react";
import Slider from "react-slick";
import sliderimg from "../../images/Silkslider/slideImg1.jpg";
import wallBlock from "../../images/Silkslider/wallblockSlide.jpg";
import Slider2 from "../../images/Silkslider/slideImg2.jpg";
import sand from "../../images/Silkslider/sand.jpg";
import steel from "../../images/Silkslider/steel.jpg";
import steel3 from '../../images/Silkslider/steelimg3.jpg'

export default class ReactSilcSlider extends Component {
  constructor(props) {
    
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {

    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div className="container">
        <h2 className=" text-success d-flex justify-content-center">
          Our Top Material Brands Like This
        </h2>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          <div>
            <h3>
              <img src={sliderimg} width="100%" height="380px" alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={wallBlock} width="100%" height="380px" alt=""  />
            </h3>
          </div>
          <div>
            <h3>
              <img src={Slider2} width="100%" height="380px" alt=""  />
            </h3>
          </div>
          <div>
            <h3>
              <img src={sand} width="100%" height="380px" alt=""  />
            </h3>
          </div>
          <div>
            <h3>
              <img src={steel} width="100%" height="380px" alt=""  />
            </h3>
          </div>
          <div>
            <h3>
              <img src={steel3} width="100%" height="380px" alt=""  />
            </h3>
          </div>
        </Slider>
        <br />
        <div style={{ textAlign: "center" }}>
          <button className="btn btn-outline-success" onClick={this.play}>
            Play
          </button>
          <button className="btn btn-outline-success" onClick={this.pause}>
            Pause
          </button>
        </div>
      </div>
    );
  }
}
