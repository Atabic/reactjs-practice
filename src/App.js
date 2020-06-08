import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';

function App() {
  return (
    <div className="App">
      {/*<Greet name='Waseem' heroName='Batman'>
        <p>This is a child prop</p>
      </Greet>}
      <Greet name='Ahmad' heroName='Superman'>
      <button>Action</button>
      </Greet>
      <Greet name='Ammar' heroName='Wonderman'/>
  <Welcome name='Waseem' heroName='Batman'/>
  <Welcome name='Ahmad' heroName='Superman'/>    
  <Welcome name='Ammar' heroName='Wonderman'/>   
  <Message/> 

 {/*<Hello/>*/}
   {/* <Counter/>
    <FunctionClick></FunctionClick>
    <ClassClick></ClassClick>
   <EventBind> </EventBind>*/}
    {/*<ParentComponent></ParentComponent>
    <UserGreeting></UserGreeting>*/}
    {/*<NameList></NameList>*/}
    {/*<Stylesheet primary='false'/>
    <Inline />
    <h1 className='error'>Error</h1>
  <h1 className={styles.success}>Success</h1>
  <Form></Form>
  <LifecycleA />
  <FragmentDemo/>
  <Table/>
  <PureComp/> 
  <ParentComp/>
  <RefsDemo></RefsDemo>*/}
  {/* <FocusInput></FocusInput> */}
  {/* <FRParentInput></FRParentInput> */}
  {/* <PortalDemo/> */}
  {/* <ErrorBoundary>
  <Hero heroName="Batman"/>
  </ErrorBoundary>
  <ErrorBoundary>
  <Hero heroName="Superman"/>
  </ErrorBoundary>
  <ErrorBoundary>
  <Hero heroName="Joker"/>
  </ErrorBoundary> */}
  {/* <ClickCounter name='Atabic'/>
  <HoverCounter/> */}
{/* <ClickCounterTwo />
<HoverCounterTwo/>
<User render={(isLoggedIn)=>isLoggedIn ? 'Atabic': 'Guest'}/> */}
<CounterTwo 
render={(count,incrementCount)=>
  <ClickCounterTwo count={count} incrementCount={incrementCount }></ClickCounterTwo>
}/>
<CounterTwo 
render={(count,incrementCount)=>
  <HoverCounterTwo count={count} incrementCount={incrementCount }></HoverCounterTwo>
}/>
    </div>
  );
}

export default App;
