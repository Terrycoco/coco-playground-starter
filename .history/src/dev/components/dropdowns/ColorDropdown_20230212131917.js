import { useTheme } from "@/hooks";
import { Dropdown, DropdownItem } from "@/dev/components/dropdowns";

const ColorDropdown = () => {
  const { theme } = useTheme();

  const getOptions = () => {
    let result = [];
    for (const p in theme.colors) {
      result.push(
        <option key={p} value={theme.colors[p]}>
          <div>
            {p}
            <span
              style={{
                backgroundColor: `${theme.colors[p]}`,
                minWidth: "20px",
              }}
            >
              {"i am a span"}
            </span>
          </div>
        </option>
      );
    }
    return result;
  };

  return <Dropdown />;
};

export default ColorDropdown;
