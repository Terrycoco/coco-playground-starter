import useTheme from "@/hooks/useTheme";

const StyleForm = ({ section, element, ...props }) => {
  const { theme } = useTheme;
  console.log("theme: ", theme);

  const renderProps = () => {
    for (const p in theme[section][element]) {
      console.log(`${p}: ${object[p]}`);
    }
  };

  return (
    <div>
      <div>{section}</div>
      {renderProps()}
    </div>
  );
};

export default StyleForm;
