 
import './App.css';
import YoutubeList from './Components/YoutubeList';
import { YoutubeProvider } from './Components/YtContext';

function App() {
  return (
    <div className="App">
      <YoutubeProvider>
        <YoutubeList/>
    </YoutubeProvider>
    </div>
  );
}

export default App;
