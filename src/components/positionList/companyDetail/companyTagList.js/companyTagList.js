import { Link } from 'react-router-dom';

const CompanyTagList = ({data}) => {
    return (
        <div className="tags-tag-array-list">
            <h3>태그</h3>
            <ul>
                {
                    data &&
                    data.tag.map( (elem, idx) => {
                        return (
                            <li key={idx}>
                                <Link to="#">{`#${elem}`}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default CompanyTagList;