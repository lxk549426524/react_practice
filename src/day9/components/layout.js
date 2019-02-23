import React from 'react';

class Layout extends React.Component{
    render(){
        const {children}=this.props
        return <section>
           {children}
        </section>
    }
}

export default Layout