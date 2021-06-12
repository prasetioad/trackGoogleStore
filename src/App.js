
import Routers from './component/config/MainRoutes';
import store from './component/config/Redux';
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}

export default App;
