import React from "react";
import { styled } from "styled-components";

interface ibutton {
    text?:string;
}

const Buttonprops: React.FC<ibutton> = ({text}) => {
    return(
        <div>
            <Btn text={text!}>
                {text}
            </Btn>
        </div>
    )
};
export default Buttonprops

const Btn = styled.button<{
    text: string;
}>`
    padding: 13px 18px;
    border-radius: 30px;
    color: white;
    font-size: 16px;
    background-color: black;
    opacity: 0.8;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;


    &:hover {
        background-color: white;
        color: black;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
        transform: translateY(-2px);
}
`