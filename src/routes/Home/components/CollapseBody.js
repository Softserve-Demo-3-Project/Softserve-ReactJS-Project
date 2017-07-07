import React from 'react';

const CollapseBody = ({ ad }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">Contacts:</div>
        <div className="col-md-3"><span className="text-left">GSM: {ad.contacts} </span></div>
      </div>

      <hr />

      <div className="row">
        <div className="col-md-3">Description:</div>
        <div className="col-md-3"><span className="text-left">{ad.description}</span></div>
      </div>

      <hr />

      <div className="row">
        <div className="col-md-3">Address:</div>
        <div className="col-md-3"><span className="text-left">{ad.address}</span></div>
      </div>

      <hr/>

      <div className="row">
        <div className="col-md-3">Type:</div>
        <div className="col-md-3"><span className="text-left">{ad.type}</span></div>
      </div>

      <hr />

      <div className="row">
        <div className="col-md-3">Price:</div>
        <div className="col-md-3"><span className="text-left">{ad.price} lv.</span></div>
      </div>

    </div>
  );
}

export default CollapseBody;
