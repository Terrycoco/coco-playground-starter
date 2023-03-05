import StickyHeader from "./StickyHeader";
import Page from "./Page";

const Layout = (props) => {
  return (
    <div>
      <StickyHeader />
      <Page>{props.children}</Page>
    </div>
  );
};

export default Layout;
