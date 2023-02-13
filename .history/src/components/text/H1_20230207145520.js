import { withTheme, styled } from "styled-components";

class H1 extends React.Component {
  render() {
    console.log("Current theme: ", this.props.theme);
    // ...
  }
}

export default withTheme(H1);
