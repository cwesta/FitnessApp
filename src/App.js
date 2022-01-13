import react, { useEffect } from "react";


const handleRunTraining = () => {
  console.log('Run training');
}

function App() {

  // useEffect(() => {

  // }, [])

  return (
    <div className="App">
      <br />
     <div className='training_button'>
       <button onClick={handleRunTraining}>Run Training!</button>
     </div>

    </div>
  );
}

export default App;
