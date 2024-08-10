import Header from "./Header";
import './Categories.css';
import { useState,useEffect, useReducer ,useContext} from "react";
import handle_filter from "./handle_filter";
import data from "./Category_Data";
import { cart_data } from "./context_api/cart_data_handle";
import alert from './alert.jpeg';
import logo from'./logo.png';

function Products({unique,loc})
{
  const [items,set_items]=useState(data[loc].products_details);
  const [filter_items,set_filter_items]=useState(data[loc]);
  const [filters,set_filter]=useReducer(handle_filter,[]);
  const [oninteraction,setinteraction]=useState({val:'',st:false});
  const {set_count,count,set_data,cart_datas,like_data,set_like}=useContext(cart_data);
  const [response,set_reponse]=useState({val:"",state:false,filter_empty:false});
  const [clicked,set_clicked]=useState(false);
  const [temp,set_temp]=useState([]);
  const seen = new Set();

  const ss=new Set();
  window.addEventListener("resize",()=>{
    if(window.innerWidth>820)
    {
      set_clicked(false)

    }
  })
  useEffect(() => {
    const filteredItems = filter_items.products_details.filter(item => filters.some(filter => item.name === filter|| item.color===filter));
    if(filteredItems.length<1){
      if(filters.length>0){
        set_items(filteredItems)
        set_reponse({...response,filter_empty:true})
      }
      else{
        set_items(filter_items.products_details)
        set_reponse({...response,filter_empty:false})
      }
    }
   
    else{
    set_items(filteredItems)
    set_reponse({...response,filter_empty:false})
    }

  },[filters]);
  useEffect(()=>{
   
    const uniqueProducts = cart_datas.filter(product => {
        const identifier = `${product.name}-${product.type}-${product.color}`;
        if (!seen.has(identifier)) {
            seen.add(identifier);
            return true;
        }
        return false;
    });
    
    set_data(uniqueProducts);
    
    
    },[response])
    useEffect(()=>{
      set_count(cart_datas.length)
    },[cart_datas])
    


 
  useEffect(()=>{
    clicked?document.querySelector(".filter").classList.add("show"):document.querySelector(".filter").classList.remove("show");
    clicked?document.querySelector(".items").classList.add("blr"):document.querySelector(".items").classList.remove("blr");
  },[clicked])

    return(
        <>
          <Header />
        <div className='Name'>
          {filter_items.title}
      </div>
      <div className="filter-click">
        <button onClick={()=>{
          set_clicked(!clicked)
        }}>{clicked?"X":"Apply Filters"}</button>
      </div>
      <div className="container">
        
        <div className="filter">
          <span className="filter-heading">Filters</span>
        <div className="filters">
          {filters.map((item) => (
            item&&(
            <span key={item}>
            <span className="filter-name">{item}</span>
            <button value={item} className="close" onClick={(e)=>{
              set_filter({type:"close",val:e.target.value})
            }}>X</button>
            </span>)
            
          ))}
        </div>
        <div className="forms">
          <div>Brands</div>
            <form>
              {filter_items.brands.map((i)=>{
                return(<>
                <span>
                 <input type="checkbox" className={`${i.split(" ")[0]}`}value={i} onChange={(e)=>{
                set_filter({
                  type: e.target.checked ? 'insert' : 'remove',
                  val: e.target.value,
                });
                
                  
                }}/>
                  <label>{i}</label>
                  </span>
                 
                  </>
                )
              })}
            </form>
        </div>
        <div className="forms">
          <div>Colors</div>
          <form>
              {filter_items.colors.map((i)=>{
                return(<>
                <span>
                 <input type="checkbox" value={i} className={`${i.split(" ")[0]}`} onChange={(e)=>{
                  {
                    set_filter({
                      type: e.target.checked ? 'insert' : 'remove',
                      val: e.target.value,
                    });
                  }
                 }}/>
                 <span className="colors" style={{backgroundColor:i}}></span>
                  <label>{i}</label>
                  </span>
                 
                  </>
                )
              })}
            </form>
          </div>
          
        </div>
        <div className='products items'>
       {
       items.map((i)=>{
            return <div key={i.title}>
            <img src={i.img_url} alt={i.img_alt}/>
            <span className="names name" title={i.name}>{i.name}</span>
            <span className="names">{i.type}</span>
           
              <span className="prices price">Price</span>
              <span className="prices final-price">₹ {i.price}</span>
              <span className="prices initial-price">₹ <del>{i.initial_price}</del> </span>
           
            <button className="like material-symbols-outlined" onClick={(e)=>{
              set_like([...like_data,i])
              set_reponse({...response,val:"favorite",state:true})
            }}>
favorite
</button>
            <button className="buy material-symbols-outlined" onClick={(e)=>{
              
              i["unique_count"]=i.unique_count+1;
              set_data([...cart_datas,i]);
              set_reponse({...response,val:"shopping_bag",state:true})
            }}>
            shopping_bag
            </button>
            </div>
        })
      }
      </div>
      {
        response.filter_empty&&(
          <div className="noitems">
            <img src={logo} className='log-truck'/>
            <img src={alert} className='alert'/>
            <h1>Items Not Found</h1>
          </div>
        )
        
      }
      </div>
      {response.state&&(
      <span className="state ">Added<span className="material-symbols-outlined">{response.val}</span></span>)
}
        </>
    )
}
export default Products;