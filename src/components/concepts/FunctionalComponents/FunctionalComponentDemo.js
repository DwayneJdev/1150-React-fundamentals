import {
    Container,
    Row,
    Col
} from 'reactstrap'

const FunctionalComponentDemo = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
            Hello React
            <h1>Functional Components</h1>
            <p>Functional components are the primary tool in react to build a small, modular piece of your page.</p>
            <dl>
                <dt>Can use state</dt>
                <dd>with the 'UseState' hook, functional components can now both render a display to the page and update the info to be shown.</dd>
                <dt>No 'this' keyword</dt>
                <dd>Older class components in React use 'this'. Functional components have no 'this' object.</dd>
                <dt>Can use effects</dt>
                <dd>With the 'useEffect' hook, functional components can perform side effects with any prop or state changes</dd>
                <dt>return()</dt>
                <dd>Must return a single element, but this element ma have nested elements inside of it.</dd>
            </dl>
            <h1>Functional Syntax vs Arrow Function</h1>
            <Container className='main'>
                <Row>
                    <h1>Challenge</h1>
                </Row>
                <Row>
                    <Col md='6'>
                    <HelloWorld />
                    </Col>
                    <Col md='6'>
                        <HelloWorldFatArrow />
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
};

const HelloWorld = function() {
    return(
        <div>
            <p>"Const HelloWorld = function" is a regular function </p>
        </div>
    )
}

const HelloWorldFatArrow = () => 
    <div>
    <p>"Const HelloWorldFatArrow = () => {}" is an arrow function</p>
    </div>


export default FunctionalComponentDemo;