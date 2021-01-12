import React, { useState } from 'react';
import axios from 'axios';

function AddReview() {
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
        let reviewsCp = [...reviews];
        let reviewCp = { ...reviews[index] }
        reviewCp[event.target.name] = event.target.value
        reviewsCp[index] = reviewCp
        setReviews(reviewsCp)
    }


    function addReviewHandler(event) {

        let combined = {
            ...article,
            reviews: reviews
        }

        event.preventDefault();
        var config = {
            method: 'post',
            url: `${process.env.REACT_APP_API_BASE_URL}/writeReview`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json'
            },
            data: { combined }
        };
        axios(config)
            .then((response) => {

            })
            .catch((error) => {

            });

    }
    function addAnotherReview() {
        let reviewsCp = [...reviews];
        reviewsCp.push({ heading: "", info: "" })
        setReviews(reviewsCp)
    }

    function removeAReview(index) {

    }
    return (
        <form onClick={addReviewHandler}>
            <input type="text" name="title" value={article.title} placeholder="title" onChange={handleArticleChange}></input>
            <input type="text" name="writer" value={article.writer} placeholder="writer" onChange={handleArticleChange}></input>

            {reviews.map((review, index) => <>
                <input type="text" name="heading" value={reviews.heading} placeholder="headings" onChange={(e) => handleReviewChange(e, index)}></input>
                <input type="text" name="info" value={reviews.info} placeholder="body text" onChange={(e) => handleReviewChange(e, index)}></input>
                <button>Remove</button>
            </>)}

            <button onClick={addAnotherReview}>Add Another Review</button>
            <input type="text" name="img" value={article.img} placeholder="images" onChange={handleArticleChange}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddReview;