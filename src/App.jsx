import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import VersionSwitcher from './components/VersionSwitcher'
import Home from './pages/Home'
import HomeV1 from './pages/HomeV1'
import HomeV2 from './pages/HomeV2'
import HomeV3 from './pages/HomeV3'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/v1" element={<HomeV1 />} />
            <Route path="/v2" element={<HomeV2 />} />
            <Route path="/v3" element={<HomeV3 />} />
          </Routes>
        </main>
        <Footer />
        <VersionSwitcher />
      </div>
    </BrowserRouter>
  )
}
