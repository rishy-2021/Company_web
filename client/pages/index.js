import { getSession, useSession } from "next-auth/react";
import HomeComp from "../components/HomeComp";
import Login from "../components/loginComp";

export default function Home() {
  const { data: session } = useSession();
  // console.log("session", session);
  return (
    <>
      <div>{session ? <HomeComp /> : <Login />}</div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
}
