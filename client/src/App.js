import './App.css';
import { BrowserRouter ,Switch ,Route , Link} from "react-router-dom";
import CreateTour from './views/CreateTour'
import UpdateTour from './views/UpdateTour'
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import DisplayDetailes from './views/DisplayDetailes';
import AdminDashboard from './views/AdminDashboard';
import Index from './views/Index';
//-----------------//
import Home from './views/Home'
import Category from './views/Category'
import Card from './components/Card';
import sea from './assets/seaMain.jpeg';
import sea1 from './assets/seaMain.png';
import sea2 from './assets/s1.png';
import des from './assets/desertMain.webp';
import ForestImg from './assets/f3.jpg'
import snow from './assets/snowMain.jpeg';
import heights from './assets/heightsMain.jpeg';
import high from './assets/high.webp';
import Contact from './components/Contact';
import Payment from './components/Payment';


function App() {
  

  return (
    <div className="App">
  <BrowserRouter>
        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/card">
            <Category/>
          </Route>
             {/* ["Desert", "Oceans", "Forests", "Snow", "Heights"]; */}
          <Route exact path="/oceans"> 
            <Category  backGround = {sea2} bgColor={"bodySea"} bgContrast={'sea'} sectionTitle={'oceans'} propsType={"Oceans"}/>
          </Route>

          <Route exact path="/deserts"> 
            <Category backGround = {des} bgColor={"bodyDesert"} bgContrast={'desert'} sectionTitle={'deserts'} propsType={"Desert"}/>
          </Route>

          <Route exact path="/forests"> 
            <Category backGround = {ForestImg} bgColor={"bodyForest"} bgContrast={'forest'} sectionTitle={'forests'} propsType={"Forests"}/>
          </Route>

          <Route exact path="/snows"> 
            <Category backGround={snow} bgColor={"body-secondary"} bgContrast={'secondary'}  sectionTitle={'snows'} propsType={"Snow"}/>
          </Route>

          <Route exact path="/heights"> 
            <Category backGround={high} bgColor={"bodyHeights"} bgContrast={'heights'}  sectionTitle={'heights'} propsType={'Heights'}/>
          </Route>


          {/* for admin */}
          <Route exact path="/addTour">
            <CreateTour/>
          </Route>
          <Route exact path="/adminDashboard">
            <AdminDashboard/>
          </Route>
          <Route exact path="/tour/:id/edit">
            <UpdateTour/>
          </Route>

          {/* All Users */}
          <Route exact path="/tour/:id">
            <DisplayDetailes/>
          </Route>
          <Route exact path="/register">
            <RegisterForm/>
          </Route>
          <Route exact path="/index">
            <Index/>
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/payment/:price">
            <Payment />
          </Route>
       
{/* 
          <Route path="/users">
            <Users/>
          </Route>


          <Route path="/about">
            <About/>
          </Route> */}


        </Switch>
      </BrowserRouter>
      </div>

  );
}

export default App;
