import React from 'react';

const Split = ({title,container, first, second}) => {
  return (
    <div className={container}>
      <div className={first}>
        <h2>
          {title}
        </h2>
      </div>
      <div className={second}>
        <h2>
          {title}
        </h2>
      </div>
    </div>
  )
}

export default Split;
