import React from 'react';
import './bootstrap.min.css';
import './bootstrap.min-lux.css';
import cesar from './cesar.png';

const header = (props) => {
    return (
        <div className="container col-md-12">
            
            <nav class="navbar navbar-expand-lg navbar-primary bg-secondary">
                <a class="navbar-brand"><img src={cesar} className="img-thumbnail" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor03">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link btn btn-secondary" href="#"><h1>Store</h1> <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  btn btn-secondary" href="#">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  btn btn-secondary" href="#">Releases</a>
                        </li>

                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <div>
                            <h1 className="bg-secondary"><span className="glyphicon glyphicon-briefcase  btn-primary btn-lg">Bag</span></h1>
                        </div>
                        <table>
                            <th>Items:</th><td><h4 class="badge-pill badge-warning">{props.counter}</h4></td>
                            <tr><td>Subtotal</td><td><h4 class="badge-pill badge-warning"></h4></td></tr>
                        </table>
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>


    )


};

export default header;