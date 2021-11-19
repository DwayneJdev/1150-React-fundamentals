import React from 'react';
const JSXRules = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
            <h1 className='section-title'>JSX</h1>
            <dl>
                <dt>Resembles HTML</dt>
                <dd>It's not. It's actually closer to Javascript.</dd>
                <dt>React Elements</dt>
                <dd>These are used to construct and update the DOM, or what you see on the screen.</dd>
                <dt>Not Required</dt>
                <dd>You can write in vanilla JS, but most people use JSX</dd>
                <dt>Differences between JSX and HTML</dt>
                <dd>1. 'className' instead of 'class'--Because 'class' is a reserved word in JavaScript, we can assign classes to our JSX elements with the 'className' attribute</dd>
                <dd>2. Event handler differences--React camel cases all of its event handler names, unlike HTML.  For instance, React gives us access to 'onChange' rather than 'onchange', or 'onClick' instead of 'onclick'.  There are more event handlers out there, but React camel cases them.</dd>
                <dd>3. JavaScript interpolation.  We saw this a few pages ago, but JSX allows us to write JavaScript within braces, { }, and it interprets that JS in the context of the JSX.  This allows us to use variables and function names directly inside our JSX code.  We'll see later how this allows us to build more dynamic components</dd>
            </dl>
            <hr />
            </div>
            <NormalComponent />
            <CreateElementComponents />
        </div>
    );
};

const NormalComponent = () => {
    return(
        <div style={{ border: '2px solid black' }}>
            <h1>Normal Functional Component</h1>
            <p>This was constructed with JSX in the return.</p>
            <img src='https://pbs.twimg.com/media/DOzL82mXkAA0zFs.jpg' alt="img" />
        </div>
    );
};

const CreateElementComponents = () => {
    return(
        React.createElement('div', {style: { border: '2px solid black' }},
        React.createElement('h1', null, 'Create Element Component'),
        React.createElement('p', null, 'This was constructed with createElement() in the return'),
        React.createElement('img', { src: 'https://cdn-images-1.medium.com/max/1200/1*jJZHFQmhkq_7ohn18KrMhA.png'}, null)
        )
    );
};

export default JSXRules;