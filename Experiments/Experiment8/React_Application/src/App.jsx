import { useState } from 'react';

function App(){
  const [score, setScore] = useState(0);
  
  return(
    <div className="container">
      <h1 className="h1">React Application</h1>
      <h1 className="h1">Counter: {score}</h1>
      <button className="button" onClick={() => setScore(score + 1)}>Increase Score</button>
      <button className="button" onClick={() => setScore(score - 1)}>Decrease Score</button>
      <button className="button" onClick={() => setScore(0)}>Reset Score</button>
    </div>
  );
}
export default App;