import React from 'react';
import { Card, Rate, Button, Tooltip } from 'antd';
import saleicon from '../../src/assets/Images/saleicon.svg'
import arrowimage from '../../src/assets/Images/learnmorearrowimage.svg'
import likeicon from '../assets/Images/likeicon.svg'
import shoppingicon from '../assets/Images/basketicon.svg'
import eyeicon from '../assets/Images/eyeiconimage.svg'
const { Meta } = Card;

const CourseCard = ({ image, tag, category, title, description, sales, originalPrice, discountedPrice}) => {
    return (
        <Card
            hoverable
            cover={
                <div className="card-cover">
                    <img alt={title} src={image} />
                    {tag && <span className="sale-tag">{tag}</span>}
                    <div className='icons'>
                        <div className='icon_img'>
                        <img src={likeicon} alt='likeicon'/>
                        </div>
                        <div className='icon_img'>
                        <img src={shoppingicon} alt='shoppingicon'/>
                        </div>
                            <div className='icon_img'>
                        <img src={eyeicon} alt='eyeicon'/>
                        </div>
                    </div>
                </div>
            }

            className="course-card"
        >
            <div className="course-category">{category}</div>
            <Meta title={title} description={description} />
            <div className="course-sales"><img src={saleicon} alt='saleicon'/>{sales} Sales</div>
            <div className="course-price">
                <span className="original">${originalPrice}</span>
                <span className="discounted">${discountedPrice}</span>
            </div>
            {/* <div className="course-rating">
                <Rate allowHalf disabled defaultValue={rating} />
                <span>{rating}</span>
            </div> */}
            <Button className="learn-more-btn" type="default" shape="round">Learn More<img src={arrowimage} alt='arrowimage'/></Button>
        </Card>
    );
};

export default CourseCard;
