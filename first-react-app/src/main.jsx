import { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
  <>
    <Header />
    <Body />
    <hr></hr>
    <Footer />
  </>
)
