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
    flex-col
    items-center
    justify-center
    pt-5
    
    lg:flex
    lg:flex-row
    lg:items-start
    lg:justify-around
    lg:pl-4
    lg:pr-4

    bg-gradient-to-b from-stone-400 to-transparent
`;

export default App;