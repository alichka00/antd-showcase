import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #d1d1d130;
  border-radius: 10px;
  padding: 25px;
`;

export const WrapperIcons = styled.div`
  display: flex;
  gap: 35px;
  justify-content: center;
`;
