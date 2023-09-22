import {useState, useRef, useEffect} from "react"
import styled from "styled-components"
import {BsFillPersonFill} from "react-icons/bs"
// import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
const Sidebar = () => {
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
      const Prev1: string[] = [
        "background-image: linear-gradient(to right, #007cf0, #83fffb); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent",
        "white",
        "white"
      ]
      const Dev2: string[] = [
        "white",
        "background-image: linear-gradient(to right, #7928ca,  #ff0080); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent",
        "white"
      ]
      const Dev3: string[] = [
        "background-image: linear-gradient(to right, #007cf0, #83fffb); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent",
        "white",
        "white"
      ]
      let Dev_ref: any = useRef()
      let Prev1_ref: any = useRef()
      let Dev2_ref: any = useRef()
      let Dev3_ref: any = useRef()
      let Prev_ref: any = useRef()
        
      const [count, setCount] = useState(0)

      useEffect(() => {
        Dev_ref.current.style = Dev[count % Dev.length]
        Prev1_ref.current.style = Prev1[count % Prev1.length]
        Dev2_ref.current.style = Dev2[count % Dev2.length]
        Dev3_ref.current.style = Dev3[count % Dev3.length]
        Prev_ref.current.style = Prev[count % Prev.length]

      })
      useEffect(() => {
        setInterval(() => {
          setCount((el) => el + 1/2 )
        }, 3000)
      }, [])
    return (
        <div>
            <Container>
                 <Wrapper>
                    <IconHolder>
                        <Circle>
                            <BsFillPersonFill />
                        </Circle>
                        <p style={{color: "#fff", fontSize: "16px", fontWeight: "bold"}}>Log-in / Sign-up </p>
                    </IconHolder>
                    <NavHolder>
                        <Hold1>
                            <p style={{color: "#fff", fontSize: "16px", fontWeight: "bold"}}>Music</p>
                        </Hold1>
                        <Hold1>
                        <BsFillPersonFill />
                            <p ref={Prev1_ref}>Trending</p>
                            </Hold1>
                        <Hold1>
                        <BsFillPersonFill />
                            <p ref={Dev2_ref}>News</p>
                            </Hold1>
                        <Hold1>
                        <BsFillPersonFill />
                            <p ref={Dev3_ref}>Artist</p>
                            </Hold1>
                        <Hold1>
                        <BsFillPersonFill />
                            <p ref={Prev_ref}>Videos</p>
                            </Hold1>
                        <Hold1>
                        <BsFillPersonFill />
                            <p ref={Dev_ref}>Playist</p>
                            </Hold1>
                        <Hold1>
                        <BsFillPersonFill />
                            <p>Chart</p>
                            </Hold1>
                        <Hold1>
                            <BsFillPersonFill />
                            <NavLink to = 'genre-page'>
                                    <Nav>Genre</Nav>
                            </NavLink>
                            </Hold1>
                    </NavHolder>
                 </Wrapper>
                </Container>
        </div>
    )
}
export default Sidebar


const Nav = styled.div`
font-size: 16px;
    color: grey;
    padding-left: 30px;
    cursor: pointer;

    &:hover{
        color: #fff;
    }
`
const Hold1 = styled.div`
width: 240px;
height: 40px;
display: flex;
align-items: center;
font-size: 22px;
color: grey;
p{
    font-size: 16px;
    color: grey;
    padding-left: 30px;
    cursor: pointer;

    &:hover{
        color: #fff;
    }
}
`
const NavHolder = styled.div`
    width: 250px;
    height: 400px;
    /* background: aqua; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    margin-top: 30px;
`
const Circle = styled.div`
width: 40px;
height: 40px;
border-radius: 100%;
border:1px solid grey;
display: flex;
justify-content: center;
align-items: center;
font-size: 27px;
color: #fff;
`
const IconHolder = styled.div`
    width: 200px;
    height: 50px;
    /* background: aqua; */
    display: flex;
    flex-direction: rows;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    margin-left: 10px;

    p{
    font-size:17px;
    color: grey;
}
`
const Wrapper = styled.div`
    width: 250px;
    height: 600px;
    /* background: pink; */
    display: flex;
    flex-direction: column;
    margin-top: 90px;

`
const Container = styled.div`
    width: 260px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background: #000000;
    overflow-x: auto;
    margin-top: 30px;
    position: fixed;

    @media screen and (max-width: 1200){
   display: none;
}
`
