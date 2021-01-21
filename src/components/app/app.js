import './app.scss';
import Input from '../input/input';
import Drobdown from '../drobdown-checkbox/drobdown';

function App() {
  return (
    <div className="app">
      <Input name="Label" placeholder="placeholder" errorMsg="Validation error message" />
      <Drobdown />
    </div>
  );
}

export default App;
