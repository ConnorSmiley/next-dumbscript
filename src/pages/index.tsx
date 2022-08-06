import { NextPage } from "next";
import styled from "styled-components";
import tw from "twin.macro"
import Home from "@/pages/Home";


const HomeContainer = styled.div`
    ${tw`
    bg-gray-500
    w-screen
    h-screen
    
    `}
`


const IndexPage: NextPage = () => {
  return (
    <>
      <Home/>
    </>
  );
};

export default IndexPage;
