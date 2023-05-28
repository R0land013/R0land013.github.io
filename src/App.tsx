import './App.css';
import MainContainer from './components/main/MainContainer';
import LeftBar from './components/leftbar/LeftBar';

function App() {
    return (
        <div className={className}>
            <LeftBar/>
            <MainContainer/>
        </div>
    );
}

const className = `
    flex
    flex-row
    mt-7
    landscape:items-start
    landscape:justify-around
    landscape:pl-4
    landscape:pr-4

    
    portrait:flex-col
    portrait:items-center
`;

export default App;