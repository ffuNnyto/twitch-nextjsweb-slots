import React, { useEffect, useState } from "react";

export default class Stream extends React.Component {

    render = () => {
        return (
            <>
                <div className="flex justify-center">
                    <h1 className="rubik text-xl p-5 text-white">LIVE STREAM</h1>
                </div>


                <div className="container max-w-screen-lg mx-auto cursor-pointer flex flex-wrap w-full justify-center">
                    <div className='flex w-full items-center justify-center'>
                        <iframe
                            src={process.env.TWITCH_VIDEO}
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen={true}
                            width="100%"
                            height="500"
                        >
                        </iframe>
                    </div>
                </div>
            </>
        );
    }
}