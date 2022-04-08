
import { useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import Router from 'next/router'

export default function TopBar(props) {




    const [mobileMenu, setMobileMenu] = useState(true);
    const [userDropMenu, setUserDropMenu] = useState(true);


    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'STREAMS', href: '/streams' },
        { name: 'VIDEOS', href: '/videos' },
        { name: 'STORE', href: '/store' },
        { name: 'OFFERS', href: '/offers' }

    ]




    return (
        <>
            <nav className='bg-darkpurple'>
                <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                    <div className='relative flex items-center justify-between h-16'>
                        <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>

                            <button onClick={() => { setMobileMenu(!mobileMenu) }} type='button' className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' aria-controls='mobile-menu' aria-expanded='false'>
                                <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                                </svg>

                                <svg className='hidden h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            </button>
                        </div>
                        <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                            <div className='flex-shrink-0 flex items-center'>
                                <img className='block lg:hidden h-8 w-auto' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6d14c58a-4738-4131-8b8e-26b3391957f3/d6fki02-9d14047f-4b9a-4a6a-8df3-c80be4ef05b3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZkMTRjNThhLTQ3MzgtNDEzMS04YjhlLTI2YjMzOTE5NTdmM1wvZDZma2kwMi05ZDE0MDQ3Zi00YjlhLTRhNmEtOGRmMy1jODBiZTRlZjA1YjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0I7Z8pES7tLIMOSvzzdeQW-dDkYMFKsr1qjaJBj-j20' alt='Workflow' />
                                <img className='hidden lg:block h-8 w-auto' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6d14c58a-4738-4131-8b8e-26b3391957f3/d6fki02-9d14047f-4b9a-4a6a-8df3-c80be4ef05b3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZkMTRjNThhLTQ3MzgtNDEzMS04YjhlLTI2YjMzOTE5NTdmM1wvZDZma2kwMi05ZDE0MDQ3Zi00YjlhLTRhNmEtOGRmMy1jODBiZTRlZjA1YjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0I7Z8pES7tLIMOSvzzdeQW-dDkYMFKsr1qjaJBj-j20' alt='Workflow' />
                                <h1 className='text-white text-xl ml-3 rubik'>FFUNNYTO</h1>
                            </div>
                            <div className='hidden sm:block sm:ml-6'>
                                <div className='flex space-x-4'>
                                    {
                                        navLinks.map((link, idx) => {
                                            return <a key={idx} onClick={() => { Router.push(link.href) }} className="text-white px-3 py-2 cursor-pointer rounded-md text-sm font-medium hover:underline">{link.name}</a>
                                        })

                                    }
                                    {
                                        (props?.session?.user.mod === true) ?
                                            <>
                                                <a onClick={() => { Router.push('/admin') }} className="text-white bg-yellow-400 px-3 py-2 cursor-pointer rounded-md text-sm font-medium hover:underline">ADMIN-DASHBOARD</a>
                                            </>
                                            :
                                            <></>
                                    }

                                </div>
                            </div>
                        </div>
                        <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                            {
                                props.session === null ?
                                    <>
                                        <a onClick={() => { signIn('twitch') }} className='border-white border-separate border-2 bg-purple-900 text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer' aria-current='page'>
                                            LOGIN
                                        </a>
                                    </> :
                                    <>
                                        <button type='button' className='p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                                            <svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' />
                                            </svg>
                                        </button>
                                        <div className='ml-3 relative' onClick={() => { setUserDropMenu(!userDropMenu) }}>
                                            <div>
                                                <button type='button' className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white' id='user-menu-button' aria-expanded='false' aria-haspopup='true'>
                                                    <span className='sr-only'>Open user menu</span>
                                                    <img className='h-8 w-8 rounded-full' src={props.session?.user?.image} alt='' />
                                                </button>
                                            </div>
                                            <div hidden={userDropMenu} className='origin-top-right z-50 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none' role='menu' aria-orientation='vertical' aria-labelledby='user-menu-button' tabIndex='-1'>
                                                <a href='#' className='block px-4 py-2 text-sm text-gray-700' role='menuitem' tabIndex='-1' id='user-menu-item-0'>Your Profile</a>
                                                <a href='#' className='block px-4 py-2 text-sm text-gray-700' role='menuitem' tabIndex='-1' id='user-menu-item-1'>Settings</a>
                                                <a onClick={() => { signOut(); }} href='#' className='block px-4 py-2 text-sm text-red-700' role='menuitem' tabIndex='-1'>Sign out</a>
                                            </div>
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
                </div>


                <div className='sm:hidden' id='mobile-menu'>
                    <div className='px-2 pt-2 pb-3 space-y-1' hidden={mobileMenu}>
                        {
                            navLinks.map((link, idx) => {
                                return (<a onClick={() => { Router.push(link.href) }} key={idx} className='bg-white text-darkpurple block px-3 py-2 rounded-md text-base font-medium' aria-current='page'>{link.name}</a>);
                            })
                        }
                        {
                            (props?.session?.user.mod === true) ?
                                <>
                                    <a onClick={() => { Router.push('/admin') }} className="bg-yellow-400 text-white block px-3 py-2 rounded-md text-base font-medium">ADMIN-DASHBOARD</a>
                                </>
                                :
                                <></>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}