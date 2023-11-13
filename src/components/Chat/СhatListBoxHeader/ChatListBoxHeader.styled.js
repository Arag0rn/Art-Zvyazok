import styled from 'styled-components';

export const HeaderBox = styled.div`
  position: relative;
  display: flex;
  height: 80px;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: var(--form-stroke-gradient);
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;
export const ChatHeader = styled.h3`
  color: #160132;
  font-family: Montserrat Alternates;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const HeaderLink = styled.button`
  color: #160132;
  font-family: Montserrat Alternates;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;
  cursor: pointer;

  /* &:hover {
    background: #c7aee9;
    border-radius: ${props => {
    return props.side === 'left' ? '35px 35px 35px 0px' : '35px 35px 0px 35px';
  }};
  } */

  ${props => {
    if (props.isGeneralChat && props.side === 'left') {
      return 'background: #c7aee9; border-radius:35px 35px 35px 0px';
    }
    if (!props.isGeneralChat && props.side === 'right') {
      return 'background: #FFCAF2; border-radius:35px 35px 0px 35px';
    }
  }}
`;
