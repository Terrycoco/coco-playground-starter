import { useTheme, useViewport } from "@/hooks";

const Page = (props) => {
  const { theme } = useTheme();

  return (
    <div
      style={theme.layout.page}
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
