import { render, screen, cleanup } from "@testing-library/react"
import CardComponent from "../CardComponent";
import { BrowserRouter as Router } from 'react-router-dom';
import DetailsTable from "../DetailsTable";
const car = {
    "make": "Ford", "model": "F10", "package": "Base", "color": "Silver", "year": 2010, "category": "Truck", "mileage": 120123, "price": 1999900, "carId": "JHk290Xj", "img": "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/f-150lightning/2022/collections/_360/atlas-blue-metallic/p702bevplt_22_atlasbluemetallic_1.jpg"
}
test('should render card component', () => {

    render(<Router><CardComponent element={car} /></Router>);
    const cardElement = screen.getByTestId('JHk290Xj');
    expect(cardElement).toBeInTheDocument();
    const cardNameElement = screen.getByTestId('name-JHk290Xj');
    const cardPriceElement = screen.getByTestId('price-JHk290Xj');
    expect(cardNameElement).toBeInTheDocument();
    expect(cardPriceElement).toBeInTheDocument();
    expect(cardNameElement).toHaveTextContent('Ford-F10')
    expect(cardPriceElement).toHaveTextContent('$ 1999900')
})

test('should render details table component', () => {

    render(<Router><DetailsTable carDetail={car} /></Router>);
    const tableElement = screen.getByTestId('table-JHk290Xj');
    expect(tableElement).toBeInTheDocument();
    const tableMakeElement = screen.getByTestId('make-JHk290Xj');
    const tableModelElement = screen.getByTestId('model-JHk290Xj');
    const tablePackageElement = screen.getByTestId('package-JHk290Xj');
    const tableColorElement = screen.getByTestId('color-JHk290Xj');
    const tableYearElement = screen.getByTestId('year-JHk290Xj');
    const tableCategoryElement = screen.getByTestId('category-JHk290Xj');
    const tableMileageElement = screen.getByTestId('mileage-JHk290Xj');
    const tablePriceElement = screen.getByTestId('price-JHk290Xj');
    const tableCarIdElement = screen.getByTestId('carId-JHk290Xj');


    expect(tableMakeElement).toBeInTheDocument();
    expect(tableModelElement).toBeInTheDocument();
    expect(tablePackageElement).toBeInTheDocument();
    expect(tableColorElement).toBeInTheDocument();
    expect(tableYearElement).toBeInTheDocument();
    expect(tableCategoryElement).toBeInTheDocument();
    expect(tableMileageElement).toBeInTheDocument();
    expect(tablePriceElement).toBeInTheDocument();
    expect(tableCarIdElement).toBeInTheDocument();
    expect(tableMakeElement).toHaveTextContent('Ford')
    expect(tableModelElement).toHaveTextContent('F10')
    expect(tablePackageElement).toHaveTextContent('Base')
    expect(tableColorElement).toHaveTextContent('Silver')
    expect(tableYearElement).toHaveTextContent('2010')
    expect(tableCategoryElement).toHaveTextContent('Truck')
    expect(tableMileageElement).toHaveTextContent('120123')
    expect(tablePriceElement).toHaveTextContent('1999900')
    expect(tableCarIdElement).toHaveTextContent('JHk290Xj')

})

