import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Home = () => {
    return (
        <div>
            <NavBar 
                routes={[
                    <Link to='/'>Home</Link>,
                    <Link to='/post/new'>New post</Link>
                ]}
            />
            <Outlet/>
        </div>
    )
}

export default Home