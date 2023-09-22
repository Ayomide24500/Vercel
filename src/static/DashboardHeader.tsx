import styled from "styled-components"
// import {CgMenuGridO} from "react-icons/cg"
import {LiaSearchSolid} from "react-icons/lia"
// import {CiSettings} from "react-icons/ci"
// import {AiOutlineQuestion} from "react-icons/ai"
// import {VscMegaphone} from "react-icons/vsc"
import image from "../Assets/boom.png"
import { NavLink} from "react-router-dom"


const Header = () => {
    return (
        <div>
            <Container>
               <Wrapper>
                <Holder>
                 <Menu>
                   <Image src={image} />
                 </Menu>
                  </Holder>
                  <InputHold>
                  <SearchHold>
                    <LiaSearchSolid />
                    </SearchHold>
                    <Input type="text" placeholder="Search Artist, Songs, Album, Video"/>
                  </InputHold>
                  <ButtonHolder>
                    <Button>Login</Button>
                    <NavLink to = 'genre-page'>
                    <Button>Sign up</Button>
                    </NavLink>
                  </ButtonHolder>
               </Wrapper>
            </Container>
        </div>
    )
}
export default Header
const Button = styled.button`
    width: 100px;
    height: 30px;
    background: aqua;
    margin-left: 20px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
`
const Image = styled.img`
width: 123px;
height: 100px;
object-fit: contain;
`
const ButtonHolder = styled.div`
    width: 25%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    /* background-color: blue; */
`
const Input = styled.input`
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
    padding-left: 12px;
`
const SearchHold = styled.div`
width: 70px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
color: #2564cf;
font-size: 20px;
`
const InputHold = styled.div`
    display: flex;
    height: 32px;
    width: 380px;
    background: #fff;
    border: none;
    border-radius: 8px;
    overflow: hidden;
    margin-right: 280px;

`
const Holder = styled.div`
    display: flex;
    align-items: center;
   
   h3{
    font-size: 14px;
    margin-left: 40px;
    color: #fff;
   }
`
const Menu = styled.div`
    color: #fff;
    font-size: 30px;

    @media screen and (max-width: 1200){
   display: 0;
}
`
const Wrapper = styled.div`
    width: 98%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background: pink; */
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background: #000;
    display: flex;
    position: fixed;
    z-index: 10;
    /* z-index: 9; */
    /* position: relative; */
    /* background-color: red; */
`