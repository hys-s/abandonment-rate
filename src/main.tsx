import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { First } from './pages/First.tsx'
import { Second } from './pages/Second.tsx'
import { Third } from './pages/Third.tsx'

const basename = import.meta.env.MODE === 'production' ? '/abandonment-rate/' : '/';
console.log(basename)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/first' element={<First />}/>
        <Route path='/second' element={<Second />}/>
        <Route path='/third' element={<Third />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
