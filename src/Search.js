import React, { Component }  from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Search() {
    const [res, setRes] = useState([]);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const searchData = async (query) => {
        try {
            {
                const data = await axios.get("http://localhost:3000/api");
                console.log(data);
                setRes(data.data);
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        searchData(query);
    }, [query]);

    return (
        <div className='container mb-5 pb-3'>
            <button onClick={() => navigate(-1)} className="btn btn-outline-secondary btn-lg btn-block mt-2 p-2" style={{ float: "right" }}>← Back</button>
            <input type="search" placeholder="Search by keywords" className="col-md-12 mt-3 p-2 text-center" onChange={(e) => setQuery(e.target.value)} />
            <div className="row">
                {
                    res.map((path) => {
                        if (query) {
                            return (
                                <div className='col-md-3'>
                                    <Link to="/info" style={{ textDecoration: "none" }} state={{ inf: path }}>
                                        <div className='my-4 rounded' style={{ position: 'relative' }}>
                                            <img className="w-100 rounded" src={"https://image.tmdb.org/t/p/w200" + path.poster_path} alt={path.Title} />
                                            <div className="desc p-2 bg-info bg-opacity-25">
                                                <p className="desc_content h5 text-light text-center"><b>{path.Title}</b></p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    );
}
export default Search;