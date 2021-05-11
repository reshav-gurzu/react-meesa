// import React from 'react';
// import classNames from 'classnames';
// import styled from 'styled-components';
// import card1 from '../images/card1.png';
import { NavLink } from 'react-router-dom';
import web from '../images/Meesa.png';

// // export const ItemsWrapper = styled.div`
// // border:1px solid red;
// // &:before{
// //   content: "";
// //     background: #FDF5F9;
// //     top: 55px;
// //     left: -10px;
// //     right: -10px;
// //     bottom: 0;
// //     position: absolute;
// //     z-index: -1;
// //     border-radius: 24px;
// // }
// // `;


// export default Card;
import React from 'react';
import styled from 'styled-components';

export const ItemsWrapper = styled.div`
position: relative;
z-index: 2;
&::before{
  content: "";
    background: #FDF5F9;
    top: 55px;
    left: -10px;
    right: -10px;
    bottom: 0;
    position: absolute;
    z-index: -1;
    border-radius: 24px;
}
`;
export const CardTitle = styled.h6`
font-weight: 400;
font-size: 16px;
color: #5A5A5A;
`;
export const CardPrice = styled.h5`
font-weight: 700;
    font-size: 18px;
    color: #5A5A5A;
`;
export const ImageItems = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid #FFDCE1;
    background: white;
    border-radius: 12px;
    text-align: center;
    margin: auto;
    height: 250px;
    max-width: 250px;
    align-items: center;
    overflow:hidden;
`;
 const ItemDetails = styled.div`
display: flex;
    justify-content: space-between;
    padding: 16px;
`;
const DetailsLeft = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`;
const Card = (props) => {
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 col-6 pb-3">
        <ItemsWrapper>
          <ImageItems >
            <img src={props.imgsrc} className="img-fluid" alt={props.imgsrc} />
          </ImageItems >
          <ItemDetails>
            <DetailsLeft>

              <CardTitle>
                {props.title}
              </CardTitle>

              <div className="items-price">
                <CardPrice>
                  {props.price}
                </CardPrice>
              </div>

              <div className="select-size">
                <span>Total items</span>

              </div>

            </DetailsLeft>
            <div className="details-right">
              <a href="#" className="cart-icon">
                <i className="fa fa-cart-plus" aria-hidden="true"></i>
              </a>
            </div>
          </ItemDetails>
        </ItemsWrapper>
      </div>
    </>
  );
};

export default Card;


