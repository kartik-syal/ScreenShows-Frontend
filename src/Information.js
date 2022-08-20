import React, { Component }  from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Info() {
    const { inf } = useLocation().state;
    const navigate = useNavigate();

    useEffect(() => {
        console.log(inf);
    }, [])

    return (
        <div>
            <div className='container-fluid bg-dark bg-gradient'>
                <div className='container py-4'>
                    <div className='row'>
                        <div className='col-md-4 p-0'>
                            <img src={"data:"+inf.Image.contentType+";base64,"+inf.Image.data.toString('base64')} className="rounded m-5 my-3" style={{ boxShadow: "0px 0px 10px 0px #0ff" }} />
                            <p className='m-0 p-0 text-center text-warning h6'>Rating - {inf.Rating.toFixed(1)} ( {inf.Votes} Votes )</p>
                        </div>
                        <div className='col-md-8 p-0'>
                            <span className='display-4 text-light px-4 mx-4 d-flex'><b>{inf.Title} ({inf.ReleaseDate.slice(0,10)})</b></span>
                            <p className='h4 text-info px-4 mx-4 mt-4'>{inf.Description} </p>
                        </div>
                    </div>
                    <button onClick={() => navigate(-1)} className="btn btn-outline-secondary btn-lg btn-block" style={{ float: "right" }}>← Back</button>
                </div>
            </div>
        </div>
    )
}
export default Info;