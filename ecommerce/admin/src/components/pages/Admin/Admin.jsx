import Slidebar from '../../Slidebar/Slidebar'
import { Routes, Route } from 'react-router-dom'
import AddProduct from '../../AddProduct/AddProduct'
import ListProduct from '../../ListProduct/ListProduct'
import './Admin.css'
const Admin = () => {
  return (
    <div className='admin'>
      <Slidebar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>} />
         <Route path='/listproduct' element={<ListProduct/>} />

      </Routes>
    </div>
  )
}

export default Admin