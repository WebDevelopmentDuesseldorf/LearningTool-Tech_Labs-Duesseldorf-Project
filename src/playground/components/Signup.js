import React from "react"

import { Form, Button, Card } from "react-bootstrap"

export default function Signup(){
    return (
    <> 
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                    

                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
        <div classname="w-100 text-center mt-2">
            Already have an account? Log In
        </div>
        </>
    )
}