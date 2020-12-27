import React, { useContext } from 'react';
import EntityList from './components/EntityList';
import EntitySearch from './components/EntitySearch'
import { EntityContext } from './context/index'



function App() {
  const appContext = useContext(EntityContext)
  const { loading } = appContext
  return (
    <div>
        <EntitySearch />
      {loading ? <h1 className="text-center">Loading...</h1> :
        <EntityList />}
    </div>
  );
}

export default App;
