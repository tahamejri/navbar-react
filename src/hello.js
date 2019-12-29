import React, { Component } from 'react'

const Example = function (props) {
    console.log(props)
    return <h1>hello</h1>
}



class NavBar extends Component {
     state = {
     listElements : [{text:'Taha',link:'http://github.com'},{text:'Home',link:'http://www.google.com'},{text:'Profile',link:'http://www.facebook.com'}]
     }
    listsHTML = this.state.listElements.map((element,i) =>  <li className ='nav-item' key = {i}> <a className = 'navbar-brand' href={element.link}>{element.text}</a> </li> ) 
    
    render() {
        return (
            <div className='navbar navbar-expand-lg navbar-light bg-light'>
                <ul className='navbar-nav'>
                    {this.listsHTML}
                    {<DropDownLi/>}
                </ul>
            </div>
        )
    }

}

class DropDownLi extends Component {
    render() {
        return (
          <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="http://google.com">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
        )
    }
}

export {
    NavBar,DropDownLi 
    
} 