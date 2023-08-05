import React from 'react';
import './styles/index.css';
import SelectUIPreset from './components/SelectUIPreset';
import FrameSelectionComponent from './components/FrameSelectionComponent';
import DescribeProductComponent from './components/DescribeProductComponent';

function App() {
  return (
    <div className="">
      <SelectUIPreset />
      <FrameSelectionComponent />
      <DescribeProductComponent />
    </div>
  );
}

export default App;
