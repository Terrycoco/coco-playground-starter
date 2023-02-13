import styled from "styled-components";
import { useState } from "react";
import { useTheme } from "@/hooks";

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

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`;

const ColorDropdown = ({ listObj, listStyle, ...props }) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState();
  const [selectedLabel, setSelectedLabel] = useState();

  const toggling = (e) => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
    setIsOpen(false);
  };

  const getListItems = () => {
    let result = [];
    for (const p in theme.colors) {
      result.push(
        <ListItem
          onClick={handleSelect}
          key={Math.random()}
          value={theme.colors[p]}
        >
          {p}
        </ListItem>
      );
    }
    return result;
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>{selectedOption}</DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>{getListItems()}</DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default ColorDropdown;
