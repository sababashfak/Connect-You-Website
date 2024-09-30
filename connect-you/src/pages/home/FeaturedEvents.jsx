import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../../components/Cards';
import { } from "react-icons/fa6"
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const simpleNextArrow = (props) => {
  const {className, style, onClick} = props;
  return(
    <div className={className} style={{...style, display: "block", background: "red"}} 
    onClick={onClick}
    >Next</div>  
  );
};

const simplePrevArrow = (props) => {
  const {className, style, onClick} = props;
  return(
    <div className={className} style={{...style, display: "block", background: "green"}} 
    onClick={onClick}
    >Back</div>  
  );
};


function FeaturedEvents() {

  const[events, setEvents] = useState([]);
  const slider = React.useRef(null)

  useEffect(() => {
    fetch("/events.json").then(res => res.json()).then(data => {
      //console.log(data);
      const featured = data.filter((item) => item.featured === true )
      //console.log(featured);
      setEvents(featured)
    });
  
  },[ ]);

  //Settings of React Slick
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <simpleNextArrow/>,
    prevArrow: <simplePrevArrow/>
  };



  

  return (
    <div className='section-container my-20'>
        <div className='text-left'>
            <p className='subtitle'>
                Featured Events
            </p>
            <h2 className='title md:w-[520px]' >
              Most Awaiting Upcoming Events
            </h2>
        </div>


        {/** arrow btn */}
        <div className='  right-3 top-8 mb-10 md:mr-24'>
          <button onClick={() => slider?.current?.slickPrev()} className='btn p-2 rounded-full ml-5'>
            <FaAngleLeft className='w=8 h=8 p-2'/>
          </button>
          <button onClick={() => slider?.current?.slickNext()} className='btn p-2 rounded-full ml-5 bg-orange'>
            <FaAngleRight className='w=8 h=8 p-2'/>
          </button>

        </div>

        <Slider ref={slider} {...settings}>
        {
          events.map((item,i) => (
            <Cards key={i} event={item}/>
          ))
        }
      </Slider>

    </div>
  )
}

export default FeaturedEvents