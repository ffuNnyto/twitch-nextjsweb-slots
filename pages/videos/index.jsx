import TopBar from '../../components/topbar';
import { useSession, signIn, signOut } from "next-auth/react"

export default function Videos() {
    
    const { data: session, status } = useSession();

    return (
        <>
           <TopBar session={session} />
        </>
    );
}