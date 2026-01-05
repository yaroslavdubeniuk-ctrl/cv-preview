import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Document, Page, pdfjs } from 'react-pdf'
import './App.css'

function App() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const updateScale = () => {
      const viewportHeight = window.innerHeight
      const A4_HEIGHT_PX = 960 // A4 at 96 DPI
      setScale(viewportHeight / A4_HEIGHT_PX)
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  return (
    <div className="pdf-container">
      <Document file="/cv.pdf">
        <Page
          pageNumber={1}
          scale={scale}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          devicePixelRatio={Math.max(window.devicePixelRatio, 3)}
        />
      </Document>
    </div>
  )
}

export default App
