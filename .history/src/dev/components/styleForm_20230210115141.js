import useTheme from "@/hooks/useTheme";

const StyleForm = ({ section, element, ...props }) => {
  const { theme } = useTheme;
  console.log("theme: ", theme);

  //   const renderProps = () => {
  //     let obj = theme[section][element];
  //     for (const p in obj) {
  //       console.log(`${p}: ${obj[p]}`);
  //     }
  //   };

  return (
    <div>
      <div>{section} </div>
      <div>{element}</div>
    </div>
  );
};

export default StyleForm;
