import logo from './logo.svg';
import './App.scss';
import './components/style/styles.css';
import './components/style/style.scss';
import Button from './components/Button';
import Menu from './components/Menu';
import Box from './components/Box'
import FirstModule from './components/FirstModule';
import SecondModule from './components/SecondModule';

const appStyle = {
  textAlign: 'left'
};

const headerStyle = {
  backgroundColor: 'blick',
  color: 'yellow',
  textAlign: 'center'
};

const titleStyle = {
  textDecoration: 'underline',
  textShadow: '4px 1px #9c9c9c'
}

function App() {
  return (
    <div style={appStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>스타일링 수업중입니다.</h1>
      </header>
      <div className='App'>
        <h1 className='appTitle'>외부 CSS 파일 적용</h1>
        <p>스타일 적용 방법 학습중입니다.</p>
        <div>
          <Menu />
        </div>
        <Box />
        <FirstModule />
        <SecondModule />
      </div>
      <div className='App'>
        <div className='button'>
          <Button>BUTTON</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
