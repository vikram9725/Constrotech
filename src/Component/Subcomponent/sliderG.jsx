import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import '../../Css/sliderG.css'
import axios from 'axios';
import { useEffect } from 'react';
// import jd from '../../dbG.json'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <MdNavigateNext className="icon" />
            </button>
        </div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <GrFormPrevious className="icon" />
            </button>
        </div>
    );
}

const SliderG = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // const dj = jd;
    // const newdj = dj.filter(e => e.id >= 9)

    //  Access Json data
    const [user, setUser] = useState([])
    async function userdata() {
        const a = await axios.get(`./JsonData/dbG.json`)
        if (a.data.length > 0)
            setUser(a.data)
    }
    useEffect(() => {
        userdata();
    }, [])
    // Filter  Json data
    const a = user.filter(e => e.id >= 9)
    return (
        <div className='container mt-5 mb-4'>
            <Slider {...settings} >
                {a && a.map((e, i) => {
                    return (
                        <div className=''>
                            <div key={i} className="card grow ch ">
                                <img src={e.image} className="card-img-top" height='350px' alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{e.title}</h5>
                                    <p className="card-text">{e.body}</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    )
                })}


            </Slider>
        </div>
    )

}

export default SliderG