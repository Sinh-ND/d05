import "./product.css"
export default function Product ({id,name,pict,price}){
    return(
        <div className="hinh1">
            <img src={pict} alt={name} className="hinh" /><br/>
            Id:{id}<br/>
            Name:{name}<br/>
            Price:{price} $   
        </div> 
    );
}
