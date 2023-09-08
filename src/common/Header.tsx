/* eslint-disable @typescript-eslint/no-use-before-define */
import React, {useState} from 'react'
import styled from "styled-components"
import Globalbutto from '../Pages/globalbutton'
import {FiMenu} from "react-icons/fi"
import {RiArrowDropDownLine} from "react-icons/ri"
import {ImCancelCircle} from "react-icons/im"

const Header = () => {

    const [show, setShow] = useState(false)
    const [shows, setShows] = useState(false)
    const Toggle = () => {
        setShow(!show);
    }
    const Dropdown = () => {
        setShows(shows)
    }
    const Dropdown1 = () => {
        setShows(!shows)
    }
  return (
    <Container>
          <Wrapper>
              <Wrap>
                  <Holder>
                  <svg
                width="76"
                height="40"
                viewBox="0 0 76 65"
                fill="none" xmlns="http://www.w3.org/2000/svg"><path
                          d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" /></svg>
                  
                  <h1>Vercel</h1>
            </Holder>

              <NavHolder>
                  <Navs onMouseOver={Dropdown} onMouseLeave=
                  {Dropdown1}>Features
                  <IconD>
                    <RiArrowDropDownLine />
                  </IconD>
                  </Navs>
                  <Navs>Docs</Navs>
                  <Navs>Templates</Navs>
                  <Navs>Integrations</Navs>
                  <Navs>Customers</Navs>
                  <Navs>Enterprise</Navs>
                  <Navs>Pricing</Navs>
              </NavHolder>
              </Wrap>

              <ButtonHolder>
                  <Navs>Contact</Navs>
                  <Globalbutto
                      text="Login"
                      bcc="gray"
                      color="white" />
                 <Globalbutto text="Sign Up" bcc="#fff" color="#000"/>
              </ButtonHolder>
              <Icon> 
                {
                !show ?
                <FiMenu onClick={Toggle}/> : <ImCancelCircle size={40} color={"white"} onClick={Toggle} />
                }
              </Icon>
              {show ? (
                <Card>
                  <Globalbutto
                      text="Login"
                      bcc="gray"
                      color="white" />
                 <Globalbutto text="Sign Up" bcc="#fff" color="#000"/>

                 <Navs1>
                 <Navs onClick={Dropdown} style={{paddingLeft: "20px"}}>Features</Navs>
                 <Holds>
                    <RiArrowDropDownLine />
                  </Holds>
                    </Navs1>
                 <NavHolder1>
                  <Hold>
                  <Navs style={{width: "636%",height:"calc(2 * var(--geist-gap));"}}>Docs
                   </Navs>
                  <Navs style={{width: "636%"}}>Templates</Navs>
                  <Navs style={{width: "636%"}}>Integrations</Navs>
                  <Navs style={{width: "636%"}}>Customers</Navs>
                  <Navs style={{width: "636%"}}>Enterprise</Navs>
                  <Navs style={{width: "636%"}}>Pricing</Navs>
                  </Hold>
              </NavHolder1>
              <Hr>
              <hr  style={{width: "100%",bottom: "533px", position: "absolute"}}/>
              <hr  style={{width: "100%",bottom: "485px", position: "absolute"}}/>
              <hr  style={{width: "100%",bottom: "437px", position: "absolute"}}/>
              <hr  style={{width: "100%",bottom: "385px", position: "absolute"}}/>
              <hr  style={{width: "100%",bottom: "337px", position: "absolute"}}/>
              <hr  style={{width: "100%",bottom: "289px", position: "absolute"}}/>
              <hr  style={{width: "100%",bottom: "237px", position: "absolute"}}/>
              </Hr>
              </Card>
              ): null}
        </Wrapper>
        {shows ? (
        <FeaturesCard>
            <Holder1>
                <Div>
                    <p>Preview</p>
                <p>Zero config, more innovation</p>
                </Div>
                <Div1>
                    <p>Next.js</p>
                <p>Zero config, more innovation</p>
                </Div1>
                <Div2>
                <p>Next.js</p>
                <p>Zero config, more innovation</p>
                </Div2>
            </Holder1>
            <Holder2>
                <Div3>
                <p>Next.js</p>
                <p>Zero config, more innovation</p>
                </Div3>
                <Div4>
                <p>Next.js</p>
                <p>Zero config, more innovation</p>
                </Div4>
                <Div5>
                <p>Next.js</p>
                <p>Zero config, more innovation</p>
                </Div5>
            </Holder2>
          </FeaturesCard>
   ): null}
    </Container>
  )
}

export default Header
const Holds = styled.div`
width: 100px;
height: 40px;
/* background-color: pink; */
display: flex;
justify-content: center;
align-items: center;
font-size: 34px;
color: white;
font-weight: 200;
`
const Navs1 = styled.div`
width: 100%;
height: 58px;
/* background-color: red; */
display: flex;
justify-content: space-between;
align-items: center;
`
const Hr = styled.div`
    line-height: 400px;
    height: 180px;
    display: flex;
    flex-direction: column;
    margin-bottom: 90px;
`
const Div = styled.div`
  width: 290px;
  height: 80px;
  background: #383a3f;
  cursor:pointer;
  color: white;
  padding-left: 19px;

  &:hover{
    background-color: #4e4949;
  }
`
const Div1 = styled.div`
  width: 290px;
  height: 80px;
  background: #383a3f;
  cursor:pointer;
  color: white;
  padding-left: 19px;

  &:hover{
    background-color: #4e4949;
  }
`
const Div2 = styled.div`
   width: 290px;
  height: 80px;
  background: #383a3f;
  cursor:pointer;
  color: white;
  padding-left: 19px;

  &:hover{
    background-color: #4e4949;
  }
`
const Div3 = styled.div`
 width: 290px;
  height: 80px;
  background: #383a3f;
  cursor:pointer;
  color: white;
  padding-left: 19px;

  &:hover{
    background-color: #4e4949;
  }
`
const Div4 = styled.div`
  width: 290px;
  height: 80px;
  background: #383a3f;
  cursor:pointer;
  color: white;
  padding-left: 19px;

  &:hover{
    background-color: #4e4949;
  }
`
const Div5 = styled.div`
   width: 290px;
  height: 80px;
  background: #383a3f;
  cursor:pointer;
  color: white;
  padding-left: 19px;

  &:hover{
    background-color: #4e4949;
  }
`
const Holder1 = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media screen and (max-width: 1109px) {
      display: none;
}
`
const Holder2 = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media screen and (max-width: 1109px) {
      display: none;
}
`

const IconD = styled.div`
font-size: 24px;
position: absolute;
bottom: 20px;
left: 230px;

@media screen and (max-width: 1109px) {
    display: none;
}


@media screen and (max-width: 1109px) {
    display: block;
    position: absolute;
    bottom: 0;
    left: 200px;
}
`
const FeaturesCard = styled.div`
width: 619px;
height: 280px;
border-radius: 15px;
top: 70px;
left: 220px;
position: absolute;
display: flex;
justify-content: space-between;
background: transparent;
background-color: grey;
/* display: none; */
`
const Card = styled.div`
width: 100%;
height: 700px;
border: 1px solid gray;
position: absolute;
top: 80px;
right: 0;
display: none;

@media screen and (max-width: 1109px) {
      display: inline-block;
      position: fixed;
      background-color: black;
}

`
const Icon = styled.div`
display: flex;
align-items: center;
color: #fff;
font-size: 30px;
cursor: pointer;

@media screen and (max-width: 1109px) {
      display: inline-block;
}
display: none;
`
const ButtonHolder = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 1109px) {
        display: none;
    }
`
const Wrap = styled.div`
    display: flex;
    align-items: center;
`
const Navs = styled.div`
    color: gray;
    margin-right: 35px;
    transition: all ease-in-out 350ms;
    cursor: pointer;
    &:hover{
        color: #fff;
    }
    @media screen and (max-width: 778px) {
        width: 100%;
    }
`
const NavHolder = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;

    @media screen and (max-width: 1109px) {
        display: none;
    }
`
const NavHolder1 = styled.div`
display: flex;
align-items: center;
margin-left: 20px;

@media screen and (max-width: 1109px) {
        display: inline-block;
        
    }
    /*@media screen and (max-width: 1109px) {
        display: block;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 1px solid silver;
    } */
`
const Hold = styled.div`
    height: 700px;
    width: 100%;
    line-height: 50px;
   flex-direction: column;
      
   @media screen and (max-width: 1109px) {
        /* font-size: 20px;
        color: #fff; */
        
    }

`
const Holder = styled.div`
    display: flex;
    align-items: center;
    h1{
        color: #fff;
        margin-right: 15px;
        font-size: 20px;
    }
`
const Wrapper = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`

const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    background-color: #000;
    justify-content:center;
`