import StickyHeader from "./StickyHeader";
import Page from "./Page";
import Drawer from "@/components/drawers/Drawer";

const Layout = (props) => {
  return (
    <div>
      <StickyHeader {...props} />
      <Page>{props.children}</Page>
    </div>
  );
};

export default Layout;
