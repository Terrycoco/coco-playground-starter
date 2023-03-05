import StickyHeader from "./StickyHeader";
import Page from "./Page";

const Layout = (props) => {
  return (
    <div>
      <StickyHeader />
      {props.children}
    </div>
  );
};

export default Layout;
