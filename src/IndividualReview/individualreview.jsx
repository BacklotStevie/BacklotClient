import React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from "react";
import { userContext } from "../context/UserCtx";
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const IndividualReview = (props) => {
    const { user } = useContext(userContext);
    const [individual, setIndividual] = useState(false)
    const history = useHistory()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/reviews/${props.match.params.id}`)
            .then((res) => {

                console.log(res.data)
                setIndividual(res.data)
            })
    }, [])


    const handleOnClick = () => {
        axios.delete(`${process.env.REACT_APP_API_BASE_URL}/reviews/${props.match.params.id}`)
            .then((res) => {
                console.log(res)
                history.push("/reviews")
            })
            .catch((error) => {
                console.log(error)
            })
    }
    console.log(user)
    const ShowIndividual = () => {

        return (
            <div className="m-4">
                <div className="story-title m-3">
                    <h1>{individual?.title}</h1>
                    <h4 className="mb-5">{individual?.writer}</h4>
                </div>
                <div className="review-img">
                    <img className="story-img m-auto" src={individual?.img} alt='image' />
                </div>
                <div className="story-text">
                    {individual?.reviews?.map((nestedInfo) =>
                        <>
                            <h3 className="mt-5">{nestedInfo.heading}</h3>
                            <p className="m-3">{nestedInfo.info}</p>
                        </>
                    )}
                </div>
                {user.userType === "admin" ? (
                    <div className="text-center">
                        <Link to={`/reviews/edit/${individual._id}`}><button className="m-3">Edit</button></Link>
                        <button onClick={handleOnClick}>Delete</button>
                    </div>
                ) : null}

            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <ShowIndividual />
            </div>
        </div>
    );
};



export default IndividualReview;