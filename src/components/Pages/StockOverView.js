import React from 'react';
import StockList from '../StockList';
import logo from '../../assets/stock.jpg'

const StockOverView = () => {
    
    return (
        <div className='mt-5 text-center shadow p-5 mb-5 bg-body rounded'>
            <div className="text-center ">
                <img style={{"width": "40%" }} src={logo} alt="logo"/>
            </div>
            <div>
                <h2 className='text-success p-3 bg-white rounded-4'>Stock Market Timeseries Analysis </h2>
                <label>Please click on a stock to see its timeseries.</label>
            </div>
            <div className='mt-5 border border-success border-opacity-10 shadow p-5 mb-5 bg-body rounded text-success p-3 bg-white rounded-4'>
                <StockList/>
            </div>
            
        </div>
    );
};
 
export default StockOverView;

