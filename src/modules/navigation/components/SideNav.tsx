import Image from "next/image";
import Link from "next/link";
import type { PageName } from "../../../types/pageName";

type SideNavProps = {
  pageName: PageName;
};
const SideNav: React.FC<SideNavProps> = ({ pageName }) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="m-1x flex items-center justify-center lg:justify-evenly lg:gap-1x">
        <Image
          className="h-2x w-2x lg:h-3x lg:w-3x 3xl:h-4x 3xl:w-4x"
          src="duck.svg"
          alt="duck logo"
          width={100}
          height={100}
        />
        <div className=" hidden text-center text-xl font-semibold lg:block 3xl:text-2xl">
          <span className="font-itim text-2xl 3xl:text-4xl">DUCK</span> <br />{" "}
          Classroom
        </div>
      </div>
      <nav className="flex justify-center">
        <ul className="menu rounded-box   m-1x w-full gap-2 bg-base-200/25 p-2">
          {["dashboard", "classroom", "schedule", "settings"].map((val) => (
            <li key={val}>
              <Link
                href={`/${val}`}
                className={`btn-square  mx-auto lg:btn-block  ${
                  val === pageName
                    ? "btn-primary text-primary-content"
                    : "text-base-content/50 hover:text-base-content"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 3xl:h-8 3xl:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="hidden text-lg capitalize lg:block 3xl:text-xl">
                  {val}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
