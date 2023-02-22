import React from 'react'
import useFetch from '../../hooks/useFetch'
import './featured.css'


function Featured() {


    const { data, loading, error} =useFetch("/hotels/countByCity?cities=berlin,madrid,london")


    console.log(data);
    return (
    <div className="featured">
   {loading ? ( "Loading please wait") : (
      
               <>
            <div className="featuredItem">
            <img className='featuredImg' src="https://images.pexels.com/photos/13105035/pexels-photo-13105035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

                <div className="featuredTitles">

                    <h1>Austin</h1>
                    <h2>123 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className='featuredImg' src="https://images.pexels.com/photos/528427/pexels-photo-528427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

                <div className="featuredTitles">

                    <h1>Texas</h1>
                    <h2>234 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className='featuredImg' src="https://images.pexels.com/photos/12803395/pexels-photo-12803395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

                <div className="featuredTitles">

                    <h1 >Miami</h1>
                    
                    <h2 className='prope'>178 Properties</h2>
                </div>
            </div>
            
            </>
    
)}
            
        </div>

    );
}

export default Featured