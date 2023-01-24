import styled from 'styled-components';

export const Container = styled.div`
  position: -webkit-sticky;
  position: sticky;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
  width: 80%;
`;
export const SwitchButton = styled.button`
  color: #fff;
  font-size: 1em;
  border: transparent;
  border-radius: 3px;
  background: transparent;
  font-family: 'Libre Baskerville', serif;
  font-size: 30px;
  font-size: 20px;
  font-weight: bold;
  font-family: "Source Sans Pro", sans-serif;
  display: inline;
  cursor: pointer;
  color: black;
`;