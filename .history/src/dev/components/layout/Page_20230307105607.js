import { useTheme } from "@/hooks";

const Page = (props) => {
  const { theme } = useTheme();

  const getStyles = () => {
   return {
      minHeight: "100vh",
      width: "100vw",
      overflowY: "scroll",
      zIndex: "0",
      paddingTop: theme.spacing.page.paddingTop,
      paddingBottom: theme.spacing.page.paddingBottom,
      paddingLeft: theme.spacing.page.paddingLeft,
      paddingRight: theme.spacing.page.paddingRight,
    },
  };

  return <div styles={getStyles()}>{props.children}</div>;
};

export default Page;
