import './App.css';
import {Product} from './components/product'

function App() {
  let productArr=[
    {
      productName:"Dairy Milk Chocolates",
        productImage:'https://www.chocokick.com/images/detailed/6/71dGEc6n2ML._SL1500_.jpg',
        productPrice:'Rs.154',
        product_created_by:'Cadbury'
    },
    {
      productName:"KitKat Bars",
        productImage:'https://i5.walmartimages.ca/images/Enlarge/218/696/999999-59800218696.jpg',
        productPrice:'Rs.99',
        product_created_by:'Nestle'
    },
    {
      productName:"Hershey Dark Chocolates",
        productImage:'https://i5.walmartimages.com/asr/dbf1232b-8d3f-455d-bb10-4a7a2b6f3b57_1.1ec6120cf7fe7962cfeaa1adf08ff614.jpeg',
        productPrice:'Rs.150',
        product_created_by:'Hershey'
    }
  ]
  return (
    <div className='App' style={{backgroundColor:"#88483e"}}>
      <h1 style={{color:"white", fontSize:"30px"}}>CHOCOLATE PRODUCTS</h1>
      <Product productName={productArr[0].productName} productPrice={productArr[0].productPrice} productImage={productArr[0].productImage} product_created_by={productArr[0].product_created_by}/>
      <Product productName={productArr[1].productName} productPrice={productArr[1].productPrice} productImage={productArr[1].productImage} product_created_by={productArr[1].product_created_by}/>
      <Product productName={productArr[2].productName} productPrice={productArr[2].productPrice} productImage={productArr[2].productImage} product_created_by={productArr[2].product_created_by}/>
    </div>
    
  );
}


export default App;