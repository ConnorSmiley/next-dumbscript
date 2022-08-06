import React from "react";
import styled from "styled-components";
import tw from "twin.macro"

const  NavBarContainer = styled.div`
  min-width: 320px;
  ${tw`
    fixed
  w-full
  items-center
  flex
  h-16
  justify-center
  z-50
  
  md:bg-transparent
  lg:bg-white
  lg:bg-opacity-10
    `}
`

const  NavBarStyle = styled.div`
    ${tw`
    
    `}
`

export interface I NavBarProps {

}

const  NavBar: React.FunctionComponent<I NavBarProps> = () => {

    return(
       <>
        < NavBarContainer>
            < NavBarStyle>

            </ NavBarStyle>
        </ NavBarContainer>
       </>
    )
}

export default  NavBar
