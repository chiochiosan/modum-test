import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Palindrom from './components/Palindrom';
import IdendLetters from './components/IdenLetters';
import Payments from './components/Payments';
import Badje from './components/Badje';
import Tasks from './components/Tasks';

function App() {
 
  return (
    <div className="App">


<Tabs>
    <TabList>
      <Tab>Теcтовое задание</Tab>
      <Tab>Задача 1</Tab>
      <Tab>Задача 2</Tab>
      <Tab>Задача 3</Tab>
      <Tab>Задача 4</Tab>
    </TabList>

    <TabPanel>
    <Tasks/>
    </TabPanel>
    

    <TabPanel>
    <Palindrom/>
    </TabPanel>
    
    <TabPanel>
    <IdendLetters/>  
    </TabPanel>
    
    <TabPanel>
    <Payments/>
    </TabPanel>

    <TabPanel>
    <Badje/>
    </TabPanel>

  </Tabs>




    </div>
  );
}

export default App;
