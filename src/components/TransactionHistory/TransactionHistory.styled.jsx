import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  margin: 50px auto;
  width: 1000px;
  padding: 5px;
  box-shadow: 0px 0px 30px 5px rgba(161, 90, 90, 0.75);
  border-radius: 5px;
  text-align: center;

  & thead {
    background-color: green;
  }

  & tr:hover {
    background-color: tomato;
  }

  & th,
  & td {
    padding: 10px 15px;
    border: 1px solid tomato;
  }
`;
