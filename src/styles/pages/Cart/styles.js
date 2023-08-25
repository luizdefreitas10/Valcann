import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

export const TableHeader = styled.th`
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f5f5f5;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
`;

export const CheckoutButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 20px 0;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  font-weight: 300;
`;

export const ClearCartButton = styled.button`
  background-color: #FF5733; /* Reddish color */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 4px;
  height: 3.1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #E74C3C; /* Darker red for hover */
  }
`;

export const CartButtonsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
`;

export const TotalPriceText = styled.p`
  text-align: center;
`;

export const CartActionButton = styled.button`
background-color: #3498db; /* Blue color for 'Add' */
border: none;
color: white;
padding: 8px 15px;
text-align: center;
font-size: 14px;
cursor: pointer;
border-radius: 4px;
transition: background-color 0.3s ease;
margin-left: 10px;

&:hover {
  background-color: #2980b9; /* Darker blue for hover */
}

&.remove {
  background-color: #FF5733; /* Reddish color for 'Remove' */
  &:hover {
    background-color: #E74C3C; /* Darker red for hover */
  }
}
`;

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & svg {
    margin-left: 15%;
    cursor: pointer;
    height: 50px;
    width: 50px;
  }
`;