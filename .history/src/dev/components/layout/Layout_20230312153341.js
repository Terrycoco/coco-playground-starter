import StickyHeader from "./StickyHeader";
import Page from "./Page";
import Drawer from "@/components/drawers/Drawer";
import { useSelector } from "react-redux";
import { selectDrawerIsOpen } from "@/store/playgroundSlice";
import FontForm from "@/dev/components/forms/FontForm";

const Layout = (props) => {
  const showDrawer = useSelector(selectDrawerIsOpen);
  return (
    <div>
      <StickyHeader {...props} />
      <Drawer show={showDrawer} openWidth="500px">
        <FontForm />
      </Drawer>
      <Page>{props.children}</Page>
    </div>
  );
};

export default Layout;
