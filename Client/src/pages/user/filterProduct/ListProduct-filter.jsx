import React, { useState } from 'react'
import Data from "./product.json"
import {useEffect} from "react"
import { Card } from 'antd';
import "./Listproduct-filter.css"
import { Pagination } from 'antd';
import { useNavigate } from 'react-router-dom';
import {useLocation} from "react-router-dom"
import { instance } from '../../../config/axios'
import { Link } from 'react-router-dom';
const { Meta } = Card;
function ListProduct() {
    const [dataFake,setDataFake] = useState([])
    const location = useLocation()
   
    const cutLink = new URLSearchParams(location.search)
   const [dataClone,setDataClone]= useState([])
  const [brandz,setBrandz] = useState([])
  const [dataCategori,setDataCategori]=useState([])
  let nav = useNavigate()
  let page = cutLink.get("page")
  let [pageCuren,setPageCuren] = useState((new URLSearchParams(location.search)).get("page") * 1)
 
  useEffect(() => {

    getData()

    }, [location])
    async function getData (){
      // let brandCut = []
      try {
            let cut = cutLink.get("search")
            let brandlink = cutLink.get("brand")
            let categori = cutLink.get("categori")
            let data = await instance.get(`/product/find-products-by-name?productName=${cut}`)        
            let dataMini = data.data.products
            let push =[]
            let dataBig = await instance.get(`/product/get-all-products`)
            let dataBigCT = dataBig.data.products
            let price = cutLink.get("price")
            
           if(categori){
            let categoriFil =  dataBigCT.filter(function(value){
                return value.categoryId.categoryName === categori
              })
              
              setDataClone(categoriFil.slice((12*(page-1)),(12*page)))
              setDataFake(categoriFil)
            if(!brandlink && !price){
              setDataClone(categoriFil.slice((12*(page-1)),(12*page)))
              setDataFake(categoriFil)
            }
            else if(brandlink && !price){
                   setBrandz(brandlink.toUpperCase().split(" "))
                   categoriFil.map(function(value){
                        if(value.brand){
                          for(let i=0;i<brandlink.toUpperCase().split(" ").length;i++){
                              if(brandlink.toUpperCase().split(" ")[i] === value.brand.toUpperCase() ){
                                push.push(value) 
                                
                              }
                          }
                          setDataClone(push.slice((12*(page-1)),(12*page)));
                              setDataFake(push)
                        }
                    })

                  }
              else if(brandlink && price){
                let priceF = price.split("-")
                setBrandz(brandlink.toUpperCase().split(" "))
                categoriFil.map(function(value){
                 
                  if(value.brand && value.price){
                    for(let i=0;i<brandlink.toUpperCase().split(" ").length;i++){
                        if(brandlink.toUpperCase().split(" ")[i] === value.brand.toUpperCase() && parseInt(priceF[0])<= parseInt(value.price) && parseInt(value.price) <=parseInt(priceF[1])){
                          push.push(value) 
                          
                        }
                    }
                    setDataClone(push.slice((12*(page-1)),(12*page)));
                    setDataFake(push)
                  }
              })

              }
                    if(price && !brandlink ){
                      
                      let priceF = price.split("-")
                      categoriFil.map(function(value){
                       
                        if (value.price && parseInt(priceF[0])<= parseInt(value.price) && parseInt(value.price) <= parseInt(priceF[1])){
                         

                                push.push(value) 
                                // console.log(push,89);
                              }
                            })
                            setDataClone(push.slice((12*(page-1)),(12*page)));
                            setDataFake(push)
                    }
                 
                }
                else if(!categori && dataMini ){
                    
                      setDataClone(dataMini.slice((12*(page-1)),(12*page)))
                      setDataFake(dataMini)

                      if(!brandlink && !price){
                        setDataClone(data.data.products.slice((12*(page-1)),(12*page)))
                        // console.log(data.data.products.slice((12*(page-1)),(12*page)));
                        setDataFake(data.data.products)
                        
                      }
                      else if(brandlink && !price){
                        setBrandz(brandlink.toUpperCase().split(" "))
                        dataMini.map(function(value){
                             if(value.brand){
                               for(let i=0;i<brandlink.toUpperCase().split(" ").length;i++){
                                
                                   if(brandlink.toUpperCase().split(" ")[i] === value.brand.toUpperCase() ){
                                     push.push(value) 
                                    
                                   }
                               }
                               setDataClone(push.slice((12*(page-1)),(12*page)));
                                   setDataFake(push)
                             }
                         })
     
                       }
                         
                    if(price && !brandlink ){
                      
                      let priceF = price.split("-")
                      dataMini.map(function(value){
                       
                        if (value.price && parseInt(priceF[0])<= parseInt(value.price) && parseInt(value.price) <= parseInt(priceF[1])){
                         

                                push.push(value) 
                                // console.log(push,89);
                              }
                            })
                            setDataClone(push.slice((12*(page-1)),(12*page)));
                            setDataFake(push)
                    }   
                    else if(brandlink && price){
                      let priceF = price.split("-")
                      setBrandz(brandlink.toUpperCase().split(" "))
                      dataMini.map(function(value){
                       
                        if(value.brand && value.price){
                          for(let i=0;i<brandlink.toUpperCase().split(" ").length;i++){
                              if(brandlink.toUpperCase().split(" ")[i] === value.brand.toUpperCase() && parseInt(priceF[0])<= parseInt(value.price) && parseInt(value.price) <=parseInt(priceF[1])){
                                push.push(value) 
                                
                              }
                          }
                          setDataClone(push.slice((12*(page-1)),(12*page)));
                          setDataFake(push)
                        }
                    })
      
                    }
                    let newLink = (new URLSearchParams(location.search)).get("page")
                    setPageCuren(newLink)
                }
      } catch (error) {
        console.log(error);
      }
    }
    
      function clickPage (page){
        let pageSize = 12
      //  let dataCl = dataClone
       let clone = dataFake.slice((pageSize*(page-1)),(pageSize*page))
        
        setDataClone(clone)
        let link = location.search.split("&")
        let mini = link[1].split("=")
        let l = ""
           mini[1] = page
       
        if(link.length === 3){

           l = link[0]+"&"+mini.join("=")+"&"+link[2]
          
        }
        if(link.length === 2){
          l = link[0]+"&"+mini.join("=")
          
        }
        setPageCuren(page)
        nav(l)
      }
   
  return (
    <>
    <div className='Listproduct-product'>
            {
                dataClone.map(function(value,index){
                
                    return(
                        <div className='Listproduct-product-card' key={index} >
                                <Link to={`/product-detail/${value._id}`}>
                                        <Card hoverable cover={<img alt="example" src={value.thumbnail.startsWith("http")?value.thumbnail:'https://shope-b3.thaihm.site/'+value.thumbnail}  className="card-listproduct"/>}>
                                            <Meta title={value.productName} description={value.price?value.price.toLocaleString()+"đ":"Het hang "} />
                                            </Card>
                                </Link>
                        </div>    
                    )    
                })
            }
    </div>
    
    <div>
               <Pagination current={pageCuren} total={dataFake.length} onChange={clickPage} />;
     </div>
    </>
  )
}

export default ListProduct