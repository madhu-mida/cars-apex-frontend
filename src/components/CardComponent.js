import { CCard, CCardImage, CCardText, CCardBody } from "@coreui/react";
import { Link } from "react-router-dom";

const CardComponent = ({ element }) => {
    return (
        <>
            <CCard data-testid={element.carId} style={{
                width: '18rem', border: 'None', marginRight: 'auto',
                marginLeft: 'auto'
            }}>
                <Link style={{ textDecoration: "none" }} to={`/${element.carId}`}>
                    <CCardImage orientation="top" src={element.img ? element.img : 'https://mrsldna.org/wp-content/uploads/2019/03/product-placeholder.gif'} style={{ height: '162px', width: '288px' }} />
                </Link>
                <CCardBody style={{ textAlign: 'center' }}>
                    <CCardText>
                        <Link style={{ textDecoration: "none", color: 'black' }} to={`/${element.carId}`}>
                            <p data-testid={`name-${element.carId}`} >{element.make}-{element.model}</p>
                        </Link>

                        <p data-testid={`price-${element.carId}`}>$ {element.price}</p>
                    </CCardText>
                </CCardBody>
            </CCard>
        </>
    )
}

export default CardComponent;