import styled from 'styled-components';

export const Btn = styled.button`
  width: 100%;
  display: flex;
  height: 63px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 20px;
  border: none;
  color: #fff;
  font-family: Montserrat Alternates;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: var(--btn-color);

  &:hover {
    transform: scale(105%);
    cursor: pointer;
  }
`;
