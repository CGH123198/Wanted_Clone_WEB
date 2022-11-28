import './languageSelect.scss';

const LanguageSelect = () => {
    return (
        <div className="lang-select">
            <img src="https://static.wanted.co.kr/images/userweb/ico_KR.svg" alt="country flag KR"></img>
            <select>
                <option value="KR">한국 (한국어)</option>
                <option value="JP">日本 (日本語)</option>
                <option value="WW">Worldwide (English)</option>
                <option value="SG">Singapore (English)</option>
            </select>
            <i className="icon-arrow"></i>
        </div>
    )
}

export default LanguageSelect;