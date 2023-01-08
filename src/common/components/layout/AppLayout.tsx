import React from "react";
import BottomNav from "../../../modules/navigation/components/BottomNav";
import SideNav from "../../../modules/navigation/components/SideNav";
import TopNav from "../../../modules/navigation/components/TopNav";
import type { PageName } from "../../../types/pageName";

type AppLayoutProps = {
  children: React.ReactNode;
  pageName: PageName;
};
const AppLayout: React.FC<AppLayoutProps> = ({ children, pageName }) => {
  return (
    <div className="container mx-auto flex min-h-screen flex-col">
      <div className="flex h-full w-full flex-1 ">
        <div className="hidden min-w-[6rem] border-2 border-red-500   md:block lg:min-w-[15rem] 3xl:min-w-[20rem]">
          <SideNav pageName={pageName} />
        </div>
        <div className="w-full border-2 border-blue-500  ">
          <div className="  w-full  border-2  border-yellow-500 ">
            <TopNav pageName={pageName} />
          </div>
          {children}
        </div>
      </div>
      <div className="min-h-[5rem] border-2 border-green-500 md:hidden">
        <BottomNav pageName={pageName} />
      </div>
    </div>
  );
};

export default AppLayout;
