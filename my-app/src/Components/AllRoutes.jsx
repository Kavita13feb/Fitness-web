
import {Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Plans from "./Pages/Plans"
import Coach from "./Pages/Coach"
import Comunity from "./Pages/Comunity"
import Elite from "./Pages/Elite"
import Excercise from "./Pages/Excercise"

export default function AllRoutes (){


    return (
        <div>
<Routes>
<Route path ="/" element={<Home/>}/>
<Route path ="/login" element={<Login/>}/>
<Route path ="/signup" element={<SignUp/>}/>
<Route path ="/plans" element={<Plans/>}/>
<Route path ="/comunity" element={<Comunity/>}/>
<Route path ="/excircise" element={<Excercise/>}/>
<Route path ="/coach" element={<Coach/>}/>
<Route path ="/elite" element={<Elite/>}/>

</Routes>

        </div>
    )
}