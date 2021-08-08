import React from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../hooks/useAuth"
import { Link } from "react-router-dom"
import {useForm} from 'react-hook-form'

const LogIn = () => {
    const {handleSubmit, register, errors, setError, formState} = useForm()

    const {sendSignInLinkToEmail} = useAuth()

    const onSubmit = async data => {
        try {
            await sendSignInLinkToEmail(data.email)
        } catch (error) {
            setError('email', {
                type: 'manual',
                message: error.message
            });
        }
    }

    return (
    <div> 
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>
                {errors && <Alert variant="danger">{errors}</Alert> }
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={register()} required />
                    </Form.Group>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>


                    <Button disabled={!register.current.value} isLoading={formState.isSubmitting} className="w-100 text-center mt-3" type="submit">
                    Log In
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
         </div>
        </div>
        
    )

}

// const LogIn = () => {
//     const emailRef = useRef()
//     const passwordRef = useRef()
//     const { login } = useAuth()
//     const [error, setError] = useState('')
//     const [loading, setLoading] = useState(false)
//     const history = useHistory()

//    const handleSubmit = async (e) => {
//         e.preventDefault()


//         try {
//             setError('')
//             setLoading(true) 
//             await login(emailRef.current.value, passwordRef.current.value)
//             history.push('/')
//         }   catch {
//             setError('Failed to login in')
//         }
//         setLoading(false)
//     }

//     return (
//     <div> 
//         <Card>
//             <Card.Body>
//                 <h2 className="text-center mb-4">Log In</h2>
//                 {error && <Alert variant="danger">{error}</Alert> }
//                 <Form onSubmit={handleSubmit}>
//                     <Form.Group id="email">
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control type="email" ref={emailRef} required />
//                     </Form.Group>
//                     <Form.Group id="password">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="password" ref={passwordRef} required />
//                     </Form.Group>
//                     <div className="w-100 text-center mt-3">
//                         <Link to="/forgot-password">Forgot Password?</Link>
//                     </div>


//                     <Button disabled={loading} className="w-100 text-center mt-3" type="submit">
//                     Log In
//                     </Button>
//                 </Form>
//             </Card.Body>
//         </Card>
//         <div className="w-100 text-center mt-2">
//             Need an account? <Link to="/signup">Sign Up</Link>
//          </div>
//         </div>
//     )
// }

export default LogIn