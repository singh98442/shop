import './App.css'
import MainDash from './components/maindash/MainDash';
import Review from './components/Review/Review';
import Sidebar from './components/sidebar/Sidebar';
import Table from './components/table/Table';

function App() {
  return (
    <div className="App">
      <div className="glassyapp">
        <Sidebar />
        <div className="middle">
          <MainDash/>
          <Table/>
        </div>
        <div className="right p-9">
          <Review/>
        </div>
      </div>

    </div>
  );
}

export default App;
