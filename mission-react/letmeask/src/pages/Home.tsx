import { useNavigate } from 'react-router-dom';

import { auth, firebase } from '../services/firebase';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function Home() {
  const history = useNavigate();

  function handleCreateRoom() {
    const provaider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provaider)
      .then(result => {
        console.log(result);
        
        history('/rooms/new');
      })
  }

  return (
    <div id='page-auth'>
      <aside>
        <img
          src={illustrationImg}
          alt='Ilustração simbolizando perguntas e respostas'
        />
        <strong>Crie salas de perguntas e respostas ao-vivo</strong>
        <p>Tire as dúvidas dos participantes em tempo-real</p>
      </aside>

      <main>
        <div className='main-content'>
          <img src={logoImg} alt='Letmesask' />

          <button onClick={handleCreateRoom} className='create-room'>
            <img src={googleIconImg} alt='Logo do Google' />
            Crie sua sala com o Google
          </button>
          <div className='separator'>Ou entre em uma sala</div>
          <form action=''>
            <input type='text' placeholder='Digite o código da sala' />
            <Button type='submit'>Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
