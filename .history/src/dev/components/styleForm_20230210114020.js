import useTheme from "@/hooks/useTheme";

const StyleForm = ({ section, key, ...props }) => {
  const { theme } = useTheme;
  console.log("theme: ", theme);

  const renderProps = () => {
    // for (const p in theme[section][key]) {
    //   console.log(`${p}: ${object[p]}`);
    // }
  };

  return (
    <div>
      <div>{section}</div>
      {renderProps()}
    </div>
  );
};

export default StyleForm;
