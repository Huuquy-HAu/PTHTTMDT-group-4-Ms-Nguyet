import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './UserOrderHistory.css'



function UserOrderItem(props) {
    let totalPrice = 0;
    return (
        <div className='order-container'>
            <div className="order-product--shop">
                <div className="order-product--shop__left">
                    <span className='shop-love'>Yêu thích+</span>
                    <h1>Viet Nam</h1>
                    <button className='chat'> <i className="fa-solid fa-comment"></i> Chat</button>
                    <button className="watch-shop"><i className="fa-solid fa-store"></i>Xem Shop</button>
                </div>

                <div className="order-product--shop__right">
                    <div className={`status-${props.orderItem.status}`}>
                        <span> {props.status} <span><svg viewBox="64 64 896 896" focusable="false" data-icon="question-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"></path></svg></span> </span>
                    </div>
                </div>
            </div>

            <div className="total-product">
                {
                    props.orderItem.listProduct.map((data) => {
                        return (
                            <Fragment>
                                <Link to={'/user/order/' + props.orderItem._id + `${props.type ? `/?type=${props.type}` : ''}`}>
                                    <div className="order-product">
                                        <div className="order-product--detail">
                                            <div className="order-product__img">
                                                <img src={(data.productDetailId?.productId.thumbnail.startsWith('https') ? data.productDetailId?.productId.thumbnail : 'https://shope-b3.thaihm.site/' + data.productDetailId?.productId.thumbnail)} alt="" />
                                            </div>
                                            <div className="order-product__name">
                                                <h3>{data.productDetailId?.productId.productName}</h3>
                                                <div className="order-product__category">
                                                    <span>Phân loại hàng : {data.productDetailId?.color},{data.productDetailId?.ram},{data.productDetailId?.rom}</span>
                                                </div>
                                                <div className="order-product__quantity">
                                                    <span>x{data.quantity}</span>
                                                    <div style={{ display: 'none' }}>{totalPrice += data.quantity * data.productDetailId?.price}</div>
                                                </div>
                                            </div>
                                            <div className="order-product__price">
                                                <span><sup>₫</sup>{data.productDetailId?.price.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='line'></div>
                                </Link>
                            </Fragment>
                        )
                    })
                }
            </div>

            <div className="order-product--total">
                <div className="total-price">
                    <div> <svg width="16" height="17" viewBox="0 0 253 263" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M126.5 0.389801C126.5 0.389801 82.61 27.8998 5.75 26.8598C5.08763 26.8507 4.43006 26.9733 3.81548 27.2205C3.20091 27.4677 2.64159 27.8346 2.17 28.2998C1.69998 28.7657 1.32713 29.3203 1.07307 29.9314C0.819019 30.5425 0.688805 31.198 0.689995 31.8598V106.97C0.687073 131.07 6.77532 154.78 18.3892 175.898C30.003 197.015 46.7657 214.855 67.12 227.76L118.47 260.28C120.872 261.802 123.657 262.61 126.5 262.61C129.343 262.61 132.128 261.802 134.53 260.28L185.88 227.73C206.234 214.825 222.997 196.985 234.611 175.868C246.225 154.75 252.313 131.04 252.31 106.94V31.8598C252.31 31.1973 252.178 30.5414 251.922 29.9303C251.667 29.3191 251.292 28.7649 250.82 28.2998C250.35 27.8358 249.792 27.4696 249.179 27.2225C248.566 26.9753 247.911 26.852 247.25 26.8598C170.39 27.8998 126.5 0.389801 126.5 0.389801Z" fill="#ee4d2d"></path><path fillRule="evenodd" clipRule="evenodd" d="M207.7 149.66L119.61 107.03C116.386 105.472 113.914 102.697 112.736 99.3154C111.558 95.9342 111.772 92.2235 113.33 88.9998C114.888 85.7761 117.663 83.3034 121.044 82.1257C124.426 80.948 128.136 81.1617 131.36 82.7198L215.43 123.38C215.7 120.38 215.85 117.38 215.85 114.31V61.0298C215.848 60.5592 215.753 60.0936 215.57 59.6598C215.393 59.2232 215.128 58.8281 214.79 58.4998C214.457 58.1705 214.063 57.909 213.63 57.7298C213.194 57.5576 212.729 57.4727 212.26 57.4798C157.69 58.2298 126.5 38.6798 126.5 38.6798C126.5 38.6798 95.31 58.2298 40.71 57.4798C40.2401 57.4732 39.7735 57.5602 39.3376 57.7357C38.9017 57.9113 38.5051 58.1719 38.1709 58.5023C37.8367 58.8328 37.5717 59.2264 37.3913 59.6604C37.2108 60.0943 37.1186 60.5599 37.12 61.0298V108.03L118.84 147.57C121.591 148.902 123.808 151.128 125.129 153.884C126.45 156.64 126.797 159.762 126.113 162.741C125.429 165.72 123.755 168.378 121.363 170.282C118.972 172.185 116.006 173.221 112.95 173.22C110.919 173.221 108.915 172.76 107.09 171.87L40.24 139.48C46.6407 164.573 62.3785 186.277 84.24 200.16L124.49 225.7C125.061 226.053 125.719 226.24 126.39 226.24C127.061 226.24 127.719 226.053 128.29 225.7L168.57 200.16C187.187 188.399 201.464 170.892 209.24 150.29C208.715 150.11 208.2 149.9 207.7 149.66Z" fill="#fff"></path></svg> Tổng số tiền:<span className='total-sum__text'><sup>₫</sup>{totalPrice.toLocaleString()}</span> </div>
                </div>

            </div>
            <div className="total-status">
                <div className="total-status-text">
                    {props.text}
                </div>

                <div className="total-status-btn">

                    {props.btn}

                </div>
            </div>
        </div>
    )
}

export default UserOrderItem