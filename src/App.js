import './App.css';
import { app } from './firebase.config';
import { getAuth } from 'firebase/auth'

function App() {
  const auth = getAuth(app);

  return (
    <>
      <h1 className='text-3xl'>hello</h1>
    </>
  );
}

export default App;
