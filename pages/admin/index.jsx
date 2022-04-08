import TopBar from '../../components/topbar';
import { useSession, signIn, signOut } from "next-auth/react"
import BonusHunt from '../../components/admin/bonushunt';
import Router from 'next/router';




export default function Store() {

    const { data: session, status } = useSession();
    
    return (
        <>
            <TopBar session={session} />
            <ul className="flex rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-dar admin-media">
                <li className="w-full">
                    <div id='0' className="dark:text-white cursor-pointer inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-500 bg-white hover:text-gray-700" aria-current="page">
                        <p>BONUS HUNTS</p>
                    </div>
                </li>
                <li className="w-full">
                    <div id='1' className="dark:text-white cursor-pointer inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-500 bg-white hover:text-gray-700 hover:bg-gray-50 ">
                        <p>SETTINGS</p>
                    </div>
                </li>
                <li className="w-full">
                    <div id='1' className="dark:text-white cursor-pointer inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-500 bg-white hover:text-gray-700 hover:bg-gray-50 ">
                        <p>GIVEAWAYS</p>
                    </div>
                </li>
                <li className="w-full">
                    <div id='1' className="dark:text-white cursor-pointer inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-500 bg-white hover:text-gray-700 hover:bg-gray-50 ">
                        <p>OVERLAY</p>
                    </div>
                </li>
            </ul>
            <BonusHunt />
        </>
    );
}
