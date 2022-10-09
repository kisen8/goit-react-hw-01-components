import {
  TableHead,
  TableBody,
  TableHeadline,
  TableData,
  TransactionTable,
  TransactionBodyLine,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHead>
        <tr>
          <TableHeadline>Type</TableHeadline>
          <TableHeadline>Amount</TableHeadline>
          <TableHeadline>Currency</TableHeadline>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(item => (
          <TransactionBodyLine key={item.id}>
            <TableData>{item.type}</TableData>
            <TableData>{item.amount}</TableData>
            <TableData>{item.currency}</TableData>
          </TransactionBodyLine>
        ))}
      </TableBody>
    </TransactionTable>
  );
};
