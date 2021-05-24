import React, { useEffect } from 'react';
import { Toast } from 'antd-mobile';
import './App.css';

function App() {
  useEffect(() => {
    Toast.success('我是帅哥');
  }, []);
  return (
    <div className="App">
      <div className="title">我是帅哥</div>
    </div>
  );
}

export default App;
