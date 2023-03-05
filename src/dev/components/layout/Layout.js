import StickyHeader from "./StickyHeader";
import Page from "./Page";

const Layout = (props) => {
  return (
    <div>
      <StickyHeader {...props} />
      <Page>{props.children}</Page>
    </div>
  );
};

export default Layout;
