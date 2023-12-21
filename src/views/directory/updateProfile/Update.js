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
          <Card>
            <CardBody style={{ backgroundColor: '#eee0fc' }}>
              <h2 className="mb-4">Sponsor Info</h2>
              <Form>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="sponsorId">Sponsor ID</Label>
                      <Input
                        style={{ backgroundColor: '#5432797b' }}
                        type="text"
                        name="sponsorId"
                        id="sponsorId"
                        placeholder="Enter Sponsor ID"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="sponsorName">Sponsor Name</Label>
                      <Input
                        style={{ backgroundColor: '#5432797b' }}
                        type="text"
                        name="sponsorName"
                        id="sponsorName"
                        placeholder="Enter Sponsor Name"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
          <Card className="mt-4">
            <CardBody style={{ backgroundColor: '#eee0fc' }}>
              <h2 className="mb-4">Personal Details</h2>
              <Form>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    style={{ backgroundColor: '#5432797b' }}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="country">Country</Label>
                  <Input
                    style={{ backgroundColor: '#5432797b' }}
                    type="text"
                    name="country"
                    id="country"
                    placeholder="Enter Country"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="mobile">Mobile No</Label>
                  <Input
                    style={{ backgroundColor: '#5432797b' }}
                    type="text"
                    name="mobile"
                    id="mobile"
                    placeholder="Enter Mobile No"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    style={{ backgroundColor: '#5432797b' }}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="pan">PAN</Label>
                  <Input
                    style={{ backgroundColor: '#5432797b' }}
                    type="text"
                    name="pan"
                    id="pan"
                    placeholder="Enter PAN"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="adhar">Adhar</Label>
                  <Input
                    style={{ backgroundColor: '#5432797b' }}
                    type="text"
                    name="adhar"
                    id="adhar"
                    placeholder="Enter Adhar"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="walletAddress">BEP Wallet Address</Label>
                  <Input
                    style={{ backgroundColor: '#5432797b' }}
                    type="text"
                    name="walletAddress"
                    id="walletAddress"
                    placeholder="Enter BEP Wallet Address"
                  />
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
          <div className="text-center mt-4">
            <Button className="px-4 py-2" style={{ backgroundColor: '#543279', color: 'white' }}>
              Update Details
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterForm
