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

   a{

   }

   @media (max-width: 1000px){
       margin: 0 30px;
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
