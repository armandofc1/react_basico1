import React from 'react';

class HelloWorld extends React.Component {
    render() {
        return ( <
            p > Hello World, < span className = 'label label-primary' > teste < /span></p >
        );
    }
}

export default HelloWorld;

/*
var React = require('react');

var HelloWorld = React.createClass({
render: function(){
return (
<p>Hello World, <span className='label label-primary'>teste</span></p>
);
}
});

module.exports = HelloWorld;
*/