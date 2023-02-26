import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
`;

const Thead = styled.thead``;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  width: 100%;
  text-align: center;

  &:nth-child(even) {
    background-color: #1b1b32;
  }
`;

const Th = styled.th`
  background-color: #1b1b32;
  padding: 0.5em;
`;

const Td = styled.td`
  padding: 0.5em;
`;

export const CurrencyTable = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Currency Unit</Th>
          <Th>Amount</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Penny</Td>
          <Td>$0.01 (PENNY)</Td>
        </Tr>
        <Tr>
          <Td>Nickel</Td>
          <Td>$0.05 (NICKEL)</Td>
        </Tr>
        <Tr>
          <Td>Dime</Td>
          <Td>$0.1 (DIME)</Td>
        </Tr>
        <Tr>
          <Td>Quarter</Td>
          <Td>$0.25 (QUARTER)</Td>
        </Tr>
        <Tr>
          <Td>Dollar</Td>
          <Td>$1 (ONE)</Td>
        </Tr>
        <Tr>
          <Td>Five Dollars</Td>
          <Td>$5 (FIVE)</Td>
        </Tr>
        <Tr>
          <Td>Ten Dollars</Td>
          <Td>$10 (TEN)</Td>
        </Tr>
        <Tr>
          <Td>Twenty Dollars</Td>
          <Td>$20 (TWENTY)</Td>
        </Tr>
        <Tr>
          <Td>One-hundred Dollars</Td>
          <Td>$100 (ONE HUNDRED)</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};
