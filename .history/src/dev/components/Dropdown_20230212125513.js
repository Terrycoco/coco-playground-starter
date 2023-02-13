import styled from "styled-components";

const DropDownContainer = styled.div``;

const DropDownHeader = styled.div``;

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
