import React from "react";
import styled from "styled-components";
import tw from "twin.macro"
import Link from 'next/link'
import DumbscriptSVG from "../Images/Logo/dumbscriptLogo.svg";
import SublimeTextSVG from "../Images/Logo/sublime-text.svg";
import TosLogoSVG from "../images/Logo/tosLogo.svg"

const HomeContainer = styled.div`
  min-width: 320px;
  min-height: 100%
  ${tw`
    h-screen
    w-screen
    bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400
    `}
`

const HomeStyle = styled.div`
    ${tw`
      h-screen
  w-full
  flex
  flex-col
  items-center
  py-10
  px-2
  
  lg:pt-20
    `}
`

const LogoHolder = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
    -mb-4
    
    `}
`

const DumbscriptLogo = styled(DumbscriptSVG)`
  ${tw`
    w-16
    mb-8
    
    md:h-20
    md:w-20
    lg:w-40
    lg:mt-4
    `}
`

const SubtextLogo = styled(SublimeTextSVG)`
  ${tw`
    w-24
    h-24
    shadow-2xl
    
    sm:w-32
    sm:h-32
    md:h-32 
    md:w-32
    md:-mt-4
    lg:h-40
    lg:w-40
    `}
`

const TosLogo = styled(TosLogoSVG)`
  ${tw`
  h-24
    w-24
    bg-white
    fill-current
    rounded-3xl
    shadow-2xl
    
    sm:h-32
    sm:w-32
    md:h-32 
    md:w-32
    md:-mt-4
    lg:h-40
    lg:w-40
    lg:border-4
    lg:border-[#00FE1E]
    lg:rounded-3xl
    `}
`

const TextH = styled.h1`
  ${tw`
  w-auto
    text-center
    text-5xl
    font-extrabold
    font-Source
    text-black
    uppercase
    pb-2
    
    sm:text-6xl
    lg:text-7xl
    `}
`

const TextP = styled.p`
  ${tw`
  w-auto
    text-white
    text-center
    font-black
    text-lg
    pb-4
    
    sm:text-2xl
    sm:tracking-tight
    sm:font-extrabold
    md:text-2xl
    md:pb-2
    md:-mt-2
    md:tracking-normal
    lg:text-3xl
    lg:tracking-wide
    lg:font-extrabold
    lg:pt-2
    `}
`
const Description = styled.div`
  ${tw`
    text-black
    text-lg
    font-black
    text-center
    leading-tight
    pb-4
    px-4
    
    sm:max-w-md
    md:text-xl
    md:max-w-lg
    lg:pt-4
    lg:pb-4
    lg:text-2xl
    `}
`

const Buy = styled.button`
  ${tw`
    text-xl
    text-black
    font-extrabold
    font-Source
    uppercase
    border-2
    border-white
    w-24
    h-9
    rounded-3xl
    mb-4
    bg-[#00FE1E]
    border-2
    border-black
    items-center
    flex    
    justify-center
    shadow-2xl
    
    sm:w-40
    md:rounded-3xl
    lg:hidden 
    `}
`


const LowerHalf = styled.div`
  ${tw`
    text-center
    max-w-sm
    w-11/12
    items-center
    flex
    flex-col
    `}
`

const Grid = styled.div`
  ${tw`
  grid
  grid-cols-2
  place-items-center
  gap-x-2
  pt-2
  max-w-xl
  w-full
  pb-4
  rounded-md
  bg-black
  bg-opacity-30
    
    sm:w-96
    sm:h-80
    md:h-80
    md:w-96
    lg:h-96
    lg:w-96
    lg:w-screen
    `}
`

const DownloadSublime = styled.div`
  ${tw`
    text-white
    text-sm
    font-bold
    pt-1
    
    sm:text-base
    sm:leading-tight
    sm:font-normal
    md:text-base
    md:font-bold
    md:leading-tight
    md:-mt-4
    lg:text-base
    lg:font-semibold
    lg:text-lg
    lg:pt-2
    lg:leading-tight
    `}
`

const TosLink = styled.div`
  ${tw`
    text-white
    text-sm
    font-bold
    pt-1
    
    sm:text-base
    sm:leading-tight
    sm:font-normal
    md:text-base
    md:leading-tight
    md:-mt-4
    md:font-bold
    lg:text-base
    lg:font-semibold
    lg:text-lg
    lg:pt-2
    lg:leading-tight
    
    `}
`

const DownloadLinkST = styled.button`
  ${tw`
    text-black
    bg-yellow-400
    border-2
    border-yellow-900
    flex
    text-center
    mt-2
    font-Source
    items-center
    justify-center
    font-semibold
    w-28
    h-8
    rounded-md
    shadow-2xl
    cursor-pointer
    hover:bg-white
    
    sm:w-36
    sm:h-10
    sm:text-xl
    md:h-10
    md:text-xl
    md:-mt-4
    md:-mb-4
    lg:text-2xl
    lg:w-40
    lg:h-12
    `}
`
const DownloadLinkTOS = styled.button`
  ${tw`
    text-black
    bg-[#00FE1E]
    border-2
    border-green-900
    flex
    text-center
    font-Source
    items-center
    justify-center
    font-semibold
    mt-2
    w-28
    h-8
    rounded-md
    hover:bg-white
    
    sm:w-36
    sm:h-10
    sm:text-xl
    md:h-10
    md:text-xl
    md:-mt-4
    md:-mb-4
    lg:text-2xl
    lg:w-40
    lg:h-12
    `}
`



export interface IHomeProps {

}

const Home: React.FunctionComponent<IHomeProps> = () => {
  const handleClick = () => {
    window.open("https://www.sublimetext.com/download");
  };

    return(
       <>
        <HomeContainer>
            <HomeStyle>
              <LogoHolder>
                <TextH>Dumbscript</TextH>
                <DumbscriptLogo />
              </LogoHolder>
              <Description>
                Write thinkscript easier and faster with Subtime Text and ThinkOrSwim
              </Description>
              <Link to="/Buy" activeClass="active" spy={true} smooth={true} offset={0}
                    duration={500} class="hover:text-[#00FE1E] cursor-pointer">
                <Buy>
                  Buy
                </Buy>
              </Link>

              <LowerHalf>
                <Grid>
                  <TextP><a className="underline decoration-yellow-500 decoration-2 underline-offset-8">Sublime
                    Text</a></TextP>
                  <TextP><a
                    className="underline decoration-green-500 decoration-2 underline-offset-8">ThinkOrSwim</a></TextP>
                  <SubtextLogo />
                  <TosLogo />
                  <DownloadSublime>Link to <br />Sublime Text</DownloadSublime>
                  <TosLink>Link to <br />ThinkOrSwim</TosLink>
                  <DownloadLinkST
                    onClick={() => window.open("https://www.sublimetext.com/download", "_blank")}>Download</DownloadLinkST>
                  <DownloadLinkTOS
                    onClick={() => window.open("https://www.tdameritrade.com/tools-and-platforms/thinkorswim/desktop/download.html", "_blank")}>Download</DownloadLinkTOS>
                </Grid>
              </LowerHalf>
            </HomeStyle>
        </HomeContainer>
       </>
    )
}

export default Home
