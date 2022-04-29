import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function NewRoom() {
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
          <h2>Crie uma nova sala</h2>
          <form action=''>
            <input type='text' placeholder='Digite o código da sala' />
            <Button type='submit'>Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <a href='#'>Clique aqui</a>
          </p>
        </div>
      </main>
    </div>
  );
}
