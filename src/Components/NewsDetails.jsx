import React from 'react';
import Header from './shared/Header';
import Navbar from './shared/Navbar';
import RightSideNav from './shared/RightSideNav';
import { useParams } from 'react-router-dom';

const NewsDetails = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid grid-cols-4 gap-5'>
                <div className="col-span-3">
                <h2 className='text-5xl mb-5 text-center'>News Details</h2>
                <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>

                </div>
            </div>
        </div>
    );
};

export default NewsDetails;