import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DetailsTable from "../components/DetailsTable";
import Button from 'react-bootstrap/Button';
const Details = () => {

    const URL = "https://ms-95-cars-backend-apex.herokuapp.com/cars/";
    const navigate = useNavigate();
    const [carDetail, setCarDetail] = useState("")
    const { carId } = useParams();
    console.log("CARID", carId)
    const getCarDetail = async () => {
        const data = await fetch(URL + `${carId}`).then(res => res.json())
        console.log("DATA", data)
        setCarDetail(data)
    }

    const handleDelete = async () => {
        console.log("Inside Handle Delete")
        await fetch(URL + `${carDetail[0].carId}`, {
            method: "DELETE",
        })
        navigate("/")
    }



    useEffect(() => {
        getCarDetail()
    }, [])
    return (
        <div>
            {carDetail && carDetail[0] && <Row className="car-detail">
                <Col md={6}>
                    <div>
                        <img style={{
                            height: '450px',
                            width: '100%',
                            padding: '10px',
                            borderRadius: '14px'
                        }} src={carDetail[0].img} />
                    </div>
                </Col>
                <Col style={{
                    padding: '10px',
                    marginTop: '8px'
                }}>
                    <DetailsTable carDetail={carDetail[0]} />
                    <Row>
                        <Col>
                            <Link style={{ color: 'black', fontStyle: 'italic' }}
                                onClick={handleDelete}>
                                <Button variant="primary" type="submit" style={{
                                    alignItems: 'center', margin: 'auto', background: 'black', border: 'black'
                                }} >
                                    Delete
                                </Button>
                            </Link>
                        </Col>
                        <Col>
                            <Link to={`/update/${carDetail[0].carId}`} style={{ color: 'black', fontStyle: 'italic', float: 'right' }}>
                                <Button variant="primary" type="submit" style={{
                                    alignItems: 'center', margin: 'auto', background: 'black', width: '70px', border: 'black'
                                }} >
                                    Edit
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12}>
                    <div style={{ textAlign: 'center' }}>
                        <Link to='/' style={{ color: 'black', fontWeight: 'bold' }}>
                            Back to Home Page
                        </Link>

                    </div>
                </Col>
            </Row>}



        </div>
    );
}

export default Details;