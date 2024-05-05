import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Product from './Product'
import About from './About'
import NotFound from './NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/product/:productId" element={<Product />}></Route>
					<Route path="/about" element={<About />}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
    </>
  )
}

export default App
