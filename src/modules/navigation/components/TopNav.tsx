import type { PageName } from "../../../types/pageName";

type TopNavProps = {
  pageName: PageName;
};

const TopNav: React.FC<TopNavProps> = ({ pageName }) => {
  return (
    <div className=" p-5">
      <div className=" flex  h-10    w-full items-center  lg:h-16 3xl:h-20">
        <div className="text-3xl">{pageName}</div>
      </div>
    </div>
  );
};

export default TopNav;
