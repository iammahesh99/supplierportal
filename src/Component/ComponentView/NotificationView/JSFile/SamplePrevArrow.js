import React from 'react';

export default function SamplePrevArrow(props) {
  const prevArrow = {
    borderRadius: '12px',
    width: '12%',
    border: '1px solid red',
    color: 'red',
    marginLeft: '-5%',
    display: 'block',
    height: '102%',
  };

  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        ...prevArrow,
      }}
      onClick={onClick}
    />
  );
}
