import './styles/App.scss';
import { observer } from 'mobx-react-lite';

import Exlorer from './components/Explorer';
import Editor from './components/Editor';
import { resize_store, store } from './stores/AppStore';
import { MouseEvent } from 'react';
import { Report } from './components/Report';

export const App = observer(() => {

  const mouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if(resize_store.mouseDown) {
      // console.log(screenX)
      resize_store.setContentX(e.screenX);
    }
  }
  return (
    <div className="App" onMouseMove={mouseMove}
                         onMouseUp={()=>{resize_store.setMouseUp()}}
    >
      {/* <header>
        header
      </header> */}
      <div className="body">
        <Exlorer/>
        <div id="resize" onMouseDown={()=>{resize_store.setMouseDown();}}></div>

        <div className="content">
          <div className="content__header">
            {store.currentTab.name}
          </div>

          <div className="content__body">
            <Editor/>
          </div>
        </div>

        {/* <Report/> */}
      </div>
    </div>
  )
})

export default App;
