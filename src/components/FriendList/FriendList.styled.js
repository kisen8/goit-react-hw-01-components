import styled from 'styled-components';

export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: gold;
  width: 500px;
  margin: 0 auto;
  padding: 30px;
  margin-bottom: 30px;
`;

export const FriendItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px 10px;

  margin-bottom: 10px;
  background-color: #e87474;
  width: 250px;
  border-radius: 10px;
  border: 2px solid red;
`;
export const FriendImg = styled.img`
  border-radius: 50%;
`;
export const FriendName = styled.p`
  font-size: 26px;
  font-weight: 700;
`;
export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.status) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;
