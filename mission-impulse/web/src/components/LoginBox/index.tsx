import { VscGithubInverted } from 'react-icons/vsc';
import styles from './style.module.scss';

export function LoginBox(params: type) {
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href='#' className={styles.signInWithGithub}>
        <VscGithubInverted size='24px' />
        Entrar com Github
      </a>
    </div>
  );
}
