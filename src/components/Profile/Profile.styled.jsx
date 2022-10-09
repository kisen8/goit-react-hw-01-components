import styled from 'styled-components';

export const Wrap = styled.div`
  width: 500px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 30px;
  background-color: #02a4b6;
  align-items: center;
  margin-bottom: 30px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;

  width: 300px;
  background-color: #fff;
  align-items: center;
  border: 1px solid black;
`;

export const Img = styled.img`
  border-radius: 50%;

  width: 250px;
  padding: 30px;
`;

export const Name = styled.p`
  font-size: 28px;
  font-weight: 700;
  padding-bottom: 10px;
`;

export const Info = styled.p`
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 10px;
`;

export const StatsList = styled.ul`
  display: flex;
  width: 300px;
`;

export const StatsItem = styled.li`
  background-color: #ccc8c8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
  width: 100px;
`;

export const Label = styled.span`
  font-size: 17px;
  font-weight: 400;
  padding: 5px;
`;
export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
  padding: 5px;
`;
