import React from 'react';

const MainFromWrapper = (props) => {
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-t-50 p-b-90">
          <div className="login100-form validate-form flex-sb flex-w">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainFromWrapper;