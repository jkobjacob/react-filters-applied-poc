import React, { useState } from 'react';
import AppliedFilter from './AppliedFilter';
import Dropdown from './Dropdown';
import './style.css';

export default function App() {
  const primitiveOperators = {
    '==': 'Equals to',
    '>=': 'Greater than equal to',
    '<=': 'Less than equal to'
  };

  const nonPrimitiveOperators = {
    '[]': 'Array contains'
  };

  const [dropdown, setDropdown] = useState(false);
  const [filters, setFilters] = useState([
    {
      property: 'age',
      operator: '==',
      selectValue: '30',
      id: 1
    },
    {
      property: 'age',
      operator: '==',
      selectValue: '30',
      id: 2
    },
    {
      property: 'age',
      operator: '==',
      selectValue: '30',
      id: 3
    },
    {
      property: 'tags',
      operator: '[]',
      selectValue: 'id',
      id: 4
    },
    {
      property: 'age',
      operator: '==',
      selectValue: '30',
      id: 5
    },
    {
      property: 'age',
      operator: '==',
      selectValue: '30',
      id: 6
    },
    {
      property: 'age',
      operator: '==',
      selectValue: '30',
      id: 7
    },
    {
      property: 'tags',
      operator: '[]',
      selectValue: 'id',
      id: 8
    },
    {
      property: 'age',
      operator: '==',
      selectValue: '30',
      id: 9
    },
    {
      property: 'age',
      operator: '==',
      selectValue: '30',
      id: 10
    },
    {
      property: 'age',
      operator: '==',
      selectValue: '30',
      id: 11
    },
    {
      property: 'tags',
      operator: '[]',
      selectValue: 'id',
      id: 12
    },
    {
      property: 'age',
      operator: '==',
      selectValue: '30',
      id: 13
    },
    {
      property: 'age',
      operator: '==',
      selectValue: '30',
      id: 14
    },
    {
      property: 'age',
      operator: '==',
      selectValue: '30',
      id: 15
    },
    {
      property: 'tags',
      operator: '[]',
      selectValue: 'id',
      id: 16
    }
  ]);
  const [filterId, setFilterId] = useState(null);

  const removeFilter = id => {
    setFilters(filters.filter(val => val.id !== id));
  };

  const updateFilter = (id, operator, selectValue) => {
    setFilters(
      filters.map(filter => {
        return filter.id === id ? { ...filter, operator, selectValue } : filter;
      })
    );
  };

  const closeDropdown = () => setDropdown(false);

  return (
    <div className="flex flex-start flex-wrap width-80">
      {filters.map(val => (
        <div className="m-5 relative">
          <AppliedFilter
            key={val.id}
            {...val}
            delete={() => removeFilter(val.id)}
            edit={() => {
              setFilterId(val.id);
              setDropdown(true);
            }}
          />
          {dropdown && val.id === filterId ? (
            <Dropdown
              {...val}
              primitiveOperators={primitiveOperators}
              nonPrimitiveOperators={nonPrimitiveOperators}
              update={(id, operator, selectValue) =>
                updateFilter(id, operator, selectValue)
              }
              close={() => closeDropdown()}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}
