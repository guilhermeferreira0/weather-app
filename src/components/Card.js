import React from 'react';
import propTypes from 'prop-types';

function Card({ data }) {
  const { location, current } = data;

  return (
    <div className="bg-white p-6 mt-10 rounded-lg shadow-xl min-w-[250px] flex justify-center flex-col items-center">
      <section className="text-center">
        <h3
          className="block text-xl font-bold text-slate-700"
        >
          {location.name}
        </h3>
        <h3 className="text-slate-400 text-sm font-medium">
          {`${location.region}, ${location.country}`}
        </h3>
      </section>

      <section className="font-bold text-slate-700 flex text-center mt-4 mb-2">
        <h3 className="text-7xl">
          {current.temp_c}
        </h3>
        <h3 className="text-xl mt-[0.4em]">
          °C
        </h3>
      </section>

      <section className="">
        <img src={current.condition.icon} alt="Weather icon" />
        <h3 className="font-medium text-slate-700">{current.condition.text}</h3>
      </section>
    </div>
  );
}

export default Card;

Card.propTypes = {
  data: propTypes.object,
}.isRequired;
