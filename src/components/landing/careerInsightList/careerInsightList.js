import CareerInsightContent from "../careerInsightContent/careerInsightContent";
import './careerInsightList.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { getEventByTagIdAddedAction, getEventByTagIdAction } from "../../../store/actions/event";

const CareerInsightList = ({ careerData }) => {
    const [isClicked, setIsClicked] = useState(0);
    const [moreContent, setMoreContent] = useState(false);
    const dispatch = useDispatch();
    const { tagId } = useParams();
    const REST_CONTENT = careerData.length - 4;

    const moreContents = () => {
        if(isClicked === 1) { 
            if(tagId && tagId <=5) {
                dispatch(getEventByTagIdAction(tagId)) 
            } else {
                dispatch(getEventByTagIdAction(0))
            }
        } else if(REST_CONTENT > 0 && isClicked === 0){
            setMoreContent(true);
        }
        setIsClicked(1);
    }
    useEffect( () => {
        setMoreContent(false);
        setIsClicked(0)
    }, [tagId])

    return(
        <div>
            <ul className="career-insight-list">
                {   
                    careerData &&
                    careerData.map( (elem, index) => {
                        if(index < 4) {
                            return (
                                <li className="card-section" key={index}>
                                    <CareerInsightContent data={elem} /> 
                                </li>  
                            )
                        }
                    })
                }
                {
                    moreContent && 
                    careerData.slice(4).map( (elem, index) => {
                        return (
                            <li className="card-section" key={index}>
                                <CareerInsightContent data={elem} /> 
                            </li>  
                        )
                    })
                }
            </ul>
            <div className="career-insight-list-more-content">
                <button type="button" className="career-insight-button" onClick={moreContents}>
                    <span>
                        더 많은 컨텐츠 보기
                        <span>
                            {
                                isClicked === 0 ?
                                    <svg width="16" height="16" viewBox="0 0 19 19"><path d="M2.71967 5.71967C2.98594 5.4534 3.4026 5.4292 3.69621 5.64705L3.78033 5.71967L9.499 11.438L15.2162 5.7211C15.4824 5.45479 15.899 5.43051 16.1927 5.64832L16.2768 5.72092C16.5431 5.98715 16.5674 6.40381 16.3496 6.69745L16.277 6.78158L10.0304 13.0302C9.76416 13.2966 9.34745 13.3208 9.0538 13.103L8.96967 13.0303L2.71967 6.78033C2.42678 6.48744 2.42678 6.01256 2.71967 5.71967Z" fill="currentColor"></path></svg>
                                :
                                    <svg width="16" height="16" viewBox="0 0 19 19"><path d="M13.1626 2.18324C12.9646 1.81941 12.5091 1.68497 12.1453 1.88297L9.1415 3.51761L9.05032 3.57599C8.84573 3.72869 8.73855 3.97138 8.7508 4.21497C8.75027 4.22658 8.75 4.23825 8.75 4.24999C8.75 4.4931 8.86567 4.7092 9.04499 4.84625L10.8472 7.55276L10.9154 7.6405C11.1604 7.91184 11.5737 7.97005 11.8871 7.76134L11.9749 7.69315C12.2462 7.44811 12.3044 7.03482 12.0957 6.72139L11.1089 5.23906C13.3615 5.9271 15 8.0222 15 10.5C15 13.5376 12.5376 16 9.5 16C8.02047 16 6.63595 15.4146 5.61069 14.3893C4.58543 13.364 4 11.9795 4 10.5C4 9.02131 4.58545 7.63672 5.6109 6.61047C5.90367 6.31746 5.90349 5.84259 5.61048 5.54981C5.31747 5.25703 4.8426 5.25722 4.54982 5.55023C3.24615 6.85493 2.5 8.61955 2.5 10.5C2.5 12.3814 3.24621 14.1461 4.55003 15.45C5.85384 16.7538 7.61862 17.5 9.5 17.5C13.366 17.5 16.5 14.366 16.5 10.5C16.5 7.39419 14.4773 4.76082 11.6774 3.84527L12.8623 3.20051L12.9484 3.14585C13.2462 2.92724 13.344 2.51675 13.1626 2.18324Z" fill="currentColor"></path></svg>
                            }
                        </span>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default CareerInsightList;