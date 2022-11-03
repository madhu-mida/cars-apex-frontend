import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
const CreateCar = ({ mode }) => {
    const URL = "https://ms-95-cars-backend-apex.herokuapp.com/cars/";
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [details, setDetails] = useState({
        make: "",
        model: "",
        package: "",
        color: "",
        year: "",
        category: "",
        mileage: "",
        price: "",
        carId: new Date().getTime(),
        img: "",

    });

    const handleChange = (event) => {
        console.log("fghsavdbnchjgk")
        console.log(event.target.name, event.target.value)
        setDetails({ ...details, [event.target.name]: event.target.value });
    };

    const createCar = async (details) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(details),
        })
        console.log(navigate)
        navigate("/")

    }

    const handleUpdate = async () => {
        await fetch(URL + `${details.carId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(details),
        })

        navigate("/")
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {

            console.log("INSIDE HANDLE SUBMIT")

            console.log(details)
            mode === 'create' ? createCar(details) : handleUpdate(details)
        }
    }

    const { carId } = useParams();

    const getCarDetail = async () => {
        const data = await fetch(URL + `${carId}`).then(res => res.json())
        console.log("DATA", data)
        setDetails(data[0])
    }

    useEffect(() => {
        if (mode === 'update') {
            getCarDetail()
        }
    }, [])

    return (
        <div style={{
            padding: '30px', width: '60%',
            //alignItems: 'center',
            margin: 'auto'
        }}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label className='form-label'>Make</Form.Label>
                    <InputGroup hasValidation>

                        <Form.Control type="text" controlId="validationCustom01" placeholder="Enter Make" name="make" value={details.make} onChange={handleChange} required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid car
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Model</Form.Label>
                    <Form.Control type="text" controlId="validationCustom02" placeholder="Enter Model" name="model" value={details.model} onChange={handleChange} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Model
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Package</Form.Label>
                    <Form.Control type="text" controlId="validationCustom03" placeholder="Enter Package" name="package" value={details.package} onChange={handleChange} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid package
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Color</Form.Label>
                    <Form.Control type="text" controlId="validationCustom04" placeholder="Enter Color" name="color" value={details.color} onChange={handleChange} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Color
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="number" controlId="validationCustom05" placeholder="Enter Year" name="year" value={details.year} onChange={handleChange} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Year
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" controlId="validationCustom06" placeholder="Enter Category" name="category" value={details.category} onChange={handleChange} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Category
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mileage(mi)</Form.Label>
                    <Form.Control type="number" controlId="validationCustom07" placeholder="Enter Mileage" name="mileage" value={details.mileage} onChange={handleChange} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Mileage
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price(cents)</Form.Label>
                    <Form.Control type="number" controlId="validationCustom08" placeholder="Enter Price" name="price" value={details.price} onChange={handleChange} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid price
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Car ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter Car ID" name="carId" value={details.carId} onChange={handleChange} disabled />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" controlId="validationCustom09" placeholder="Enter Image URL" name="img" value={details.img} onChange={handleChange} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Image URL
                    </Form.Control.Feedback>
                </Form.Group>

                <Row>
                    <Col>
                        <Link to='/' style={{ color: 'black', fontStyle: 'italic' }}>
                            <Button variant="primary" type="submit" style={{
                                alignItems: 'center', margin: 'auto', background: 'black'
                            }} >
                                Cancel
                            </Button>
                        </Link>

                    </Col>
                    <Col>
                        <Button variant="primary" type="submit" style={{
                            alignItems: 'center', margin: 'auto', float: 'right', background: 'black'
                        }}>
                            {mode === 'create' ? 'Submit' : 'Update'}
                        </Button>


                    </Col>
                </Row>
            </Form>
        </div >
    );
}

export default CreateCar;