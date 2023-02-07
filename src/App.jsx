import './App.scss';
import Home from './pages/Home';
import useRightClick from './hooks/RightClick'

function App() {

  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });

  // document.onkeydown = (e) => {
  //   if (e.keyCode === 123) {
  //     return false;
  //   } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
  //     return false
  //   } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
  //     return false
  //   } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
  //     return false
  //   } else if (e.ctrlKey && 'C' || 'c'.charCodeAt(0)) {
  //     return  false
  //   } else if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
  //     return false
  //   }
  // };
  const { x, y, showMenu} = useRightClick()
  return (
    <div className="App">
      <Home x={x} y={y} showMenu={showMenu}/>
      {/* <Menu x={x} y={y} showMenu={showMenu}/> */}
    </div>
  );
}

export default App;
