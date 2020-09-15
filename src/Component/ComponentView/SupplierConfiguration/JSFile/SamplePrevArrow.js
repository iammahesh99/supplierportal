import React from 'react';

export default function SamplePrevArrow(props) {
  const prevArrow = {
    borderRadius: '12px',
    width: '14%',
    border: '1px solid red',
    color: 'red',
    marginLeft: '-5%',
  };

  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        ...prevArrow,
        display: 'block',
        height: '100%',
      }}
      onClick={onClick}
    />
  );
}
