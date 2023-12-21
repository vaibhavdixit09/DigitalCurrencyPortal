import React from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Card,
  CardBody,
} from 'reactstrap'

const RegisterForm = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="mt-4">
            <CardBody style={{ backgroundColor: '#eee0fc' }}>
              <h2 className="mb-4">Reset Password</h2>
              <Form>
                <FormGroup>
                  <Label for="CurrPass">Current Password</Label>
                  <Input
                    style={{ backgroundColor: '#5432797b' }}
                    type="text"
                    name="Current Password"
                    id="CurrPass"
                    placeholder="Enter Current Password"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="NewPass">New Password</Label>
                  <Input
                    style={{ backgroundColor: '#5432797b' }}
                    type="text"
                    name="New Password"
                    id="NewPass"
                    placeholder="Enter New Password"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="NewPass2">New Password</Label>
                  <Input
                    style={{ backgroundColor: '#5432797b' }}
                    type="text"
                    name="New Password"
                    id="NewPass2"
                    placeholder="Enter New Password"
                  />
                </FormGroup>
                <div className="text-center mt-4">
                  <Button
                    className="px-4 py-2"
                    style={{ backgroundColor: '#543279', color: 'white' }}
                  >
                    Reset
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterForm
