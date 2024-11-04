
import './App.css'
import latviagf from './assets/latviagf.pdf';
import latviasc from './assets/latviasc.pdf';

function App() {
  const openSCAnalysis = () => {
    window.open(latviasc, '_blank');
  }

  const openGlobalForces = () => {
    window.open(latviagf, '_blank');
  }

  return (
    <>
     <div className='wrapper'>
        <div className='buttons'>
          <button onClick={openSCAnalysis} className='button'>Socio-cultural Analysis</button>
          <button onClick={openGlobalForces} className='button'>Global Forces Analysis</button>
        </div>
     </div>
    </>
  )
}

export default App
