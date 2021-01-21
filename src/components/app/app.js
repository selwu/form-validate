import './app.scss';
import Input from '../input/input';
import Checkbox from '../checkbox/checkbox';

function App() {
  return (
    <div className="app">
      <Input name="Label" placeholder="placeholder" errorMsg="Validation error message" />
      <Checkbox />
    </div>
  );
}

export default App;
