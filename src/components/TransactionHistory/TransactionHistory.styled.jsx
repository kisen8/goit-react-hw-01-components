import styled from 'styled-components';

export const TableHead = styled.thead`
  background-color: #9e9ed9;
`;
export const TableBody = styled.tbody`
  background-color: #faedd3;
`;

export const TableHeadline = styled.th`
  color: white;
  padding: 10px;
`;
export const TableData = styled.td`
  padding: 10px;
`;

export const TransactionBodyLine = styled.tr`
  &:nth-child(2n) {
    background-color: #e4bc92;
  }
`;
export const TransactionTable = styled.table`
  width: 560px;
  padding: 30px;
  margin: 0 auto;
  background-color: aqua;
`;
