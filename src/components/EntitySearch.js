import React, { useContext, useState} from 'react'
import { EntityContext } from '../context/index'
import {Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse} from 'reactstrap'

export default function EntitySearch() {
  const appContext = useContext(EntityContext)
  const {siteConfig,  handleSelectChange } = appContext 

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
        <NavbarBrand href="#">{siteConfig.name}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
              <div className="container d-flex justify-content-center"> 
              <form className="form-inline">
                <select className="form-control" name="cat" id="cat" onChange={(e) => handleSelectChange(e)}>
                    <option value="">All categories</option>
                    {siteConfig.categories.map(category => {
                        return <option key={category} value={category}>{category}</option>
                    })}
                </select>
                </form></div> 
            </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
  )
}
