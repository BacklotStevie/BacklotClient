import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './reviews.css'

const ReviewsList = (props) => {
    const [reviews, setReviews] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/reviews`)
            .then((res) => {

                console.log(res.data)
                setReviews(res.data)
            })
    }, [])

    const ShowReviews = () => {
        return reviews && reviews.reverse().map((review, i, arr) => {
            return (
                <div className="story col-12 col-sm-4 mb-4">
                    <div className="story-info card">
                        <img className="card-img " src={review.img} alt="card" />
                        <div className="card-img-overlay">
                            <Link to={`/reviews/${review._id}`}><h1>{review.title}</h1></Link>
                            <h4>{review.writer}</h4>
                        </div>
                    </div>

                    {/* <div>
                            {review.reviews?.map((nestedReview) =>
                                <>
                                    <h3>{nestedReview.heading}</h3>
                                    <p>{nestedReview.info}</p>
                                </>
                            )}
                        </div> */}
                </div>


            )
        })
    }


    return (
        <div className="container-fluid p-4">
            <div className="row">
                <ShowReviews />
            </div>
        </div>

    );

};

export default ReviewsList;