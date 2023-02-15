//import styled from "styled-components";
import { useTheme } from "@/hooks";

function withTheme(WrappedComponent, section, element) {
  const { theme } = useTheme();

  const handleClick = (e) => {
    props.onClick ? props.onClick(e, section, element) : null;
  };

  return (
    <WrappedComponent
      style={theme[section][element]}
      onClick={handleClick}
      {...props}
    >
      {props.children}
    </WrappedComponent>
  );
}

export default withTheme;
