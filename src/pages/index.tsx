import { NextPage } from "next";
import styled from "styled-components";
import tw from "twin.macro"


const HomeContainer = styled.div`
    ${tw`
    bg-black
    w-screen
    h-screen
    
    `}
`


const IndexPage: NextPage = () => {
  return (
    <>
      <HomeContainer>

      </HomeContainer>
    </>
  );
};

export default IndexPage;
