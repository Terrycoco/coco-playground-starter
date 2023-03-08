const Page = (props) => {
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
