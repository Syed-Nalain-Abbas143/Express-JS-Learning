import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [Facts, setFacts] = useState([]);

  useEffect(() => {
    axios.get('/api/facts')
    .then(res=>{
      setFacts(res.data)
    }).catch(err=>{
      console.log(err);
    })
  });

  return (
    <div>
      <h1>Cats Facts</h1>
      <div>
        {
          Facts.map((fact,idx)=>(
            <div key={fact.id}>
              <h3>{fact.title}</h3>
              <p>{fact.facts}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
