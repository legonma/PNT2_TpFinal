import soloFondo from '../Assets/soloFondo.png';
import Espinas2 from '../Assets/Espinas1.png';
import CuevaE2 from '../Assets/CuevaE2.png';

const logicGame = {
    scenes: {
        'Login': {
            content: {
                login: {
                    title:'Sobreviviente',
                    error:'no hay nada'
                },
                left: false,
                right: false
            }
        },
        'E0': {
            content: {
                history: {
                    title:'La playa',
                    text:'La brisa marina acaricia tu rostro mientras el sonido de las olas rompiendo en la orilla llena tus oídos. La playa se extiende a tu alrededor, con su arena dorada bajo tus pies. A medida que tus ojos se acostumbran a la luz del día, notás que estás rodeado de una densa jungla en la que los árboles altos y exuberantes parecen esconder secretos.\nLas hojas de la jungla crujen y los cantos de aves desconocidas llenan el aire. Ante ti, una oscura abertura se abre en la densa vegetación, revelando una cueva misteriosa. A lo lejos, entre los restos de un naufragio, vislumbrás destellos metálicos que llaman tu atención. Las opciones son claras'
                },
                image: soloFondo,
                answers: [
                    {
                        text: 'Explorar Jungla',
                        next: 'E1'
                    },
                    {
                        text: 'Explorar Cueva',
                        next: 'E2'
                    },
                    {
                        text: 'Revisar los restos del naufragio',
                        next: 'E1'
                    }
                ]
            }
        },
        'E1': {
            content: {
                history: {
                    title:'La maleza',
                    text:'Al intentar adentrarte, la maleza con espinas te lastima. Sientes cómo los afilados arbustos se clavan en tu piel, causando un dolor punzante y dejando pequeñas heridas que comienzan a sangrar. A pesar de la incomodidad, tu curiosidad y determinación te impulsan a continuar. El sendero se estrecha a medida que avanzas, pero la sensación de descubrimiento te llena de emoción y expectativa.'
                },
                image: Espinas2,
                answers: [
                    {
                        text: 'Insistís en adentrarte entre la maleza',
                        next: 'E0'
                    },
                    {
                        text: 'volvés a la playa',
                        next: 'E0'
                    },
                    {
                        text: '(solo con machete) Lo utilizás para abrirte paso',
                        next: 'E0'
                    }
                ]
            }
        },
        'E2': {
            content: {
                history: {
                    title:'La cueva',
                    text:'Al intentar adentrarte, la maleza con espinas te lastima. Sientes cómo los afilados arbustos se clavan en tu piel, causando un dolor punzante y dejando pequeñas heridas que comienzan a sangrar. A pesar de la incomodidad, tu curiosidad y determinación te impulsan a continuar. El sendero se estrecha a medida que avanzas, pero la sensación de descubrimiento te llena de emoción y expectativa.'
                },
                image: CuevaE2,
                answers: [
                    {
                        text: 'Insistís en adentrarte entre la maleza',
                        next: 'E0'
                    },
                    {
                        text: 'volvés a la playa',
                        next: 'E0'
                    },
                    {
                        text: '(solo con machete) Lo utilizás para abrirte paso',
                        next: 'E0'
                    }
                ]
            }
        }
    }
  };
  
export default logicGame
