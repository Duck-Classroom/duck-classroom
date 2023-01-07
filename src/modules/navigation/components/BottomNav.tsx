import type { PageName } from "../../../types/pageName";

type BottomNavProps = {
  pageName: PageName;
};
const BottomNav: React.FC<BottomNavProps> = ({ pageName }) => {
  return <div>{pageName}</div>;
};

export default BottomNav;
