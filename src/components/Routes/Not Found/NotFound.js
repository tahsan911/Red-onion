import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
      <div className="d-flex justify-content-center align-items-center height-notFound">
        <h1 className="display-1 fw-medium text-secondary overflow-hidden">
          Your Page Was Not Found :(
        </h1>
      </div>
    );
};

export default NotFound;