import './App.css';
import ReactStateExample from './ReactStateExample'
import ReactPropsExampleParentapp from "./ReactPropsExampleParentapp"
import ReactWithoutPropsExamplParent from './ReactWithoutPropsExamplParent';
import ReactPropsExClass2FunctnPt from './ReactPropsExClass2FunctnPt'
import ReactFunctnBindExample from './ReactFunctnBindExample'
import ReactArrowFunctnWithoutBind from './ReactArrowFunctnWithoutBind'
import ReactConditnalRenderingPt from './ReactConditnalRenderingPt'
import ReactFunctinalSetstateParent from './ReactFunctinalSetstateParent'

function App() {
  return (
    <div className="App">
      <ReactStateExample/>
      <ReactPropsExampleParentapp/>
      <ReactWithoutPropsExamplParent/>
      <ReactPropsExClass2FunctnPt/>
      <ReactFunctnBindExample/>
      <ReactArrowFunctnWithoutBind/>
      <ReactConditnalRenderingPt/>
      <ReactFunctinalSetstateParent/>
    </div>
  );
}

export default App;

