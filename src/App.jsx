/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css';

const flashCardList = [
  {
    id: 1,
    question: 'What is Language is React based on ?',
    answers: 'Javascript'
  },
  {
    id: 2,
    question: 'What are the building blocks of React Apps ?',
    answers: 'Components'
  },
  {
    id: 3,
    question: 'What is the name of the syntax we use to describe a UI in React ?',
    answers: 'JSX'
  },
  {
    id: 4,
    question: 'How to pass the data from parent to child components ?',
    answers: 'Props'
  },
  {
    id: 5,
    question: 'How to give components memory?',
    answers: 'State Hooks'
  },
  {
    id: 6,
    question: 'What do we call an input elements that is completely synchronised with state?',
    answers: 'controlled component'
  },
  {
    id: 7,
    question: 'Do you Like this',
    answers: 'wooh thank you , i think you enjoying very much '
  }
];

/**
 * @App Components
 */
function App() {
  return (
    <div>
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selctedId, setSelectId] = useState(null);

  const toggleAnswer = id => {
    setSelectId(id !== selctedId ? id : null);
  };

  return (
    <div className='cards'>
      <h1>Flash Card Questions</h1>
      <div className='flashCards'>
        {flashCardList.map(q => (
          <div key={q.id} className={q.id === selctedId ? 'active' : 'box'} onClick={() => toggleAnswer(q.id)}>
            <p>{q.id === selctedId ? q.answers : q.question}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;

