import { createContext, useState } from 'react';
import { auth, firebase } from './services/firebase';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

type User = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextTypes = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextTypes);

function App() {
  const [user, setUser] = useState<User>();

  async function signInWithGoogle() {
    const provaider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provaider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms/new' element={<NewRoom />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
