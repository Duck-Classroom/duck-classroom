import ThemeSwitch from "../../../common/components/elements/ThemeSwitch";
import type { PageName } from "../../../types/pageName";

type TopNavProps = {
  pageName: PageName;
};

const TopNav: React.FC<TopNavProps> = ({ pageName }) => {
  return (
    <div className=" p-1x">
      <div className=" flex h-2x w-full items-center justify-between lg:h-3x 3xl:h-4x">
        <div className="text-4xl font-semibold capitalize">{pageName}</div>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default TopNav;
