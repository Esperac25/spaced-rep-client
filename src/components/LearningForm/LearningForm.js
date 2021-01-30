import React, { useState, useContext, useEffect, useRef } from 'react';
import { Input } from '../Form/Form';
import Button from '../Button/Button';
import learningApiService from '../../services/learning-api-service';
import LanguageContext from '../../contexts/LanguageContext';
import Correct from '../Results/Correct';
import Incorrect from '../Results/Incorrect';
import './LearningForm.css';


export default function LearningForm() {
  const languageContext = useContext(LanguageContext);
  const [head, setHead] = useState(null);
  const [correct, setCorrect] = useState(null);
  const [view, setView] = useState('question');
  const [input, setInput] = useState(null);
  const [result, setResult] = useState({});
  const questionInput = useRef(null);

  useEffect(() => {
    learningApiService.getLanguageHead().then(word => {
      setHead(word);
      languageContext.processNextWord(word);
    });
  }, []);

  function guessWord(e) {
    e.preventDefault();

    learningApiService.makeGuess(questionInput.current.value).then(response => {
      const newHead = {
        nextWord: response.nextWord,
        totalScore: response.totalScore,
        wordCorrectCount: response.wordCorrectCount,
        wordIncorrectCount: response.wordIncorrectCount
      };
      setResult({ question: head.nextWord, answer: response.answer });
      setInput(questionInput.current.value);
      setCorrect(response.isCorrect);
      setHead(newHead);
      setView('answer');
    });
 
  }

  const showResults = () => {
    return (
      <React.Fragment>
        <div className='center'>
          <p>Your total score is: {head.totalScore}</p>
        </div>
        <section>
        <h2 className='center'>
          {!correct
            ? <Incorrect />
            : <Correct />}
        </h2>
        <div className='box'>
          <p>
            The correct translation for {result.question} was {result.answer}{' '}
            and you chose {input}!
          </p> 
          </div>
        <Button onClick={showQuestion} type="submit">
          <p className='button-2'>Next</p>
        </Button>
        </section>
      </React.Fragment>
    );
  };

  const showQuestion = () => {
    setView('question');
  };

  return (
    <React.Fragment>
      {head !== null && view === 'question' && (
        <React.Fragment>
          <header>
            <h2>Translate the word:</h2>

            <p>{`Your total score is: ${head.totalScore}`}</p>
          </header>
          <form className='box' onSubmit={e => guessWord(e)}>
          <span className='word'>{head.nextWord}</span>
          <br></br>
            <div>
              <label htmlFor="learn-guess-input">
                What's the translation for this word?
              </label>
              <br></br>
              <Input
                ref={questionInput}
                id="learn-guess-input"
                name="question"
                required
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </React.Fragment>
      )}
      {view === 'answer' && head !== null && showResults()}
      {head === null && 'Loading'}
    </React.Fragment>
  );
}