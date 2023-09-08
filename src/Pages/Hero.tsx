import React, {useState, useEffect, useRef} from 'react'
import styled from "styled-components"
import image from "../Assets/blitz.svg"
import image1 from "../Assets/loom.svg"
import image2 from "../Assets/okta.svg"
import image3 from "../Assets/hashicorp.svg"
import image4 from "../Assets/ebay.svg"
import image5 from "../Assets/react.svg"
import image6 from "../Assets/tailwindcss_logo.svg"
import image7 from "../Assets/ui-reviews-dark.png"
import image8 from "../Assets/under-armour.svg"


const Hero = () => {
  const [show, setShow] = useState(true)

  const force = () => {
    setShow(!show)
  }
  const force1 = () => {
    setShow(show)
}

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const Target = new Date ("9/8/2023 11:59:59")
    const interval = setInterval(() => {
        const now = new Date ()
        const difference = Target.getTime() - now.getTime() 

        const d = Math.floor(difference/(1000 * 60 * 60 * 24))
        setDays(d)
        const h = Math.floor((difference %(1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
        setHours(h)
        const m = Math.floor((difference %(1000 * 60 * 60) / (1000 * 60)))
        setMinutes(m)
        const s = Math.floor((difference % (1000 * 60) / (1000)))
        setSeconds(s)
    }, 1000)
    return () => clearInterval(interval)
  }, [])


  const Dev: string[] = [
    "background-image: linear-gradient(to right, #007cf0, #83fffb); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent",
    "white",
    "white"
  ]

  const Prev: string[] = [
    "white",
    "background-image: linear-gradient(to right, #7928ca,  #ff0080); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent",
    "white"
  ]

  const Shi: string[] = [
    "white",
    "white",
    "background-image: linear-gradient(to right, #ff4d4d, #f9cb28); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
  ]

  const Butto: string[] = [
    "background-image: linear-gradient(to right, #007cf0, #83fffb); border-clip: border; -webkit-background-clip: border; -webkit-background-fill-color: transparent",
    "background-image: linear-gradient(to right, #7928ca,  #ff0080); border-clip: border; -webkit-background-clip: border; -webkit-background-fill-color: transparent",
    "background-image: linear-gradient(to right, #ff4d4d, #f9cb28); border-clip: border; -webkit-background-clip: border; -webkit-background-fill-color: transparent;",
    // "box-shadow: linear-gradient(to right, #ff4d4d, #f9cb28); border-clip: border; -webkit-background-clip: border; -webkit-background-fill-color: transparent;"
  ]
  const Hover: string[] = [
    "background-image: linear-gradient(to right, #007cf0, #83fffb); border-clip: border; -webkit-background-clip: border; -webkit-background-fill-color: transparent",
    "background-image: linear-gradient(to right, #7928ca,  #ff0080); border-clip: border; -webkit-background-clip: border; -webkit-background-fill-color: transparent",
    "background-image: linear-gradient(to right, #ff4d4d, #f9cb28); border-clip: border; -webkit-background-clip: border; -webkit-background-fill-color: transparent;",
  ]

  let Dev_ref: any = useRef()
  let Prev_ref: any = useRef()
  let Shi_ref: any = useRef()
  let Butto_ref: any = useRef()
  let border: any = useRef()

  const [count, setCount] = useState(0)

  useEffect(() => {
    Dev_ref.current.style = Dev[count % Dev.length]
    Prev_ref.current.style = Prev[count % Prev.length]
    Shi_ref.current.style = Shi[count % Shi.length]
    Butto_ref.current.style = Butto[count % Butto.length]
  })

  useEffect(() => {
    setInterval(() => {
      setCount((el) => el + 1/2 )
    }, 3000)
  }, [])
  useEffect(() => {
    border.current.style = Hover[count % Hover.length]
  })
  
  return (
    <Container>
      <Holder>
        <Hold>
        <Develop ref={Dev_ref}>Develop.</Develop>
         <Develop ref={Prev_ref}>Preview.</Develop>
        <Develop ref={Shi_ref}>Ship.</Develop>

        </Hold>
        <Card>
                Vercel's frontend cloud gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized Web.
            </Card>
 
            <ButtonWrapper>
            <Button>
            <svg width="30" height="20" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path
            d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#fff"/></svg>
             <div>Start Deploying</div>
            </Button>
            <Button2 ref={Butto_ref} onMouseOver= {border}>
            {show ? (
            <div onClick= {force} onMouseOut= {force1}>Get a Demo</div>
            ): null}
            </Button2>
          </ButtonWrapper>
          <Div1>TRUSTED BY THE BEST FRONT END TEAM</Div1>

          <IconsHolder>
              <Icon1>
                <Image src={image}/>
                <Image src={image1} />
                <Image src={image2} />
                <Image src={image3} />
                <Image src={image4} />
              </Icon1>
              <Icon1>
                <Image src={image} />
                <Image src={image5} />
                <Image src={image6} />
                <Image src={image3} />
                <Image src={image8} />
              </Icon1>
              <Div1>EXPLORE THE VERCEL WAY</Div1>
          </IconsHolder>
          <Hero1>
            <Join>
            <Hr></Hr>
            <Circle>1</Circle>
            <P>Develope</P>
           <H1>Build when inspiration strikes</H1>
            <P1>Free developers from time-consuming, unnecessary processes<br /> that slow your work, so you and your team can focus on creating.</P1>
            </Join>
          </Hero1>
          <Page>
             <Images1>
              <Image1 src={image7} />
             </Images1>
             <Text>
              <One>
              <H2>Build when inspiration strikes</H2>
            <P2>Everything you need to build your site exactly how you imagine,<br /> from automatic API handling to built-in image and performance<br />optimizations.</P2>
              </One>
              <Two>
              <H2>Build when inspiration strikes</H2>
            <P2>Everything you need to build your site exactly how you imagine,<br /> from automatic API handling to built-in image and performance<br />optimizations.</P2>
              </Two>
              <Three>
              <H2>Build when inspiration strikes</H2>
            <P2>Everything you need to build your site exactly how you imagine,<br /> from automatic API handling to built-in image and performance<br />optimizations.</P2>
              </Three>
             </Text>
          </Page>
          <Hero1>
            <Join>
            <Hr></Hr>
            <Circle>1</Circle>
            <P>Develope</P>
           <H1>Build when inspiration strikes</H1>
            <P1>Free developers from time-consuming, unnecessary processes<br /> that slow your work, so you and your team can focus on creating.</P1>
            </Join>
          </Hero1>
        <Wrap>
          <Daysdiv>
            <Holds>{days} :</Holds>
            <Div>Days</Div>
          </Daysdiv>
          <Daysdiv>
            <Holds>{hours} :</Holds>
            <Div>Hours</Div>
          </Daysdiv>
          <Daysdiv>
            <Holds>{minutes} :</Holds>
            <Div>Minutes</Div>
          </Daysdiv>
          <Daysdiv>
            <Holds>{seconds} :</Holds>
            <Div>Seconds</Div>
        </Daysdiv>
        </Wrap>
      </Holder>
    </Container>
  )
}

export default Hero
const P2 = styled.div`
font-size: 17px;
font-weight: 500;
color: #666666;
padding-top: 23px;
`
const H2 = styled.div`
font-size: 29px;
font-weight: bold;
color: #fff;
`
const One = styled.div`
width: 520px;
height: 160px;
// background-color: blue;
`
const Two = styled.div`
width: 520px;
height: 160px;
// background-color: green;
`
const Three = styled.div`
width: 520px;
height: 160px;
// background-color: brown;
`
const Image1 = styled.img`
width: 570px;
height: 500px;
`
const Images1 = styled.div`
width: 37%;
height: 500px;
// background-color: blue;
`
const Text = styled.div`
width: 40%;
height: 570px;
// background-color: orange;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`

const Page = styled.div`
width: 100%;
height: 700px;
// background-color: pink;
margin-top: 96px;
display: flex;
justify-content: space-around;
align-items: center
`
const P1 = styled.div`
font-size: 25px;
font-weight: 500;
color: #666666;
text-align: center;
`
const H1 = styled.div`
font-size: 40px;
font-weight: bold;
color: #fff;
`
const P = styled.p`
font-size: 20px;
font-weight: bold;
position: relative;
bottom: 20px;
color: blue;
`
const Join = styled.div`
width: 100%;
height: 400px;
// background-color: green;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 70px;
`
const Circle = styled.div`
height: 45px;
width: 42px;
background-color:  blue;
border-radius: 100px;
position: relative;
display: flex;
justify-content: center;
align-items: center;
font-size: 19px;
font-weight: bold;
bottom: 20px;
border: none;
`
const Hr = styled.div`
height: 67px;
width: 3px;
background-color: blue;
margin-bottom: 20px;

`
const Hero1 =styled.div`
width: 100%;
height: 250px;
// background-color: red;
margin-top: 30px;
display: flex;
justify-content: center;
align-items: center;

`
const Image = styled.img`
height: 75px;
width: 75px;
margin-right: 56px;
background-color: #fff;
`
const Icon1 = styled.div`
width: 100%;
height: 80px;
// background-color: blue;
margin-top: 30px;
display: flex;
justify-content: center;
align-items: center;
margin-left: 60px;
`
const IconsHolder = styled.div`
width: 100%;
height: 198px;
// background-color: red;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 30px;
`
const Div1 = styled.div`
  font-size: 17px;
  color: grey;
  font-weight: 600;
  margin-top: 120px;
  letter-spacing: 0.2rem;
  position: relative;
  bottom: 60px;
`
const Button = styled.div`
width: 220px;
height: 49px;
background-color: #171717;
display: flex;
justify-content: center;
align-items: center;
color: white;
border-radius: 10px;
cursor: pointer;
1px solid transparent;
position: relative;
bottom: 60px;

div{
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  margin-left: 8px;
}


&:hover{
  background-color: grey;
  color: black;
}
`;
const Button2 = styled.div`
width: 220px;
height: 45px;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
border-radius: 10px;
// border: 1px solid crimson;
cursor: pointer;
margin-left: 20px;
position: relative;
bottom: 60px;

animation: shake 1s infinite alternate;
    animation-duration: 1s;
    animation-delay: 0s;
    

    @keyframes shake {
    0% {
      transform: translate(0, 0) rotate(0)
    }
    100% {
      transform: translate(2px, 2px) rotate(1deg)
    }
  }

div{
  // margin: 0;
  height: 41px;
  width: 218px;
  font-size: 19px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  border-radius: 10px;
  // margin-left: 8px;
&:hover{
  background:transparent ;
}
}

`;
const ButtonWrapper =  styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
`;

// const Span = styled.div`
//      background-clip: text;
//     -webkit-background-clip: text;
//     background-image: linear-gradient(to right, #007cf0, #83fffb);
//     position: relative;
//     animation: animated-gradient-title-2 8s infinite;

// @keyframes animated-gradient-title-1 {
//   0%, 16.667%, 100% {
//     opacity: 1;
//   }
//   33.333%, 83.333% {
//     opacity: 0;
//   }

// }
// `
const Div = styled.div`
  color: #fff;
  font-size: 20px;
`
const Holds = styled.div`
color: #fff;
font-size: 25px;
`
const Daysdiv = styled.div`
display: flex;
flex-direction: column;
margin-left: 25px;
align-items: center;
`
const Wrap = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
margin-top: 90px;
`
const Hold = styled.div`
display: flex;
position: relative;
bottom: 60px;

@media screen and (max-width: 1109px) {
      display: block;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      line-height: 12px;
}
@media screen and (max-width: 418px) {
      line-height: 12px;
      font-size: 50px;
      text-align: center;
}
`
const Card = styled.div`
    width: 60%;
    height: 100%;
    font-size: 25px;
    font-weight: 500;
    color: #666666;
    text-align: center;
    position: relative;
    bottom: 60px;

    @media screen and (max-width: 1109px) {
      display: block;
      align-items: center;
      justify-content: center;
      /* line-height: 12px; */
}
`
const Develop = styled.h1`
color: #fff;
font-size: 92px;
font-weight: 900;
margin-right: 15px;

animation: shake 1s infinite alternate;
    animation-duration: 1s;
    animation-delay: 0s;
    

    @keyframes shake {
    0% {
      transform: translate(0, 0) rotate(0)
    }
    100% {
      transform: translate(2px, 2px) rotate(1deg)
    }
  }

@media screen and (max-width: 1109px) {
      font-size: 90px;
      text-align: center;
      padding-bottom: 30px;
      background-position: cover;
}
/* margin: 0; */
`
const Holder = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Container = styled.div`
width: 100%;
height: 100%;
background-color: #000;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-top: 150px;
padding-bottom: 150px;
/* margin-bottom: 150px; */

`