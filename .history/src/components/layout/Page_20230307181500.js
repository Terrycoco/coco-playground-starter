const Page = (props) => {
  return (
    <div
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
