import Table from 'react-bootstrap/Table';
const DetailsTable = ({ carDetail }) => {
    return (
        <>
            {carDetail && <Table striped bordered hover data-testid={`table-${carDetail.carId}`}>
                <tbody>
                    <tr>
                        <td>Make</td>
                        <td data-testid={`make-${carDetail.carId}`} >{carDetail.make}</td>
                    </tr>
                    <tr >
                        <td>Model</td>
                        <td data-testid={`model-${carDetail.carId}`}>{carDetail.model}</td>

                    </tr>
                    <tr>
                        <td>Package</td>
                        <td data-testid={`package-${carDetail.carId}`}>{carDetail.package}</td>

                    </tr>
                    <tr>
                        <td>Color</td>
                        <td data-testid={`color-${carDetail.carId}`}>{carDetail.color}</td>

                    </tr>
                    <tr>
                        <td>Year</td>
                        <td data-testid={`year-${carDetail.carId}`}>{carDetail.year}</td>

                    </tr>
                    <tr>
                        <td>Category</td>
                        <td data-testid={`category-${carDetail.carId}`}>{carDetail.category}</td>

                    </tr>
                    <tr>
                        <td>Mileage</td>
                        <td data-testid={`mileage-${carDetail.carId}`}>{carDetail.mileage}</td>

                    </tr>
                    <tr>
                        <td>Price</td>
                        <td data-testid={`price-${carDetail.carId}`}>{carDetail.price}</td>

                    </tr>
                    <tr>
                        <td>CarID</td>
                        <td data-testid={`carId-${carDetail.carId}`}>{carDetail.carId}</td>

                    </tr>
                </tbody>
            </Table>}

        </>
    );
}

export default DetailsTable;