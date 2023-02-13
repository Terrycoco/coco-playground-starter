import styled from "styled-components";

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`;

const DropdownItem = (props) => {
  <ListItem onClick={handleSelect} key={Math.random()} value="mangoes">
    Mangoes
  </ListItem>;
};

export default DropdownItem;
