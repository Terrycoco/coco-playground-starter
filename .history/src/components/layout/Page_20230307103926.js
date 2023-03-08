import { useTheme, useViewport } from "@/hooks";

const Page = (props) => {
  const { theme } = useTheme();

  const styles = {
    paddingTop: theme.spacing.page.paddingTop,
    paddingBottom: theme.spacing.page.paddingBottom,
    paddingLeft: theme.spacing.page.paddingLeft,
    paddingRight: theme.spacing.page.paddingRight,
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
