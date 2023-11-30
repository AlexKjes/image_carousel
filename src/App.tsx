import { useState } from 'react'
import './App.css'
import { FibonacciCarousel } from '@oakjeser/fibonacci-carousel'

function App() {

  const [files, setFiles] = useState<File[]>([])

  return (
      <>
          {files.length === 0 &&
          <input type="file" onChange={event => {setFiles(event.target.files ? [...event.target.files]: [])}} accept="image/*" multiple/>
          }
          {files.length > 0 && 
              <FibonacciCarousel imageSources={files.map(file => URL.createObjectURL(file))} cycleTimeMillies={3000}/>
             
          }
      </>
  ) 

}

export default App
