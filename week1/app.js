
const heading = React.createElement('h1', {}, 'Hello world!');

const paragraph = React.createElement('p', {}, 'Hey! from react')

const container = React.createElement('div', {className : 'container'}, [heading, paragraph])

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(container)