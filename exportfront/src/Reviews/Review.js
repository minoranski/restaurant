import React from 'react';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


/*rate is number from 0 to 5*/
const Review = ({review}) => {
    let now_date = new Date();
    const defaulte_date = review.created_date;
    const likes_default = 0;//review.likes;
    const dislikes_default = 0;//review.dislikes;
    const default_rate = review.rating;
    const default_name = review.username;
    const default_avatar_path = "https://sun9-84.userapi.com/s/v1/if1/3-t6LjppWmMGoIxfapK6o63LgMWNnHdfaPDJtq3zZHtBIua4UO1dNM6a8ZN-kUkF3_hi0cnP.jpg?size=2048x1536&quality=96&type=album";
    const default_text = review.text;
    return (
            <div className='feedbackPanel'>
                <div className='feedbackPanelHeader'>
                    <div className='feedbackAuthor'>
                        <img src={default_avatar_path} className='avatar'/>
                        <div className='authorName'>{default_name}</div>
                    </div>
                    <div className='feedbackRate'>
                        {Rating(default_rate)}
                    </div>
                </div>
                <div className='feedbackPanelText'>
                    <div className='feedbackText'>{default_text}</div>
                </div>
                <div className='feedbackPanelFooter'>
                    <div className='feedbackDate'>
                        {defaulte_date.toString().substr(0, 10)}
                    </div>
                    <div className='feedbackEstimate'>
                        <IconButton><ThumbUpIcon className='like'></ThumbUpIcon></IconButton>
                        <div className='like_counter'>
                            {likes_default}
                        </div>
                        <IconButton><ThumbDownIcon className='dislike'></ThumbDownIcon></IconButton>
                        <div className='dislike_counter'>
                            {dislikes_default}
                        </div>
                    </div>
                </div>
            </div>
    );
};

function Star(is_selected) {
    if (is_selected == true) {
        return (
            <div className='star'>
                <img className='star' src='../images/star_fav.png'/>
                <div className='circleStar'></div>
            </div>
        )
    } else if (is_selected == false || is_selected == undefined || is_selected == null)
        return (
            <div className='star'>
                <img className='star' src='../images/star.png'/>
                <div className='circleStar'></div>
            </div>
        )
}

function Rating(rate) {
    if (rate < 0 || rate > 5) return (<div className='stars'></div>);
    else {
        switch (rate) {
            case 0:
                return (<div className='stars'>
                    {Star(false)}
                    {Star(false)}
                    {Star(false)}
                    {Star(false)}
                    {Star(false)}

                </div>);
                break;
            case 1:
                return (<div className='stars'>
                    {Star(true)}
                    {Star(false)}
                    {Star(false)}
                    {Star(false)}
                    {Star(false)}

                </div>);
                break;
            case 2:
                return (<div className='stars'>
                    {Star(true)}
                    {Star(true)}
                    {Star(false)}
                    {Star(false)}
                    {Star(false)}

                </div>);
                break;
            case 3:
                return (<div className='stars'>
                    {Star(true)}
                    {Star(true)}
                    {Star(true)}
                    {Star(false)}
                    {Star(false)}

                </div>);
                break;
            case 4:
                return (<div className='stars'>
                    {Star(true)}
                    {Star(true)}
                    {Star(true)}
                    {Star(true)}
                    {Star(false)}

                </div>);
                break;
            case 5:
                return (<div className='stars'>
                    {Star(true)}
                    {Star(true)}
                    {Star(true)}
                    {Star(true)}
                    {Star(true)}

                </div>);
                break;
        }
    }
}

export default Review;