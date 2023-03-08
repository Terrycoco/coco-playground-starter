import { useTheme } from "@/hooks";

const Page = (props) => {
  const { theme } = useTheme();

  const styles = {
    page: {
      minHeight: "100vh",
      width: "100vw",
      overflowY: "scroll",
      zIndex: "0",
    },
  };

  return <div styles={styles.page}>{props.children}</div>;
};

export default Page;
