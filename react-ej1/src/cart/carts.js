import './css/carts.css';
import Name from'./nom';
import Image from './img';
const carts = ({nom,img})=>{
    return  <>
                <div id="card">
                    <div id="nom">
                        <Name nom={nom}/>
                    </div>
                    <div id="image">
                        <Image img={img}/>
                    </div>
                     
                </div>
            </>
}
export default carts