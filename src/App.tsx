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
    pt-7
    landscape:items-start
    landscape:justify-around
    landscape:pl-4
    landscape:pr-4

    
    portrait:flex-col
    portrait:items-center

    bg-gradient-to-b from-indigo-200 to-transparent
`;

export default App;