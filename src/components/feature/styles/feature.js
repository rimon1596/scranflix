import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 8px solid #222;
    text-align: center;
    padding: 165px 45px;
    z-index:99;

`;

export const Title = styled.h1`
     color: white;
     max-width: 640px;
     font-size: 50px;
     user-select: none;
     font-weight: 500;
     margin: auto;

     @media (max-width: 600px){
         font-size: 35px;
     }
`;

export const SubTitle = styled.h2`
    color: white;
    font-size: 26px;
    font-weight: normal;
    user-select: none;
    margin: 16px auto;

    @media (max-width: 600px){
      font-size: 35px;
    }
`;