import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    transform: none;
    height: 100%;
    width: 100%;
    object-fit: cover;
    max-width: 100%;
    background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` :
        '../images/misc/home-bg.jpg')}) top left / cover no-repeat;

    @media (max-width: 1100px){
        ${({ dontShowOnSmallViewPort }) =>
        dontShowOnSmallViewPort && `background: none;`}
    }    
`;

// export const Gradient = styled.div`
//     background: rgba(0,0,0,.4);
//     background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     display: block;
//     position: absolute;
//     object-fit: cover;
// `;

export const Container = styled.div`
   display: flex;
   margin: 0 56px;
   height: 64px;
   padding: 18px 0;
   justify-content: space-between;
   align-items: center;
   z-index: 1;
   position: ${({ active }) => (active === 'true' ? 'fixed' : null)};
   background: ${({ active }) => (active === 'true' ? 'rgb(20, 20, 20)' : null)};
   left: 0;
   right: 0;

   a{
      display: flex;
   }

   @media (max-width: 1000px){
       margin: 0 30px;
   }
`;

export const Group = styled.div`
   display: flex;
   align-items: center;
`;

export const Picture = styled.button`
   background: url(${({ src }) => src});
   background-size: contain;
   border: 0;
   width: 32px;
   height: 32px;
   cursor: pointer;
`;

export const Link = styled.p`
    color: white;
    text-decoration: none;
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    margin-right: 30px;
    cursor: pointer;

    &: hover {
        font-weight: bold;
    }

    &: last-of-type {
        margin-right: 0;
    }
`;


export const Dropdown = styled.div`
   display: none;
   background-color: black;
   position: absolute;
   padding: 10px;
   width: 100px;
   top: 32px;
   right: 10px;

   ${Group}: last-of-type ${Link} {
       cursor: pointer;
   }

   ${Group}{
       margin-bottom: 10px;

       &:last-of-type {
           margin-bottom: 0;
       }

       ${Link},${Picture}{
          cursor: default;
       }
   }

   button {
       margin-right: 10px;
   }

   p{
       font-size: 12px;
       margin-bottom: 0;
       margin-top: 0;
   }
`;

export const Search = styled.div`
    display: flex;
    align-items: center;

    svg{
        color: white;
        cursor: pointer;
    }

    @media (max-width: 700px){
        display: none;
    }
`;

export const SearchIcon = styled.button`
   cursor: pointer;
   background-color: transparent;
   border: 0;

   img {
       filter: brightness(0) invert(1);
       width: 16px;
   }
`;

export const PlayButton = styled.button`
   box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
   background-color: #e6e6e6;
   color: #000;
   border-width: 0;
   padding: 10px 20px;
   border-radius: 5px;
   max-width: 130px;
   font-weight: bold;
   width: 100px;
   font-size: 20px;
   margin-top: 10px;
   cursor: pointer;
   transition: background-color 0.5s ease;
   &:hover {
     background-color: #ff1e1e;
     color: white;
   }
`;


export const SearchInput = styled.input`
   background-color: #44444459;
   color: white;
   border: 1px solid white;
   transition: width 0.5s;
   height: 30px;
   font-size: 14px;
   margin-left: ${({ active }) => (active === true ? '10px' : '0')};
   padding: ${({ active }) => (active === true ? '0 10px' : '0')};
   opacity: ${({ active }) => (active === true ? '1' : '0')};
   width: ${({ active }) => (active === true ? '200px' : '0px')};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
      display: flex;
      flex-direction: column;
  }
`;


export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1449px){ 
    height: 45px;
    width: 167px;
   }
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover{
        background-color: #f40612;
    }
`;

export const Feature = styled.div`
   flex-direction: column;
   padding: 150px 0 500px 0;
   align-items: normal;
   margin: 0 56px;
   width: 50%;

   @media (max-width: 1100px){
       display: none;
   }
`;

export const Text = styled.p`
    color: white;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.45);
`;

export const FeatureCallOut = styled.h2`
    color: white;
    font-size: 50px;
    font-weight: bold;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.45);
    margin: 0;
    margin-bottom: 20px;
`;
