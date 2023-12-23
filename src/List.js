import React from 'react';

const List = ({people}) => {
  return (
    <>
    <section>
      {
        people.map((person) => {
          const {id, name, age, image} = person;
          return (
            <article className='person' id={id}>
              <img className='img' src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age}</p>
              </div>
            </article>
          )
        })
      }
    </section>

    </>
  );
};

export default List;
