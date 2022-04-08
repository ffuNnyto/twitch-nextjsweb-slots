import TopBar from '../../components/topbar';
import { useSession, signIn, signOut } from "next-auth/react"

export default function Store() {
    
    const { data: session, status } = useSession();

    return (
        <>
           <TopBar session={session} />
        </>
    );
}