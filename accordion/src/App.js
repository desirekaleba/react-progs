import React from 'react';
import questions from './data'
import Question from './components/Question'

function App() {
    return (
        <main>
            <div className='container'>
                <h3>Questions and answers about user login</h3>
                <section className='info'>
                    {questions.map(question => {
                        return (
                            <Question key={question.id} {...question} />
                        );
                    })}
                </section>
            </div>
        </main>
    );
};

export default App;