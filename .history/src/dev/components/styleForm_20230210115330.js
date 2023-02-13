import useTheme from "@/hooks/useTheme";

const StyleForm = ({ section, element, ...props }) => {
  const { theme } = useTheme;
  console.log("theme: ", theme);

  const renderProps = () => {
    let obj = theme["text"]["h1"];
    for (const p in obj) {
      console.log(`${p}: ${obj[p]}`);
    }
  };

  return (
    <div>
      <div>{theme[section]} </div>
      {renderProps()}
    </div>
  );
};

export default StyleForm;
