import styled from 'styled-components';

export const ChatItem = styled.li`
  padding: 16px;
  cursor: pointer;
`;

export const ChatItemText = styled.span`
  background: var(--pink-btn);
  -webkit-background-clip: text;
  color: transparent;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    background: var(--pink-btn);
    -webkit-background-clip: text;
    color: transparent;
  }

  ${props => {
    return props.$isActive || 'color: #160132;';
  }};
`;
