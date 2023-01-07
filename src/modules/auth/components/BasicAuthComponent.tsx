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
      <p className="text-2xl font-bold text-neutral/80">
        Welcome {session?.user?.name}!
      </p>
      <p className="text-xl font-medium text-neutral/70">
        {session?.user?.email}
      </p>
      <button className="btn-primary btn" onClick={() => signOut()}>
        Sign Out
      </button>
    </div>
  );
};

const GuestComponent: React.FC = () => {
  return (
    <div className="flex h-20 flex-col items-center justify-center gap-4">
      <p className="text-2xl font-bold  text-neutral/80">Welcome Guest!</p>
      <p className="text-xl font-medium  text-neutral/70">
        Please sign in to continue
      </p>
      <button className="btn-primary btn" onClick={() => signIn()}>
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
      <button className="btn-primary btn" onClick={() => signIn()}>
        Sign In
      </button>
    </div>
  );
};

export default BasicAuthComponent;
