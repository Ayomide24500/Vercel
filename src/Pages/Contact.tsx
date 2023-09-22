import styled from "styled-components"
import pix3 from "../Assets/both-removebg-preview.png"
import pix from "../Assets/app_logo1.png"
import pix2 from "../Assets/app_logo2.png"
import pic1 from "../Assets/pc_step1.svg"
import pic2 from "../Assets/pc_step2.svg"
import pic3 from "../Assets/pc_step3.svg"
import Footer from "../common/Footer"

const Download = ()  => {
    return(
        <div>
            <Container>
                <Wrapper>
                    <Text>
                        <Down>Download Boomplay</Down>
                        <Div2>Enjoy millions of tracks on your devices</Div2>
                        
                    </Text>

                    <Boxes>
                        <Box>
                           <Image> <Img src= {pix}/></Image>
                           <Div>Boomplay</Div>
                           <Div1>Enjoy all of the features of Boomplay, stream and<br/> free download music, Boom Mall and Boom games.</Div1>
                           <Image1> <Img src= {pix3}/></Image1>
                        </Box>
                        <Box>
                        <Image> <Img src= {pix2}/></Image>
                           <Div>Boomplay Lite</Div>
                           <Div1>Boomplay Lite brings you the streaming and <br/> download experience you love using fewer <br/>resources and data.</Div1>
                           <Image1> <Img src= {pix3}/></Image1>
                        </Box>
                    </Boxes>

                    <Text>
                        <Down>How to Install Boomplay for PC</Down>
                        <Div2>Boomplay currently does not support a PC version for Windows or Mac, you can <br/>install Boomplay website to your computer from your browser.</Div2>
                        
                    </Text>

                      <Step>
                        <Boxes1>
                            <Pic><Img src= {pic1}/></Pic>
                            <Texts><h2>Step 1</h2>
                            <p>Launch the Boomplay Website<br/> on a PC.</p>
                            </Texts>
                        </Boxes1>
                        <Boxes2>
                            <Pic><Img src= {pic2}/></Pic>
                            <Texts><h2>Step 2</h2>
                            <p>Click the "" icon in the<br/> browser's search bar.</p>
                            </Texts>
                        </Boxes2>
                        <Boxes3>
                            <Pic><Img src= {pic3}/></Pic>
                            <Texts><h2>Step 3</h2>
                            <p>From the pop-up window,<br/> select "Install".</p>
                            </Texts>
                        </Boxes3>
                      </Step>
                </Wrapper>
        <Footer />
            </Container>
        </div>
    )
}

export default Download;

const Texts = styled.div`
h2{
    color:#00FFFF;
}p{
    color: #ffff;
    font-size: 20px;
}

`
const Pic = styled.div`

`

const Boxes3 = styled.div`
width: 400px;
height: 400px;
// background-color: blue;
`
const Boxes2 = styled.div`
width: 400px;
height: 400px;
// background-color: blue;
`
const Boxes1 = styled.div`
width: 400px;
height: 400px;
// background-color: blue;
`
const Step = styled.div`
height: 100%;
width: 100%;
background-color: #121212;
display: flex;
align-items: center;
justify-content: center;
gap: 30px;
border-radius:10px;
margin-top: 20px;
`

const Down = styled.div`
// padding: 30px 5% 0;
color: #fff;
font-size: 40px;
font-weight: 800;
text-align: center;
line-height: 48px;
font-family: Arial;
`

const Image1 = styled.div`

height: 100px;
width: 300px;
border-radius: 6px;
// background-color: blue;  
display: flex;
align-items: center;
justify-content: center;
`

const Div2 = styled.div`
color: grey;
margin-top: 12px;
text-align: center;
font-size:20px;
`
const Div1 = styled.div`
color: white;
// margin-top: 12px;
text-align: center;
`
const Div = styled.div`
font-size: 25px;
font-weight: 700;
color: white;
margin-top: 12px;
`
const Img = styled.img`
height: 100%;
width: 100%;
// border-radius: 6px;
// background-color: blue;
`
const Image = styled.div`
height: 100px;
width: 100px;
border-radius: 6px;
margin-bottom:10px;
// background-color: blue;
`
// const Box1 = styled.div`
// height: 380px;
// width: 500px;
// background-color: red;
// display: flex;
// align-items: center;
// justify-content: center;
// border-radius: 10px;
// `
const Box = styled.div`
height: 380px;
width: 500px;
background-color: #222222;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border-radius: 10px;
`
const Boxes = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 30px;
margin: 30px 0px;
`
const Text = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 200px;
width: 100%;
flex-direction: column;
`
const Wrapper = styled.div`
height: 100%;
width: 100%;
background-color: #121212;
`

const Container = styled.div`
height: 100%;
width: 100%;
background-color:red;
`