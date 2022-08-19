import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];




const SEL: React.FC = ({ }) => {

    const options = [
        { value: '2022', label: '2022' },
        { value: '2021', label: '2021' },
        { value: '2020', label: '2020' },
    ];

    const handleChange = (event: any) => {
        console.log(event.value)
    
    }
    
    

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App">
       <Select   classNamePrefix="Select"
        options = {options}
        onChange = {handleChange}
      />
    </div>
  );
}

export default SEL


const StyledSelect = styled(Select)`
  .Select__control {
    height: 40px;
    width: 100%;
    border: 1px solid #a1a1a1;
    border-radius: 0;
    cursor: pointer;
  }

  .Select__control:hover {
    border-color: #a1a1a1;
  }

  .Select__control--is-focused {
    box-shadow: 0 0 0 1px black;
    outline: none;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    color: #3c3d3e;
  }
`;
