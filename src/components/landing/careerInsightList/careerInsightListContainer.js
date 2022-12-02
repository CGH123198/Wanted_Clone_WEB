import CareerInsightList from "./careerInsightList";
import data from '../careerInsightContent/careerInsightData.json';

const CareerInsightListContainer = () => {
    return(
        <CareerInsightList careerData={data}/>
    )
}

export default CareerInsightListContainer;