import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './editreview.css'

function EditReview(props) {
    const [article, setArticle] = useState({
        title: "",
        writer: "",
        img: "",
    })

    const [reviews, setReviews] = useState([{
        heading: "",
        info: "",
    }])

    function handleArticleChange(event) {
        setArticle({
            ...article,
            [event.target.name]: event.target.value
        })
    }

    function handleReviewChange(event, index) {
        let reviewsCopy = [...reviews]
        let reviewObjectCopy = { ...reviewsCopy[index] }

        reviewObjectCopy[event.target.name] = event.target.value;
        reviewsCopy[index] = reviewObjectCopy;

        setReviews(reviewsCopy);
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/reviews/${props.match.params.id}`)
            .then((response) => {

                setArticle(response.data)
                setReviews(response.data.reviews)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    function editReviewHandler(event) {

        let combined = {
            ...article,
            reviews: reviews
        }


        event.preventDefault();
        axios.put(`${process.env.REACT_APP_API_BASE_URL}/reviews/${props.match.params.id}`, combined)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <form onSubmit={editReviewHandler}>
            <input type="text" name="title" value={article.title} placeholder="title" onChange={handleArticleChange}></input>
            <input type="text" name="writer" value={article.writer} placeholder="writer" onChange={handleArticleChange}></input>

            {reviews.map((review, index) =>
                <>
                    <input type="text" name="heading" value={review.heading} placeholder="headings" onChange={(e) => handleReviewChange(e, index)}></input>
                    <input type="text" name="info" value={review.info} placeholder="body text" onChange={(e) => handleReviewChange(e, index)}></input>
                </>
            )}

            <input type="text" name="img" value={article.img} placeholder="images" onChange={handleArticleChange}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default EditReview;