import ValidationInput from "../validationInput/validationInput";

const PasswordForm = ({ onSubmit, navigate }) => {
    return (
        <div className="modal-window">
            <div className="modal-header">
                <div className="modal-header-left" onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
                    <svg viewBox="0 0 18 18" width="20" height="20"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg>
                </div>
                <div className="modal-header-center">
                    <p>
                        이메일로 로그인
                    </p>
                </div>
                <div className="modal-header-right"></div>
            </div>
            <div className="modal-body">
                <form onSubmit={onSubmit} >
                    <div className="email-label">
                        <label htmlFor="password">
                            비밀번호
                        </label>
                    </div>
                    <ValidationInput id="password" type="password" />
                </form>
            </div>
        </div>
    )
}

export default PasswordForm;