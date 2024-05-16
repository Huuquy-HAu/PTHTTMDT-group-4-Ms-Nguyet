import React, { useState } from 'react'
import FilterMenu from "./FilterMenu"
import ListProduct from "./ListProduct-filter"
import {useParams} from "react-router-dom"

import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {useLocation} from "react-router-dom"
import { instance } from '../../../config/axios'
function FilterProduct() {
  const nav =useNavigate()
  const [cloneData,setCloneData]= useState([])
  // const condition = useParams()
  // let [searchParams, setSearchParams] = useSearchParams();
  const [count,setCount] = useState(0)
  
  const [urlValue,setUrlValue] = useState([])
  const [dataPage,setDataPage]=useState()

 
  return (
    <div className='Filter-flex'>
          <div  className='filter-menu-css'><FilterMenu ></FilterMenu></div>
          <div className='product-css'>
                <div  ><ListProduct cloneData={cloneData} ></ListProduct></div>
                
          </div>
    </div>
  )
}

export default FilterProduct