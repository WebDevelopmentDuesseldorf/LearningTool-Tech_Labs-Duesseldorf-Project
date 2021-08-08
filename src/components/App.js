import React from "react";

import LogIn from "./LogIn";

import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../hooks/useAuth"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"






const App = () => {
    
    return (
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}} >
                <div className="w-100" style={{maxWidth: "400px"}}>
                <Router>
                    <AuthProvider>
                        <Switch>
                            
          
                            <Route path="/login" component={LogIn} />
                      

                        </Switch>
                    </AuthProvider>
                </Router>
                </div>
            </Container>
    ) 
}


export default App