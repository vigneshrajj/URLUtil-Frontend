import './App.scss';
import { Switch } from '@mui/material';

const label = { inputProps: { 'aria-label': 'PDF Switch' } };

function App() {
    return (
        <div className='App'>
            <div className='form'>
                <h2>URL Util</h2>
                <input type='text' placeholder='URL' />
                <div className='switch-container'>
                    <p>Image</p>
                    <Switch {...label} defaultChecked />
                    <p>PDF</p>
                </div>
                <button>Convert</button>
            </div>
        </div>
    );
}

export default App;
