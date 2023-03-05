import StickyHeader from "./StickyHeader";

const Layout = (props) => {
  return (
    <div>
      <StickyHeader />
      {props.children}
    </div>
  );
};

export default Layout;
