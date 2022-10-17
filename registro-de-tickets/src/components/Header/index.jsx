import { HeaderStyle } from "./style";
import GB from "../../img/GB.png"

export const Header = () => {
  return (
    <HeaderStyle>
      <img src={GB} alt="" />
      <h4>GlobalWeb</h4>
    </HeaderStyle>
  );
};
