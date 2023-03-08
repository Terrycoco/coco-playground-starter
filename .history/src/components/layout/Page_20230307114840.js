import { useTheme, useViewport } from "@/hooks";

const Page = (props) => {
  const { theme } = useTheme();

  const styles = {
    paddingTop: theme.spacing.page.paddingTop + "rem",
    paddingBottom: theme.spacing.page.paddingBottom + "rem",
    paddingLeft: theme.spacing.page.paddingLeft + "rem",
    paddingRight: theme.spacing.page.paddingRight + "rem",
  };

  return (
    <div
      style={styles}
      {...props}
      onClick={(e) =>
        props.onClick ? props.onClick(e, "layout", "page") : null
      }
    >
      {props.children}
    </div>
  );
};

export default Page;
