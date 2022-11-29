import styled from 'styled-components';
import CategoryNav from '../../components/wdList/categoryNav/categoryNav';

const WdListWrap = styled.div`
    background-color: #fff;
    min-height: calc(100vh - 50px);
`;


const WdListPage = () => {
    return (
        <WdListWrap>
            <CategoryNav />
        </WdListWrap>
    )
}

export default WdListPage;