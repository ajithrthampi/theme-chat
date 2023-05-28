import {useContext, useState} from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import {AuthContext} from "./context/AuthContext";
import {ChatContext} from "./context/ChatContext";
import {ThemeContext} from "./context/ThemeContext";


function App() {
    
    
    const [value, setValue] = useState("")
    const {currentUser} = useContext(AuthContext)
    const {data} = useContext(ChatContext)
    // console.log("sjkdfljkldsfjkdsfjkldsfdsfjk", data);

    const ProtectedRoute = ({children}) => {
        if (!currentUser) {
            return <Navigate to="/login" />
        }
        return children
    }

    // console.log("app-theme",value);

    return (<>
        <div className={
             value === "dark" ? "theme-dark" : "theme-light"
        }>
            <ThemeContext.Provider value={{value, setValue}}>
                <Router>
                    <Routes>
                        <Route path="/"
                            element={
                                <ProtectedRoute><Home/></ProtectedRoute>
                            }/>
                        <Route path="/register"
                            element={<Register/>}/>
                        <Route path="/login"
                            element={<Login/>}/>
                    </Routes>
                </Router>
            </ThemeContext.Provider>
        </div>

    </>);
}

export default App;
