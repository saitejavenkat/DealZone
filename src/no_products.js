import logo from'./logo.png';
import './no_product.css';
import alert from './alert.jpeg'
function NoProducts({err})
{
    return(
        <div className="no-items">
            <img src={logo} className='log-truck'/>
            <img src={alert} className='alert'/>
            <h1>{err} Items Not Found</h1>
          </div>
    )
}

export default NoProducts;