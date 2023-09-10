import React, { useState } from 'react';
import Card from './components/Card';
import fetchData from './services/api';
import initialData from './helpers/initialData';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchData(city).then((res) => {
      setData(res);
    });

    setCity('');
  };

  return (
    <div className="flex flex-col w-full h-screen items-center sm:justify-center p-4">
      <form onSubmit={handleSubmit} className="fixed bottom-0 w-full flex p-4 sm:relative justify-center">
        <input
          value={city}
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-md outline-none w-full flex-1 sm:max-w-[350px]"
          onChange={({ target: { value } }) => {
            setCity(value);
          }}
        />
        <button
          type="submit"
          className="ml-3 p-3 rounded-lg bg-blue-600 text-white font-bold"
        >
          Pesquisar
        </button>
      </form>

      <Card data={data} />
    </div>
  );
}

export default App;
