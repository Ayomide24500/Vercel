import styled from "styled-components"
import pic3 from "../Assets/play.png"
import pic4 from "../Assets/App.png"

const Footer = () => {
    return (
        <div>
        <Container>
            <Div1>
               <h2>Explore</h2>
               <p>Artist</p>
            <p>Trending Songs</p>
            <p>Genres</p>
            <p>New songs</p>
            <p>Chart</p>
            <p>Video</p>
            <p>Chart</p>
            </Div1>
            <Div1>
            <h2>For Users</h2>
               <p>Artist</p>
            <p>Trending Songs</p>
            <p>Genres</p>
            <p>New songs</p>
            <p>Chart</p>
            <p>Video</p>
            <p>Chart</p>
            </Div1>
            <Div1>
            <h2>For Artists and Vendors </h2>
               <p>Artist</p>
            <p>Trending Songs</p>
            <p>Genres</p>
            <p>New songs</p>
            <p>Chart</p>
            <p>Video</p>
            <p>Chart</p>
            </Div1>
            <Div1>
            <h2>Company</h2>
               <p>Artist</p>
            <p>Trending Songs</p>
            <p>Genres</p>
            <p>New songs</p>
            <p>Chart</p>
            <p>Video</p>
            <p>Chart</p>
            </Div1>
            {/* <Div2>
            <Img src= {pic3}/>
            <Img1 src= {pic4}/>
            </Div2> */}

        </Container>
   </div>
    )
}
export default Footer
// const Div2 = styled.div`
// width: 260px;
// height: 200px;
// /* background: #fff; */
// margin-bottom: 60px;
// display: flex;
// align-items: center;
// justify-content: space-around;
// `
const Div1 = styled.div`
width: 200px;
height: 400px;
/* background: aqua; */
padding: 20px;
padding-top: 29px;
margin-left: 50px;
color: grey;
font-weight: bold;
h2{
    /* padding-top: 19px; */
}
p{
    /* padding-top: 19px; */
    font-size: 16px;

}
`
const Container = styled.div`
     width: 100%;
     height: 600px;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: space-around;
`


 

 