import { FormEvent, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

export function Home() {
  const history = useNavigate();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Sala não existe.');
      return;
    }

    history(`/rooms/${roomCode}`);
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
          <form action='' onSubmit={handleJoinRoom}>
            <input
              type='text'
              placeholder='Digite o código da sala'
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />

            <Button type='submit'>Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
