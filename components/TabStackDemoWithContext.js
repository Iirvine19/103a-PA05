import React from "react";
import ValueProvider from './ValueContext';
import TabStackDemo from './TabStackDemo'

const App = () => {
  const data = {spent:"", spentOn:"",description:""}

  return (
    <ValueProvider value={data}>
        <TabStackDemo />
    </ValueProvider>
  )
}

export default App;