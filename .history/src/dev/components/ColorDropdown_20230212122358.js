import { useTheme } from "@/hooks";

const ColorDropdown = () => {
  const { theme } = useTheme();
  return (
    <select name="color" id="color">
      <option key="primary" value="primary">
        primary
      </option>
      <option key="secondary" value="secondary">
        secondary
      </option>
      <option key="whitish" value="whitish">
        whitish
      </option>
      <option key="blackish" value="blackish">
        blackish
      </option>
    </select>
  );
};

export default ColorDropdown;
