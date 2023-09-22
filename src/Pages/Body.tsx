import {useState} from "react"
// import { LiaHandHoldingHeartSolid } from "react-icons/lia"
import styled from "styled-components"
import pix from "../Assets/boom.webp"
import pix2 from "../Assets/boom1.webp"
import pix3 from "../Assets/boom2.webp"
import pix4 from "../Assets/boom3.webp"
import pix5 from "../Assets/boom4.webp"
import pix6 from "../Assets/boom 5.webp"
import {RiPlayCircleFill} from "react-icons/ri"
import HomeScreen from "./Slider"
// import Download from "../Pages/Contact"

// import { url } from "inspector"


const Hero = () =>{
  const [show,setShow] = useState<boolean>(false)

  const change = () =>{
    setShow(!show)
  }
const [scrollTop, setScrollTop] = useState(false)

  const ScrollToTop = () => {
    if (scrollTop && window.pageYOffset > 100) {
      setScrollTop(true)
    } else if (
      scrollTop && window.pageYOffset <= 70
    )
      setScrollTop(false)
  }

  const Scroll = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  window.addEventListener("scroll", ScrollToTop)
  return(
    <div>
        <Container>
          <Wrapper>
         <UP>
          <HomeScreen />
         </UP>
         <Circle1 onClick={Scroll}></Circle1>
         <CardHolder>
              <Card >
                <Img src = {pix} onMouseEnter={change} onMouseOut={change}/>
             {
              show?  <Cover1>
              <Icon/>
            </Cover1>
              : null
             }
           <Daily><p>Daily Trending</p></Daily>
              </Card>
              <Card>
                <Img src = {pix2} />
                <p>Fresh Afrobeats</p>
              </Card>
              <Card>
                <Img src = {pix3} />
                <p>Fresh Hiphop</p>
              </Card>
              <Card>
                <Img src = {pix4} />
                <p>Fresh Pop</p>
              </Card>
              <Card>
                <Img src = {pix5} />
                <p>Remembering Imole</p>
              </Card>
              <Card>
                <Img src = {pix6} />
                <p>New Global Music</p>
              </Card>
            </CardHolder>
            <CardHolder>
              <Card>
                <Img src = {pix} />
                <p>Daily Trending</p>
              </Card>
              <Card>
                <Img src = {pix2} />
                <p>Fresh Afrobeats</p>
              </Card>
              <Card>
                <Img src = {pix3} />
                <p>Fresh Hiphop</p>
              </Card>
              <Card>
                <Img src = {pix4} />
                <p>Fresh Pop</p>
              </Card>
              <Card>
                <Img src = {pix5} />
                <p>Remembering Imole</p>
              </Card>
              <Card>
                <Img src = {pix6} />
                <p>New Global Music</p>
              </Card>
            </CardHolder>
            <CardHolder>
              <Card>
                <Img src = {pix} />
                <p>Daily Trending</p>
              </Card>
              <Card>
                <Img src = {pix2} />
                <p>Fresh Afrobeats</p>
              </Card>
              <Card>
                <Img src = {pix3} />
                <p>Fresh Hiphop</p>
              </Card>
              <Card>
                <Img src = {pix4} />
                <p>Fresh Pop</p>
              </Card>
              <Card>
                <Img src = {pix5} />
                <p>Remembering Imole</p>
              </Card>
              <Card>
                <Img src = {pix6} />
                <p>New Global Music</p>
              </Card>
            </CardHolder>
            <CardHolder>
              <Card>
                <Img src = {pix} />
                <p>Daily Trending</p>
              </Card>
              <Card>
                <Img src = {pix2} />
                <p>Fresh Afrobeats</p>
              </Card>
              <Card>
                <Img src = {pix3} />
                <p>Fresh Hiphop</p>
              </Card>
              <Card>
                <Img src = {pix4} />
                <p>Fresh Pop</p>
              </Card>
              <Card>
                <Img src = {pix5} />
                <p>Remembering Imole</p>
              </Card>
              <Card>
                <Img src = {pix6} />
                <p>New Global Music</p>
              </Card>
            </CardHolder>
            <CardHolder>
              <Card>
                <Img src = {pix} />
                <p>Daily Trending</p>
              </Card>
              <Card>
                <Img src = {pix2} />
                <p>Fresh Afrobeats</p>
              </Card>
              <Card>
                <Img src = {pix3} />
                <p>Fresh Hiphop</p>
              </Card>
              <Card>
                <Img src = {pix4} />
                <p>Fresh Pop</p>
              </Card>
              <Card>
                <Img src = {pix5} />
                <p>Remembering Imole</p>
              </Card>
              <Card>
                <Img src = {pix6} />
                <p>New Global Music</p>
              </Card>
            </CardHolder>
          </Wrapper>
        </Container>
    </div>
  )
}

export default Hero;
const Circle1 = styled.div`
  width: 50px;
  height: 50px;
  background: white;
  /* align-items: flex-end; */
  border-radius: 50%;
  /* justify-content: flex-end; */
  position: absolute;
  right: 0;
  right: 25px;
  bottom:-760px;
  z-index: 9;
`
const Daily = styled.div``

const Cover1 = styled.div`
height:96%;
width: 97%;
border-radius: 8px;
transition: all 350ms;
background:rgba(0,0,0,0.4) ;
position: relative;
bottom: 174px;
display: flex;
align-items: center;
justify-content: center;

/* background: transparent; */
`

const Icon = styled(RiPlayCircleFill)`
padding: 10px;
cursor: pointer;
 /* transition: all 350ms; */
 /* opacity: 0; */
  /* position: absolute; */
   right: 0;
   color: white;
   transition: all 350ms;
   margin-top: 60px;
  width: 40px;
 height: 40px;
  
`
const Img = styled.img`
height:96%;
width: 97%;
border-radius: 8px;
position: relative;
margin-top: 20px;
`
const Card = styled.div`
height: 177px;
width: 177px;
/* background-color: green; */
border: 1px light silver;
border-radius: 8px;
 cursor: pointer;
 margin-left: 80px;
p {
 color: grey;
 } 



`
 const CardHolder = styled.div`
display: flex; 
 /* align-items: center; */
 justify-content: space-around; 
 flex-direction: rows;
 background-color: black;
 height: 250px;
 width: 100%;
 

 flex: wrap;
`
const UP = styled.div`
  width: 100%;
  height: 350px;
  /* background-color: grey; */
 /* position: relative; */

 @media screen and (max-width: 789){
   display: none;
}
`
const Wrapper = styled.div`
width: 89%;
height: 100%;
background-color: black;
`

const Container = styled.div`
width: 98.5vw;
height:100vh;
background-color: red;
display: flex;
align-items: flex-end;
justify-content: end;
margin-top: 50px;
margin-left: 6.9px;

@media screen and (max-width: 789){
   display: none;
}
`