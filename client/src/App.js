import { useEffect, useState } from 'react';
import './App.css';
import Chart from './components/Chart';

function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch('/data')
      .then((res) => res.json())
      .then((ld) => {
        console.log(ld);
        setdata(ld);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='App'>
      <h1>Charts</h1>
      <Chart
        labels={data.length === 0 ? ['red'] : data[0].labels}
        dataOne={data.length === 0 ? [0, 0, 0] : data[0].data[0].values}
        dataTwo={data.length === 0 ? [0, 0, 0] : data[0].data[1].values}
      />
      <button onClick={() => window.location.reload()}>Refresh Charts</button>
    </div>
  );
}

export default App;
