import React from "react";
import { FiFilter } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import "./Menufilter.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const dataCheck = ["SamSung","Redmi","HP","Apple","Oppo","Asus","Xiaomi","Nokia",]

function FilterMenu() {
  let [filterBox ,setFilterBox] = useState([])
  let [valueCheckbox,setValueCheckbox] = useState([])
  let nav = useNavigate()
 let local = useLocation()
 let link = new URLSearchParams(local.search)
 let brand = link.get("brand")
 let search = link.get("search")
 let priceFil = link.get("price")
function changeBox (vbox){
  let check = document.querySelector(`.${vbox}`).value
  let cheKbox = document.querySelector(`.${vbox}`).checked
   let l = ""
   
  
  if(!cheKbox){
    //  
    let arrBrand = brand.split(" ")
    let del = arrBrand.findIndex(function(value){
      return value === check
    })
    arrBrand.splice(del,1)
    
    if(arrBrand.length === 0){
      let lc = local.search.split("&")
      console.log(lc);
      l =  lc[0]+`&page=1`
    }
    if(arrBrand.length > 0){

      l = `?search=${search}&page=1&brand=${arrBrand.join(" ")}`
    }
   
}
else{
  if(!brand){
    let z= local.search.split("&")
    
    l = z[0]+`&page=1`+`&brand=${check}`
  }
  else if(brand){
    l = local.search+` ${check}`
  }
  
}

nav(l)


}
function price (){
  let valuePrice = document.querySelector(".price").value
  let valuePriceLast = document.querySelector(".price0").value
  let link = ""
  if(!priceFil){
     link = local.search + `&price=${valuePrice}-${valuePriceLast}`
  }
  if(priceFil){
    let p = local.search.split("&") 
    let z= p[p.length-1].split("=")[1]=`${valuePrice}-${valuePriceLast}`
    // console.log(z.split("=")[1]=`${valuePrice}-${valuePriceLast}`);
    p[p.length-1]=`price=${z}`
   
    link = p.join("&")
  }
  nav(link)
}
  return (
    <div className="filter-menu">
      <div className="filter-menu-header">
        <FiFilter className="icon-filter" />
        <h2>BỘ LỌC TÌM KIẾM</h2>
      </div>

      <div className="filter-menu-list">
     
      {
        dataCheck.map((value,index)=>{
              return(

                <div className="filter-item" key={index}>
                <input type="checkbox"  value={value}  className={value} onChange={()=>{changeBox(value)}}/>
                
                <div>
                  <span>{value}</span>
                </div>
              </div>

              )
                 
          
                
        })
        
      }
      </div>
      <div className="line"></div>
    
      <div className="filter-menu-list">
        <p>Khoảng Giá</p>

        <div className="filter-item-price">
          <input type="text" placeholder="₫ TỪ" className="price" />
          <div className="price-line"></div>
          <input type="text" placeholder="₫ ĐẾN" className="price0" />
        </div>
        <button className="price-btn" onClick={price}>ÁP DỤNG</button>
      </div>
    </div>
  );
}

export default FilterMenu;
