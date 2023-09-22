import React, { Component } from "react";
import styled from 'styled-components'
import pix2 from "../Assets/boom1.webp"
// import pix3 from "../Assets/boom2.webp"
import pix4 from "../Assets/boom3.webp"
import pix5 from "../Assets/boom4.webp"
import pix6 from "../Assets/boom 5.webp"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


  class HomeScreen extends Component {
    render() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      }

  return (
    <div>
        <Container>
            <Main>
            <Slider {...settings}>
            <Wrap src={pix2}/>
            <Wrap src={pix4}/>
            <Wrap src={pix5}/>
            <Wrap src={pix6}/>
            </Slider>

            
            </Main>
        </Container>
    </div>
  )
}
  }

export default HomeScreen


const Wrap = styled.img`
margin: 0 15px;
width: 150px;
height: 330px;
`

const Main = styled.div`
width:90%;
height:50%;
margin-left: 49px;
margin-top: 12px;
/* position: absolute; */

/* background-color:red; */
/* display:flex;
justify-content:center; */
`

const Container = styled.div`
width: 100%;
height: 350px;
display:flex;
justify-content:center;
/* align-items: center; */
/* background: orange; */

`