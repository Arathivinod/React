// App.js

import React from 'react';
import { RecoilRoot } from 'recoil';
import ProfilePage from './ProfilePage';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  return (
    <RecoilRoot>
      <div className="d-flex flex-column min-vh-100">
        <header className="bg-dark text-white p-4 mb-4">
          <h1>Your Game App</h1>
        </header>

        <main className="flex-grow-1">
          <ProfilePage />
        </main>

        <footer className="bg-dark text-white p-4">
          <p className="text-center">&copy; 2023 Your Game App</p>
        </footer>
      </div>
    </RecoilRoot>
  );
}

export default App;
