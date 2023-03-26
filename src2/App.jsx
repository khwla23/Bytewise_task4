import { useState } from 'react';
import { sculptureList } from './data';

export default function Gallery() {
  const [index, setIndex] = useState(0); 
//you are telling React that you want this component to remember something
//Every time your component renders, useState gives you an array containing two values.
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    if (index < sculptureList.length-1){
      setIndex(index + 1);
    }
  }

  function handlePrevClick() {
    if (index > 0){
      setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlePrevClick}
      disabled={!(index > 0)}>
        Previous
      </button>
      <button onClick={handleNextClick}
      disabled={!(index < sculptureList.length-1)}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      /><br/><br/>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
    </>
  );
}

//if you render the same component twice, each copy will have completely isolated state! 
//Changing one of them will not affect the other.

//the main differences between props and state:

// 1) Components receive data from outside with props, whereas they can create and manage their own data with state
// 2) Props are used to pass data, whereas state is for managing data
// 3) Data from props is read-only, and cannot be modified by a component that is receiving it from outside
// 4) State data can be modified by its own component, but is private (cannot be accessed from outside)
// 5) Props can only be passed from parent component to child (unidirectional flow)
// 6) Modifying state should happen with the setState ( ) method