import styled from 'styled-components';

export const Container = styled.a`
  width: 50%;
  height: 70px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px 10px 0px;
  text-decoration: none;
  color: black;
  :hover{
    cursor: pointer;
    transform: scale(1.02);
    svg {
      color: #6833e4;
    }
    
  }
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.7s;
`;

export const ImageAndText = styled.div`
  display: flex;
  gap: 10px;
  p {
    font-family: sans-serif;
  }
`;
