import React from 'react';
import './Styles/App.css';
import NewsPaper from './newsPaper';

const info1 =['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ad in quas alias non! Expedita similique et dolore illum doloremque vel accusantium ut eos tempora sequi, doloribus vitae mollitia praesentium ex ullam? Dolorem labore fugiat neque nostrum porro vero fugit.',
<br/> ,'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam corrupti, eius odio neque incidunt esse fuga veritatis ipsum, eligendi mollitia, porro quasi provident nisi sit! Doloribus, eligendi nemo, ad laudantium cupiditate aspernatur eveniet asperiores modi praesentium voluptas eos sunt odio.'];

const imageLink = 'http://placecorgi.com/500/250';

const text = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dolores? Illo dolores, rerum iste aut porro doloribus fugit itaque voluptas.',
<br/>,'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium incidunt ullam ea magni ipsam perferendis ratione pariatur enim repellendus quia?'];

function App() {
  return (
    <div>
      <NewsPaper info={info1} puppy={imageLink} info1={text}/>
    </div>
  );
}

export default App;
