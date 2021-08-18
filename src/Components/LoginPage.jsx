import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Google } from 'react-bootstrap-icons'

function LoginPage() {
    
    const googleLogin = () => {
        // backendurl/auth/google
        window.open("http://localhost:5000/auth/google", "_self");
    }
    
    return (
        <Container className="my-3 d-flex justify-content-center">
            <Button onClick={googleLogin} className="p-3 my3" variant="outline-danger">
                <h3 className="d-flex align-items-center justify-content-center"><Google size="26" className="mx-2"></Google>Login with Google</h3>
            </Button>
        </Container>
    )
}

export default LoginPage
