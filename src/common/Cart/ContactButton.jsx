import React, {useState} from 'react';
import './style.css'

function ContactButton () {


const [showForm, setShowForm] = useState(false);

const handleButtonClick = () => {
  setShowForm(!showForm);
};

return (
  <div className="App1">
    
      
      <button className='btnPay' onClick={handleButtonClick}>Đặt hàng</button>
      {showForm && (
        <div className="overlay">
          <div className="form-container">
            
            <h2>Xác nhận thanh toán</h2>
           <p>Nhấn Đặt hàng đồng nghĩa với việc bạn đồng ý tuân theo Điều khoản Shop</p>

            <button className='btnPay' onClick={handleButtonClick}>OK</button>
          </div>
        </div>
      )}
   
  </div>
);
      }

export default ContactButton;