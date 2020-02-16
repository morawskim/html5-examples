import React from 'react';
import './App.css';
import {AppContextInterface, useAppContext, withAppContext, AppProvider} from "./context";

interface TestProps {
  appContext: AppContextInterface
  title: string
}

const Test:React.FC<TestProps> = (props) => {
  return <p>theme: {props.appContext.theme}</p>;
};
const TestWithHocAppContext = withAppContext<TestProps>(Test);


const FunctionComponentWithUseContext: React.FC = () => {
  const ctx = useAppContext();
  return (
      <>
        <Test appContext={ctx!} title={'static from function component'} />
      </>
  );
};


function App() {
  return (
    <div className="App">
      <AppProvider value={{theme: 'dark'}}>
        <FunctionComponentWithUseContext />

        <TestWithHocAppContext title={'test'} />
      </AppProvider>
    </div>
  );
}

export default App;
