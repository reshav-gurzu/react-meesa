import React from 'react';
import Card from './Card';
import Sdata from '../Sdata';
const Service = () => {
  return (
    <>
      <div className="container-fluid mb-5 mt-8">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return <Card key={ind}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  price={val.price}
                />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;