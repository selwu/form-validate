import './app.scss';
import Input from '../input/input';
import Dropdown from '../dropdown/dropdown';

function App() {
  return (
    <div className="app">
      <Input name="Label" placeholder="placeholder" errorMsg="Validation error message" />
      <Dropdown />
    </div>
  );
}

export default App;
