import './App.css';
import CardContainer from './Components/Cards/CardContainer';
import soloFondo from './Assets/soloFondo.png';
import background from './Assets/background1.png';

function App() {

  const data = {
    key: '1A',
    content: {
        history: {
            title:'Despertás desorientado en una playa',
            text:'La brisa marina acaricia tu rostro mientras el sonido de las olas rompiendo en la orilla llena tus oídos. La playa se extiende a tu alrededor, con su arena dorada bajo tus pies. A medida que tus ojos se acostumbran a la luz del día, notás que estás rodeado de una densa jungla en la que los árboles altos y exuberantes parecen esconder secretos.\nLas hojas de la jungla crujen y los cantos de aves desconocidas llenan el aire. Ante ti, una oscura abertura se abre en la densa vegetación, revelando una cueva misteriosa. A lo lejos, entre los restos de un naufragio, vislumbrás destellos metálicos que llaman tu atención. Las opciones son claras'
        },
        image: soloFondo,
        answers: [
            {
                text: 'Explorar Jungla',
                next: '1A'
            },
            {
                text: 'Explorar Cueva',
                next: '1B'
            },
            {
                text: 'Revisar los restos del naufragio',
                next: '1A'
            }
        ]
    }
}

  return (
    <div className='App'>
      <CardContainer data={data}/>
    </div>
  );
}

export default App;
