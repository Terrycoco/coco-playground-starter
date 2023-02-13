import styled from "styled-components";

const DropDownContainer = styled.div`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled.div`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

const DropDownListContainer = styled.div``;

const DropDownList = styled.ul``;

const ListItem = styled.li``;

const Dropdown = (props) => {
  return (
    <DropDownContainer>
      <DropDownHeader>Mangoes</DropDownHeader>
      <DropDownListContainer>
        <DropDownList>
          <ListItem>Mangoes</ListItem>
          <ListItem>Apples</ListItem>
          <ListItem>Oranges</ListItem>
        </DropDownList>
      </DropDownListContainer>
    </DropDownContainer>
  );
};

export default Dropdown;
