import AdditionalInfoBody from "./additionalInfoBody";
import { useSelector } from 'react-redux';

const AdditionalInfoBodyContainer = () => {
    const { user } = useSelector( ({user}) => ({
        user: user.user
    }))

    return (
        <AdditionalInfoBody user={user}/>
    )
}

export default AdditionalInfoBodyContainer;