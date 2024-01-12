import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import Axios from '../../axios';
import { IoReloadSharp } from "react-icons/io5";
import { Routes } from '../../routes';
import axios from 'axios'

const socket = io.connect('https://leadesh-whatsapp.onrender.com', {

    reconnection: true, // Enable reconnection
    reconnectionAttempts: 5, // Maximum number of reconnection attempts
    reconnectionDelay: 1000,

});

const QrPage = ({ history }) => {
    const [user, setUser] = useState();
    const [timedOut, setTimeOut] = useState(false);
    const [qr, setQR] = useState(null);

    // console.log(user);

    useEffect(() => {
        socket.emit("whatsapp connect", user?._id);

        socket.on("qrCode", (qrCodeDataURL) => {

            setQR(qrCodeDataURL);
        });

        socket.on("user disconnected", async () => {
            const { data } = await axios.post("/api/logout");
            history.push("/", { replace: true });
        });

        socket.on("request timed out", () => {
            setTimeOut(true);
        });

        socket.on("user connected", () => {
            history.push(Routes.messages.path, { replace: true });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => {
            // Clean up socket event listeners when the component unmounts
            socket.off("user connected");
        };
    }, [user]);



    const getMe = async () => {
        try {
            const { data } = await axios.get('/api/getMe')
            console.log(data);
            setUser(data);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getMe()
    }, [])
    return (
        <>
            {qr ? (
                <div className='flex flex-col items-center justify-center gap-1 mt-16 relative'>
                    {timedOut && (
                        <IoReloadSharp
                            onClick={() => {
                                setTimeOut(false);
                                socket.emit("whatsapp connect", user._id);
                            }}
                            style={{
                                width: "3em",
                                height: "3em",
                                position: "absolute",
                                opacity: "100%",
                                color: "black",
                                zIndex: 30,
                                cursor: "pointer",
                            }}
                        />
                    )}
                    <img
                        src={qr}
                        className={timedOut ? "opacity-40" : ""}
                    />
                    <p className='text-center font-medium'>
                        {timedOut ? "QR code timed out" : "scan this QR code to continue"}
                    </p>
                </div>
            ) : (
                <h1 className='text-center mt-16'>Checking User status...</h1>
            )}
            <div className='flex flex-col text-lg items-center font-bold justify-center gap-1 mt-4'>
                <p>{user?.name}</p>
                <p>{user?.number}</p>
            </div>
        </>
    )
}

export default QrPage