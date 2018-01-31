import React from 'react';
import './bootstrap.min.css';
import './bootstrap.min-lux.css';

const game =(props)=> {
    return (
        <div className="container">
            <table className="table table-hover">
                
                <tbody  className="table-dark text-left">
                    <tr className="table-active">
                        <td>
                            {props.game}
                        </td> 
                        <td>
                            {props.price}
                        </td> 
                    </tr> 
                </tbody>
                
            </table> 

        </div>


    )


}; 

export default game; 