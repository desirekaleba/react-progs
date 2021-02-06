import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);

    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setCount(amount);
    setText(data.slice(0, amount));
  };

  return (
    <section className='section-center'>
      <h3>Tired of typing lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Number of paragraphs:</label>
        <input
          type='number'
          min='1'
          max='8'
          name='amount'
          id='amount'
          value={count}
          onChange={e => setCount(e.target.value)} />
          <button className='btn' type='submit'>Generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => <p key={index}>{item}</p>)}
      </article>
    </section>
  );
}

export default App;
