import { withTheme, styled } from "styled-components";

const H1 = styled.h1`
  color: ${({ theme: { colors } }) => colors.primary};
`;

export default withTheme(H1);
