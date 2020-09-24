import React from 'react';
import queryString from 'query-string'
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom'

export default function RouterTest() {

    const active = {
        color : 'red'
    }
    return (
        <div>
            <div id='menu'>
                <NavLink exact to = '/' activeStyle={active}>Home</NavLink>
                <NavLink to = '/students' activeStyle={active}>Students</NavLink>
            </div>
            <div id='content'>
            <Layout>                
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path="/students/:id" component={Detail}/>
                    <Route path='/students' component={Students}/>
                    <Route component={NoPage}/>
                </Switch>
            </Layout>
            </div>
        </div>
    )
}

function Layout({children}) {
    return (
        <>
        <div>디자인</div>
        {children}
        </>
    )
}
//////////////////////////////////////////////////////////////
function Home({history, location, match}) {
    
    console.dir(location)
    console.dir(match)
    return (
        <div>
            HOME
        </div>
    )
}
//////////////////////////////////////////////////////////////
function Students({history, location, match}) {
    console.dir(location)
    console.dir(match)

    const click = () => {
        history.push('/')
    }
    return (
        <div>
            STUDENTS
            <button onClick={click}>go home</button>
            <a><Link to='/'>go home</Link></a>
        </div>
    )
}
//////////////////////////////////////////////////////////////
function Detail({history, location, match}) {
    console.dir(match.params)

    const qs = queryString.parse(location.search);
    console.dir(qs)
    return (
        <div>
            Detail : {match.params.id} <br/>
            name : {qs.name}
        </div>
    )
}
//////////////////////////////////////////////////////////////
function NoPage({history, location, match}) {
    console.dir(location)
    console.dir(match)
    return (
        <div>
            NoPage
        </div>
    )
}