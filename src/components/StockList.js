import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  

const StockList = () => {

    const [stockList, setStockList] = useState(["GOOGL", "BTC-USD", "MSFT", "AMZN", "META"])
    const navigate = useNavigate()

    //passing the symbol in url to go 
    const handleStockSelect = (symbol) =>{
        navigate(`/${symbol}`) 
    }

    return (
        <div className='text-center'>
            {stockList?.map((symbol)=> {
                return (   
                   <button 
                        key={symbol} 
                        className='btn-success btn btn-sm ml-3 d-inline-block ms-3' 
                        onClick={()=>handleStockSelect(symbol)}      
                        >{symbol}  
                    </button>
                )
            })}
        </div>
    );
};

export default StockList;