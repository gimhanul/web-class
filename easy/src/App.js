import Props from './components/Props';
import PropsDatatype from './components/PropsDatatype';
import PropsBoolean from './components/PropsBoolean';
import PropsObjVal from './components/PropsObjVal';
import PropsRequired from './components/PropsRequired';
import PropsDefault from './components/PropsDefault';
import PropsNode from './components/PropsNode';
import ReactState from './components/ReactState';
import SetState from './components/SetState';
import ForceUpdate from './components/ForceUpdate';
import ComponentClass from './components/ComponentClass';
import PureComponentClass from './components/PureComponent'
import ShallowEqual from './components/ShallowEqual';
import FunctionComponent from './components/FunctionComponent';
import ReactHook from './components/ReactHook';
import Fragments from './components/Fragments';
import ReturnMap from './components/ReturnMap';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Start React 200!</h1>
      <p>CSS 적용하깅</p>

      {/* <Props props_val ="THIS iS PROPS" /> */}

      {/* <PropsDatatype
        String="react"
        Number={200}
        Boolean={1==1}
        Array={[0,1,8]}
        ObjectJson={{react: "리액트", thohundered: "200"}}
        Function={console.log("FunctionProps: function!")}
      /> */}

      {/* <PropsBoolean BooleanTrueFalse={false}/>
      <PropsBoolean BooleanTrueFalse/> */}

      {/* <PropsObjVal ObjectJson={{react: "리액트", twohundred: "200"}} /> */}

      {/* <PropsRequired ReactNumber={200} /> */}

      {/* <PropsDefault ReactNumber={200} /> */}

      {/* <PropsNode>
        <span>node from App.js</span>
      </PropsNode> */}

      {/* <ReactState reactString={"react"}/> */}

      {/* <SetState /> */}

      {/* <ForceUpdate /> */}

      {/* <ComponentClass /> */}

      {/* <PureComponentClass /> */}

      {/* <ShallowEqual /> */}

      {/* <FunctionComponent contents="[THIS Is FunctionComponent]"/> */}

      {/* <ReactHook /> */}

      {/* <Fragments /> */}

      <ReturnMap />

    </div>
  );
}

export default App;
