import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import Badge from 'react-bootstrap/Badge';
import HeadPhone from './headphones.svg';
import MovieRoll from './movie-roll.svg';
import Fire from './fire.svg';
import Movie from './movie.svg';
import Tv from './tv.svg';
import Search from './search.svg';
import Fire1 from './fire1.svg';
import Tv1 from './tv1.svg';
import './Main.css';
import $ from 'jquery';

function Home() {
    const [res, setRes] = useState([]);
    const [img, setImg] = useState([]);

    const getData = async () => {
        try {
                const data = await axios.get("http://localhost:3000/api");
                const imgData = await axios.get("http://localhost:3000/img-api");
                console.log(data);
                console.log(imgData);
                setRes(data.data);
                setImg(imgData.data);
            
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <div className='container-fluid bg-dark bg-gradient mb-5 pb-3'>
                <div className="container bg-dark bg-gradient">
                    <div className="row p-3 bg-dark bg-opacity-50 justify-content-center">
                        <span className='col-4 text-light display-4 text-center px-0 mx-0'>TRENDING</span>
                        <img src={Fire1} className="col-3 px-0 mx-0" style={{ height: "10%", width: "5%" }} />
                    </div>
                    <div className="row">
                        {
                            res.map((path, index) => {
                                const imgCnt = img[index];
                                return (
                                    <div className='col-md-3'>
                                        <Link to="/info" style={{ textDecoration: "none" }} state={{ inf: path }}>
                                            <div className='my-4 rounded' style={{ position: 'relative' }}>
                                                <img className="w-100 rounded" src={"data:"+imgCnt.content+";base64,"+imgCnt.data} alt={path.Title} />
                                                <Badge pill bg="primary" style={{ position: 'absolute', top: 0, right: 0 }}>{path.Rating.toFixed(1)}</Badge>
                                                <div className="desc p-2 bg-info bg-opacity-25">
                                                    <p className="desc_content h5 text-light text-center"><b>{path.Title}</b></p>
                                                </div>
                                                <div className="row desc p-1 m-0 text-center text-light bg-info bg-opacity-25 rounded-bottom">
                                                    <span className="col-6 desc_content">{path.Category}</span>
                                                    <span className="col-6 desc_content">{path.ReleaseDate.slice(0,10)}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div >
            </div>
            <div className='container-fluid bg-info bg-gradient pt-2' style={{ position: "fixed", bottom: "0%", zIndex: "3", height: "100px" }}>
                <div className="container bg-info bg-gradient">
                    <div className='row justify-content-center text-center'>
                        <span className='col-3 btnn'>
                            <button className="btn">
                                <img src={Movie} style={{ height: "20%", width: "20%" }} />
                                <p>Movies</p>
                            </button>
                        </span>
                        <span className='col-3 btnn'>
                            <button className="btn">
                                <img src={Tv} style={{ height: "20%", width: "20%" }} />
                                <p>TV Series</p>
                            </button>
                        </span>
                        <span className='col-3 btnn'>
                            <Link to="search">
                                <button className="btn">
                                    <img src={Search} style={{ height: "20%", width: "20%" }} />
                                    <p>Search</p>
                                </button>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;