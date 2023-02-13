import { useTheme } from "@/hooks";

const ColorDropdown = () => {
  const { theme } = useTheme();

  const getOptions = () => {
    let result = [];
    for (const p in theme.colors) {
      result.push(
        <option key={p} value={theme.colors[p]}>
          {p}
          <span
            style={{ backgroundColor: `${theme.colors[p]}, width: '20px'` }}
          ></span>
        </option>
      );
    }
    return result;
  };

  return (
    <select name="color" id="color">
      {getOptions()}
    </select>
  );
};

export default ColorDropdown;
