'use client'
import React, { useState } from "react";
import "./review.scss"
import { IReview } from "@/types/Product";
import Rating from "@mui/material/Rating";
import Image from "next/image";

type ReviewProps = {
    review: IReview
}
const Review: React.FC<ReviewProps> = ({ review }) => {
    const [openFeedback, setOpenFeedback] = useState(false);
    const [feedback, setFeedBack] = useState({
        name: '',
        email: '',
        phone: '',
        content: ''
    })

    const handleChangeFeedback = (key: string, value: string) => {
        setFeedBack({ ...feedback, [key]: value })
    }

    return (
        <div className="review-list__item">
            <div className="review-list__item__name">
                <p>
                    {review.name ?? ''}
                </p>
                <Rating name="read-only" sx={{
                    fontSize: '14px'
                }} defaultValue={review.rate} precision={0.1} readOnly /></div>
            <div className="review-list__item__content">{review.content}</div>
            <div className="review-list__item__option">
                <button className="option__feedback" onClick={() => setOpenFeedback(prev => !prev)}>{openFeedback === true ? 'Đóng' : 'Gửi trả lời'}</button>
                <button className="option__like"><svg className="icon-useful" version="1.1" viewBox="0 0 30 30" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M4,25h2l0,0c1.281,1.281,3.017,2,4.828,2H21l2-2v-4l0.5-10H14c0,0,1-3.266,1-4c0-2.251,0-5-3-5c-1,0-1,0-1,0l-0.501,3.491  L8.132,9.894C7.435,11.191,6.082,12,4.609,12H4V25z"></path><circle cx="23.5" cy="13.5" r="2.5"></circle><circle cx="22.5" cy="21.5" r="2.5"></circle><circle cx="23.5" cy="17.5" r="2.5"></circle><circle cx="21" cy="25" r="2"></circle><circle cx="21" cy="25" r="2"></circle></svg>Hữu ích</button>
            </div>
            {review.images ?
                <div className="review-list__item__image">
                    {review.images.map((image) => (
                        <div className="image-review-item" key={image.url}><Image src={image.url} width={image.width ?? 100} height={80} layout="responsive" alt="image review" /></div>
                    ))}
                </div>
                : ''}
            {openFeedback === true ?
                <div className="feedback-box">
                    <div className="feedback-info">
                        <input className="feedback-input" type="text" value={feedback.name} onChange={(event) => handleChangeFeedback('name', event.target.value)} placeholder="Nhập tên của bạn" />
                        <input  className="feedback-input" type="text" value={feedback.email} onChange={(event) => handleChangeFeedback('email', event.target.value)} placeholder="Địa chỉ email" />
                        <input  className="feedback-input" type="text" value={feedback.phone} onChange={(event) => handleChangeFeedback('phone', event.target.value)} placeholder="Số điện thoại (nếu có)" />
                    </div>
                    <div className="feedback-content">
                        <input className="feedback-input__content"  type="text" value={feedback.content} onChange={(event) => handleChangeFeedback('content', event.target.value)} placeholder="Số điện thoại (nếu có)" />
                    </div>
                    <div className="feedback-button">
                        <button className="feedback-button__button">Trả lời</button>
                    </div>
                </div> : ''}

        </div>
    )
}

export default Review;