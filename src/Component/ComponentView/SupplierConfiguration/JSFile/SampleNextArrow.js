import React from 'react';

export default function SampleNextArrow(props) {
  const nextArrow = {
    borderRadius: '12px',
    width: '14%',
    border: '1px solid red',
    color: 'red',
    marginRight: '-5%',
    display: 'block',
    height: '102%',
  };
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        ...nextArrow,
      }}
      onClick={onClick}
    />
  );
}
