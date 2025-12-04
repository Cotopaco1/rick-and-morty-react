import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Characters from './Characters/Characters.tsx';
import CharacterShow from './Characters/CharactersShow.tsx';
import MainLayout from './layouts/MainLayout.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Characters */}
        <Route element={<MainLayout/>}>
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterShow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
