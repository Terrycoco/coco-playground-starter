import { withTheme, styled } from "styled-components";

const H1 = styled.h1`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
  color: ${({ theme: { colors } }) => colors.primary};
`;

export default withTheme(H1);
