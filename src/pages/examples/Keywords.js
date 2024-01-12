import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Axios from '../../axios'
import axios from 'axios'



const Keywords = () => {
    const [keyword, setKeyword] = useState("");
    const [keywordData, SetKeywordData] = useState([]);
    const [editKeyword, setEditKeyword] = useState("");


    // Form On Change
    const handleKeywordChange = (e) => {
        e.preventDefault();
        setKeyword(e.target.value)
    }
    const handleKeywordUpdateChange = (e) => {
        // e.preventDefault();
        setEditKeyword(e.target.value)
    }





    // EndPoint Requests

    // Add New Keyword
    const handleKeywordsubmit = async () => {

        try {

            await axios.post('/api/tag/add', { tag: keyword });
            // console.log("add keyword : ", response);
            alert("saved")
            setKeyword("")
            getKeyword();
        }
        catch (err) {
            console.log("Error in Add Keyword", err);
        }
    }

    // Update Keyword
    const handleKeywordUpdate = async (id,) => {


        try {
            const response = await axios.post(`/api/tag/edit/${id}`, { tag: editKeyword });
            console.log("Update Response: ", response);
            getKeyword();
            alert("updated");
            setEditKeyword("");
        }
        catch (err) {
            console.log("Error in Updating Keyword");
        }


    }

    // Get All KeyWord
    const getKeyword = async () => {
        try {
            const { data } = await axios.get('/api/tag');
            // console.log("Keyword response ", data);
            SetKeywordData(data);
        }
        catch (err) {
            console.log("Error in get keyword", err);
        }

    }

    // Delete Keyword
    const deleteKeywordHandler = async (id) => {
        try {
            const response = await axios.post(`/api/tag/del/${id}`);
            alert("Keyword Deleted");
            getKeyword();
            console.log("delete response", response);
        } catch (error) {
            console.error("Error deleting keyword:", error);
            // Handle errors here
        }


    }


    // For Getting KeyWord First time When you Navigate the Keyword Page.
    useEffect(() => {
        getKeyword();
    }, [])


    return (



        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div
                                className="page-title-box d-flex align-items-center justify-content-between mt-5 mb-3"
                            >
                                <div className="fw-bold">
                                    <h2 className="font-weight-bold">Keywords</h2>
                                </div>

                                <div className="page-title-right">

                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                        Add New Keyword
                                    </button>

                                    <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLongTitle">Add Keyword</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <form>
                                                        <div className="form-group">
                                                            <label for="exampleInputEmail1">Keyword</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="exampleInputEmail1"
                                                                name="keyword"
                                                                aria-describedby="emailHelp"
                                                                placeholder="Enter keyword"
                                                                maxLength={25}

                                                                value={keyword}
                                                                onChange={handleKeywordChange} />
                                                            <small id="emailHelp" className="form-text text-muted">keyword should be 25 characters</small>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                                    <button type="button" className="btn btn-success" data-dismiss="modal" onClick={handleKeywordsubmit}>Add</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Keyword</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                keywordData && keywordData?.length !== 0 ?
                                    keywordData.map((item, index) => (
                                        <tr key={index} >

                                            <td>{item.value}</td>
                                            <td><div className="d-flex">
                                                <div className="page-title-right">

                                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#modal-${index}`} onClick={() => setEditKeyword(item.value)}>
                                                        Edit
                                                    </button>

                                                    <div className="modal fade" id={`modal-${index}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title" id="exampleModalLongTitle">Edit Keyword</h5>
                                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <form onSubmit={() => handleKeywordUpdate(item._id)}>
                                                                        <div className="form-group">
                                                                            <label for="exampleInputEmail1">Keyword</label>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                id="exampleInputEmail1"
                                                                                name="keyword"
                                                                                aria-describedby="emailHelp"
                                                                                placeholder="Enter keyword"
                                                                                maxLength={25}

                                                                                value={editKeyword}
                                                                                onChange={handleKeywordUpdateChange} />
                                                                            <small id="emailHelp" className="form-text text-muted">keyword should be 25 characters</small>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                                                    <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => handleKeywordUpdate(item._id)}>Update</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="button" className="btn btn-danger mx-1" onClick={() => deleteKeywordHandler(item._id)}>Delete</button>

                                            </div>
                                            </td>

                                        </tr>
                                    ))
                                    :
                                    <div className="text-center">
                                        Keyword Not Found
                                    </div>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};



export default Keywords