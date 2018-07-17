import * as React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { MyElementFactory, MyElement } from './MyElement';

window.customElements.define('my-element', MyElementFactory({ param1: '[param1 param]' }));

class App extends React.Component {
  myElementRef: React.RefObject<MyElement>;
  constructor(props: {}, context: {}) {
    super(props, context);

    this.myElementRef = React.createRef();
  }
  componentDidMount() {
    if (this.myElementRef.current) {
      this.myElementRef.current.prop1 = () => '[prop1 func]';
    }
  }
  render() {
    return (
      <div style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
        <my-element attribute1="[attribute1 attr]" ref={this.myElementRef} title="[title attr]" />
        <Hello name="CodeSandbox" />
        <h2>Start editing to see some magic happen {'\u2728'}</h2>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
