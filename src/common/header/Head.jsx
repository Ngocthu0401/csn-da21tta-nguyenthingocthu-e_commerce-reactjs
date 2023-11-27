import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label>+0563770XXX</label>
            <i className='fa fa-envelope'></i>
            <label>ngthuthu@gmail.com</label>
          </div>
          <div className='right row RText'>
           
            <span><i className="fa-solid fa-earth-americas"></i></span>
            <label>EN</label>
            <span><i className="fa-solid fa-earth-americas"></i></span>
            <label>VN</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head