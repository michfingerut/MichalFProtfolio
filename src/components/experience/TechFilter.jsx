// External modules
import { useState, useEffect, useMemo } from 'react';

// Internal modules
import { useDebounce } from '../utils/CustomHooks';
import { infinityExp } from './experienceInfo';
import {
  ResultItem,
  ResultsContainer,
  SearchInput,
  FilterHeader,
  FilterLabel,
} from '../../styles/techStackStyles';
import { ExpCardContainer } from '../../styles/expStyles';

function TechFilterResult({ techItems, filterBy }) {
  const [filteredItems, setFilteredItems] = useState([]);
  const [isNoMatch, setIsNoMatch] = useState(false);

  useEffect(() => {
    if (filterBy === '') {
      setFilteredItems([]);
      setIsNoMatch(false);
      return;
    }

    const newFiltered = techItems.filter((item) =>
      item.toLowerCase().includes(filterBy.toLowerCase()),
    );

    setFilteredItems(newFiltered);
    setIsNoMatch(newFiltered.length === 0);
  }, [filterBy, techItems]);

  return (
    <ResultsContainer>
      {filteredItems.map((item, index) => (
        <ResultItem key={index + item}>{item}</ResultItem>
      ))}

      {isNoMatch && <p>No matching skill found...</p>}
    </ResultsContainer>
  );
}

function TechFilter() {
  const [inputVal, setInputVal] = useState('');
  const debVal = useDebounce(inputVal, 500);

  const techItems = useMemo(() => {
    const set = new Set();

    infinityExp.forEach((exp) => {
      exp.techStack.forEach((item) => {
        set.add(item);
      });
    });
    return Array.from(set);
  }, []);

  function handleChange(event) {
    const { value } = event.target;
    setInputVal(value);
  }

  return (
    <ExpCardContainer>
      <FilterHeader>Looking for a specific skill?</FilterHeader>
      <div>
        <FilterLabel htmlFor="skillSearch">Search:</FilterLabel>
        <SearchInput
          type="text"
          id="skillSearch"
          value={inputVal}
          onChange={handleChange}
          placeholder="e.g. React, JavaScript, Node.js"
        />
      </div>
      <TechFilterResult techItems={techItems} filterBy={debVal} />
    </ExpCardContainer>
  );
}

export default TechFilter;
