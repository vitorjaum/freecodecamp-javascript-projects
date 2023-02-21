import styled from "styled-components";

const Table = styled.table`
  border: 0.1em solid white;
  border-collapse: collapse;
  font-family: "Hack-ZeroSlash", monospace;
`;

const Td = styled.td`
  border: 0.1em solid white;
  font-family: "Hack-ZeroSlash", monospace;
`;

const Tr = styled.tr`
  text-align: center;
`;

const Th = styled.th`
  border: 0.1em solid white;
  font-family: "Hack-ZeroSlash", monospace;
`;

export const RomanNumeral = () => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Roman numerals</Th>
          <Th>Arabic numerals</Th>
        </Tr>
      </thead>
      <tbody>
        <Tr>
          <Td>M</Td>
          <Td>1000</Td>
        </Tr>
        <Tr>
          <Td>CM</Td>
          <Td>900</Td>
        </Tr>
        <Tr>
          <Td>D</Td>
          <Td>500</Td>
        </Tr>
        <Tr>
          <Td>CD</Td>
          <Td>400</Td>
        </Tr>
        <Tr>
          <Td>C</Td>
          <Td>100</Td>
        </Tr>
        <Tr>
          <Td>XC</Td>
          <Td>90</Td>
        </Tr>
        <Tr>
          <Td>L</Td>
          <Td>50</Td>
        </Tr>
        <Tr>
          <Td>XL</Td>
          <Td>40</Td>
        </Tr>
        <Tr>
          <Td>X</Td>
          <Td>10</Td>
        </Tr>
        <Tr>
          <Td>IX</Td>
          <Td>9</Td>
        </Tr>
        <Tr>
          <Td>V</Td>
          <Td>5</Td>
        </Tr>
        <Tr>
          <Td>IV</Td>
          <Td>4</Td>
        </Tr>
        <Tr>
          <Td>I</Td>
          <Td>1</Td>
        </Tr>
      </tbody>
    </Table>
  );
};
