import logo from './logo.svg';

import contact from './contact/contact';
import Carts from './cart/carts';
function App() {

  return (
    
    contact.map((valor,index)=>{
       return <Carts key={index} nom={valor.name} img={valor.imgURL}/>
    })
  );
}

export default App;
