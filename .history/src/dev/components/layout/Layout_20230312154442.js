import StickyHeader from "./StickyHeader";
import Page from "./Page";
import Drawer from "@/components/drawers/Drawer";
import { useSelector } from "react-redux";
import {
  selectDrawerIsOpen,
  selectCurrentPage,
  selectCurrentForm,
} from "@/store/playgroundSlice";
import FontForm from "@/dev/components/forms/FontForm";
import ScaleForm from "@/dev/components/forms/ScaleForm";

const Layout = (props) => {
  const showDrawer = useSelector(selectDrawerIsOpen);
  const currentPage = useSelector(selectCurrentPage);
  const currentForm = useSelector(selectCurrentForm);

  const getForm = () => {
    switch (currentForm) {
      case "fonts": {
        return <FontForm />;
        break;
      }
      case "scale": {
        return <ScaleForm />;
        break;
      }
      default: {
        return <div>nothing here</div>;
      }
    }
  };

  return (
    <div>
      <StickyHeader {...props} />
      <Drawer show={showDrawer} openWidth="500px">
        <ScaleForm />
      </Drawer>
      <Page>{props.children}</Page>
    </div>
  );
};

export default Layout;
