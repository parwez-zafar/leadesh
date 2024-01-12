import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Axios from '../../axios'
import axios from 'axios'


const StarMessage = () => {
    const [message, setMessage] = useState([]);

    const allMessages = async () => {
        try {
            const response = await Axios.get("/api/refreshMessages");
            // console.log(response.data)
            setMessage(response.data)
        } catch (error) {
            console.error("Error fetching messages:", error);
            throw error;
        }
    };
    useEffect(() => {
        allMessages();
    }, [])
    const formatTimestamp = (timestamp) => {
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };

        const date = new Date(timestamp);
        const formattedDate = date.toLocaleString('en-US', options);

        return formattedDate;
    }
    const handleStarClick = async (id) => {
        try {
            const response = await Axios.post(`/api/message/star/${id}`);
            console.log("start ", response);
            allMessages();
        }
        catch (err) {
            console.log("error in set start ", err);
        }
    };
    return (
        <section>



            <table className="table table-hover table-responsive-xl table-responsive-md">
                <thead>
                    <tr>
                        <th scope="col" >Name</th>
                        <th scope="col">Group Name</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Message</th>
                        <th scope="col">Date And Time</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody style={{}}>
                    {
                        message.length !== 0 && message
                            .filter((item) => item.isStarred).length !== 0 ?
                            message
                                .filter((item) => item.isStarred)
                                .map((item, index) =>
                                    <tr key={index}>
                                        <th scope="row">{item.username}</th>
                                        <td>Sales Team</td>
                                        <td>{item.phoneNumber}</td>
                                        <td>{item.conversation}</td>
                                        <td>{formatTimestamp(item.timestamp)}</td>
                                        <td>
                                            <FontAwesomeIcon
                                                id='start'
                                                icon={faStar}
                                                style={{
                                                    color: item.isStarred ? "#fba918" : "gray",
                                                    cursor: 'pointer', // Add this to show it's clickable
                                                }}
                                                onClick={() => handleStarClick(item._id)}
                                            />
                                        </td>
                                    </tr>
                                ) :
                            <div className='text-center'>
                                No Any message
                            </div>
                    }


                </tbody>
            </table>

            {/* <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item disabled">
                        <a className="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item active">
                        <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" >Next</a>
                    </li>
                </ul>
            </nav> */}
        </section >

    )
}

export default StarMessage