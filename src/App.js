import { useState } from 'react';
import './App.css';
import data from './data';
import SingleContent from './components/SingleContent';

function App() {
  const[content,setContent] = useState(data)
  return (
   <main>
    <div class="container">
     <h3>พัฒนาเว็บปี2021</h3>
        <section>
          {content.map((data)=>{
            return<SingleContent key={data.id}{...data}/>
          })}
        </section>
    </div>
   </main>
  );
}

export default App;
