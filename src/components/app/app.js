import './app.scss';
import Form from '../form/form';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Form />
      </Router>
    </div>
  );
}

export default App;
