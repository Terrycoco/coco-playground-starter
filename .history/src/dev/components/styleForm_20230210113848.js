import useTheme from "@/hooks/useTheme";

const StyleForm = ({ section, key, ...props }) => {
  const { theme } = useTheme;

  const renderProps = () => {
    for (const p in theme[section][key]) {
      console.log(`${property}: ${object[property]}`);
    }
  };

  return (
    <div>
      <div>{section}</div>
    </div>
  );
};

export default StyleForm;
