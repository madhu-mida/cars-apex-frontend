import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import CardComponent from "../components/CardComponent";
const Home = () => {
    const [cars, setCars] = useState(null);

    const URL = "https://ms-95-cars-backend-apex.herokuapp.com/cars/";

    const getCars = async () => {
        let data = []
        data = await fetch(URL).then(res => res.json())
        console.log(data)
        setCars(data);
    }

    useEffect(() => {
        getCars()
    }, [])
    return (
        <div className="home-page">

            <Row style={{ marginTop: '30px' }} md={4} lg={4}>
                {
                    cars && cars.map((element) => {
                        return (
                            < Col >
                                <CardComponent element={element} />
                            </Col>
                        );
                    })

                }
            </Row>
        </div>
    );
}

export default Home;