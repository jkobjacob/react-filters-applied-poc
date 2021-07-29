import React, { useState, useMemo } from 'react';
import './Dropdown.css';

export default function Dropdown(props) {
  const {
    id,
    property,
    operator,
    selectValue,
    primitiveOperators,
    nonPrimitiveOperators,
    update,
    close
  } = props;

  const reverseOperators = obj => {
    return Object.keys(obj).reduce((reversedObj, prop) => {
      return Object.assign(reversedObj, { [obj[prop]]: prop });
    }, {});
  };

  const [selectProperty, setSelectProperty] = useState(property);
  const [selectOperator, setSelectOperator] = useState(operator);
  const [selectedValue, setSelectedValue] = useState(selectValue);

  const isOperatorPrimitive = op => {
    return primitiveOperators[op] !== undefined;
  };

  return (
    <div className="dropdown__child-select flex flex-column p-5">
      <div className="flex flex-column m-10">
        {isOperatorPrimitive(operator)
          ? Object.keys(primitiveOperators).map((op, idx) => {
              return (
                <>
                  <label className="bg-hover m-b-10 p-10" key={idx}>
                    <input
                      type="radio"
                      checked={selectOperator === op}
                      value={op}
                      onChange={() => {
                        setSelectOperator(op);
                      }}
                    />
                    <span>{primitiveOperators[op]}</span>
                  </label>
                  {op === selectOperator ? (
                    <input
                      type="text"
                      className="width-90 margin-5-0"
                      value={selectedValue}
                      autoFocus
                      onChange={e => setSelectedValue(e.target.value)}
                    />
                  ) : null}
                </>
              );
            })
          : Object.keys(nonPrimitiveOperators).map((op, idx) => {
              return (
                <>
                  <label className="bg-hover m-b-10 p-10" key={idx}>
                    <input
                      type="radio"
                      checked={selectOperator === op}
                      value={op}
                      onChange={() => {
                        setSelectOperator(op);
                      }}
                    />
                    <span>{nonPrimitiveOperators[op]}</span>
                  </label>
                  {op === selectOperator ? (
                    <input
                      type="text"
                      className="width-90 margin-5-0"
                      value={selectedValue}
                      autoFocus
                      onChange={e => setSelectedValue(e.target.value)}
                    />
                  ) : null}
                </>
              );
            })}
      </div>
      <div className="flex flex-space_around m-b-10">
        <button onClick={() => close()}>cancel</button>
        <button
          onClick={() => {
            update(id, selectOperator, selectedValue);
            close();
          }}
        >
          Apply filter
        </button>
      </div>
    </div>
  );
}
