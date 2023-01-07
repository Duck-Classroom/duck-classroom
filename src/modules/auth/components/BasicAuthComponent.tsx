import type { Session } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
const BasicAuthComponent = () => {
  const { data: session, status } = useSession();
  return status === "loading" ? (
    <SkeletonComponent />
  ) : status === "unauthenticated" ? (
    <GuestComponent />
  ) : session ? (
    <UserComponent session={session} />
  ) : (
    <GuestComponent />
  );
};

type UserComponentProps = {
  session: Session;
};

const UserComponent: React.FC<UserComponentProps> = ({ session }) => {
  return (
    <div className="flex h-20 flex-col items-center justify-center gap-4">
      <p className="text-2xl font-bold  ">Welcome {session?.user?.name}!</p>
      <p className="text-xl font-medium  ">{session?.user?.email}</p>
      <button
        className="rounded-md bg-[#2e026d] px-4 py-2 text-lg font-semibold   text-white shadow-md hover:bg-[#15162c]"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </div>
  );
};

const GuestComponent: React.FC = () => {
  return (
    <div className="flex h-20 flex-col items-center justify-center gap-4">
      <p className="text-2xl font-bold  ">Welcome Guest!</p>
      <p className="text-xl font-medium  ">Please sign in to continue</p>
      <button
        className="rounded-md bg-[#2e026d] px-4 py-2 text-lg font-semibold   shadow-md hover:bg-[#15162c]"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </div>
  );
};

const SkeletonComponent: React.FC = () => {
  return (
    <div className="flex h-20 flex-col items-center justify-center gap-4">
      <p className="text-2xl font-bold  text-transparent ">Welcome Guest!</p>
      <p className="text-xl font-medium  text-transparent">
        Please sign in to continue
      </p>
      <button
        className="rounded-md bg-[#2e026d] px-4 py-2 text-lg font-semibold   text-transparent shadow-md hover:bg-[#15162c]"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </div>
  );
};

export default BasicAuthComponent;
