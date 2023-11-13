import { Btn } from './MainBtn.styled';

export const MainBtn = ({ children }) => {
  return (
    <Btn className="btn enter-btn" type="submit">
      {children}
    </Btn>
  );
};
