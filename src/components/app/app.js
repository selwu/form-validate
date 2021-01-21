import './app.scss';
import Input from '../input/input';

function App() {
  return (
    <div className="app">
      <Input name="Label" placeholder="placeholder" errorMsg="Validation error message" />
    </div>
  );
}

export default App;
