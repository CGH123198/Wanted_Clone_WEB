import ContainerProfile from "../../components/profile/containerProfile/containerProfile";
import BookMarkBodyContainer from "../../components/profile/bookMarkBody/bookMarkBodyContainer";

const BookMarkPage = () => {
    return (
        <div>
            <ContainerProfile title="북마크">
                <BookMarkBodyContainer />
            </ContainerProfile>
        </div>
    )
}

export default BookMarkPage;