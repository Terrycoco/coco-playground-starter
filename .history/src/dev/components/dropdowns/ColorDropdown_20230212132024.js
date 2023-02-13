import { useTheme } from "@/hooks";
import { Dropdown, DropdownItem } from "@/dev/components/dropdowns";

const ColorDropdown = () => {
  const { theme } = useTheme();

  return (
    <Dropdown>
      <DropdownItem />
    </Dropdown>
  );
};

export default ColorDropdown;
