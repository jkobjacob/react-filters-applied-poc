import React from 'react';
import './AppliedFilter.css';

export default function AppliedFilter(props) {
  return (
    <p data-filter-id={props.id} className="filter__element width-fit">
      <span
        className="filter__element_child-editable"
        onClick={() => props.edit()}
      >
        <span className="filter__element_child bold">{props.property}</span>
        <span className="filter__element_child light">{props.operator}</span>
        <span className="filter__element_child bold">{props.selectValue}</span>
      </span>
      <span
        className="filter__element_child-btn"
        onClick={e => {
          props.delete();
        }}
      >
        x
      </span>
    </p>
  );
}
