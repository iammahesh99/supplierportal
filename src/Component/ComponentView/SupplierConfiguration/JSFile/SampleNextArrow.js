import React from 'react';

export default function SampleNextArrow(props) {
  const nextArrow = {
    borderRadius: '12px',
    width: '14%',
    border: '1px solid red',
    color: 'red',
    marginRight: '-5%',
  };
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        ...nextArrow,
        display: 'block',
        height: '100%',
      }}
      onClick={onClick}
    />
  );
}
