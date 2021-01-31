import React, { useState } from 'react';
import dataPlaceholder from './data';
import List from './components/List';

function App() {

  const [data, setData] = useState(dataPlaceholder);
  return (
    <main>
      <section className='container'>
        <h3>{data.length > 1 ? data.length + ' birthdays'
        : data.length + ' birthday'} today</h3>
        <List data={data} />
        <button onClick={() => setData([])}>Clear</button>
      </section>
    </main>
  );
}

export default App;