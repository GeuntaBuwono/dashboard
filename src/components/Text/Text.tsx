import styled from 'styled-components';

type FontSizeType = 'small' | 'medium' | 'large';

const fontSizeMapper: Record<FontSizeType, string> = {
  small: '14px',
  medium: '16px',
  large: '24px'
};

const TextPStyled = styled.p<TextInterface>`
  color: ${({ color }) => color};
  font-size: ${({ size }) => fontSizeMapper[size || 'medium']};
  text-transform: ${({ transform }) => transform};
`;

const Text = ({ children, color, size, transform }: TextInterface) => (
  <TextPStyled color={color} size={size} transform={transform}>
    {children}
  </TextPStyled>
);

export default Text;
