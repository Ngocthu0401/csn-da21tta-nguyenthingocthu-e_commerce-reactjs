import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Mobile",
    }
    ,
    
    {
      cateImg: "./images/category/cat2.png",
      cateName: "PC",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Gaming devices",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Smart appliances",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Cameras",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Music",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Positioning & GPS",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Tablet",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Medical equipment",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Television",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Watch",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories