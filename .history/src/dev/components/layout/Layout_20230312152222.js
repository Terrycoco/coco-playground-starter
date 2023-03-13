import StickyHeader from "./StickyHeader";
import Page from "./Page";
import Drawer from "@/components/drawers/Drawer";
import {useSelector} from 'react-redux'

const Layout = (props) => {
  return (
    <div>
      <StickyHeader {...props} />
      <Drawer show={showDrawer} onClose={closeDrawer} openWidth="500px">
      <Page>{props.children}</Page>
    </div>
  );
};

export default Layout;
