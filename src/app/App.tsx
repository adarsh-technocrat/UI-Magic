import React from 'react';
import './styles/index.css';
import SelectUIPreset from './components/SelectUIPreset';
import { Button } from '../../components/ui/button';
// import FrameSelectionComponent from './components/FrameSelectionComponent';
// import DescribeProductComponent from './components/DescribeProductComponent';

const onHandleConsoleButon = () => {
  parent.postMessage({ pluginMessage: { type: 'console' } }, '*');
};

function App() {
  return (
    <div className="">
      <SelectUIPreset />
      <Button
        onClick={() => {
          onHandleConsoleButon();
        }}
      >
        Console
      </Button>
      <Button
        onClick={() => {
          parent.postMessage({ pluginMessage: { type: 'create-rectangles' } }, '*');
        }}
      >
        Create Rectangle
      </Button>
      {/* <FrameSelectionComponent />
      <DescribeProductComponent /> */}
    </div>
  );
}

export default App;
