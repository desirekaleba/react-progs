import React from 'react';

const List = ({ data }) => {
    return (
        <>
        {data.map((item) => {
            const { id, name, age, image } = item;
            return (
                <article key={id} className='person'>
                    <img src={image} alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <p>{age > 1 ? age + 'years' : age + 'year'}</p>
                    </div>
                </article>
            );
        })
        }
        </>
    );
};

export default List;