import React from 'react'
import Header from './../../components/Header'

const Layout = ({ children }) => (
  <React.Fragment>
    <Header {...children.props} />
    {children}
  </React.Fragment>
)

export default Layout