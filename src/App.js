import react, { useEffect } from "react";
import * as tf from '@tensorflow/tfjs';


const handleRunTraining = () => {
  console.log('Run training');

}

const displayTensor = () => {
  let example = tf.tensor2d([ [1,2,3], [3,5,6] ]);
  console.log(example);
}

function App() {



  return (
    <div className="App">
      <br />
     <div className='training_button'>
       <button onClick={handleRunTraining}>Run Training!</button>
       <button onClick={displayTensor}>Display Tensor!</button>
     </div>

    </div>
  );
}

export default App;
