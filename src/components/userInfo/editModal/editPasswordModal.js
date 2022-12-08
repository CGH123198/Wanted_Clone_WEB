import './editModal.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { patchPassword } from '../../../store/actions/userInfo'

import PasswordInput from '../../auth/validationInput/passwordInput';

const EditPasswordModal = ({isOpenModal, auth}) => {
    const [currentPw, setCurrentPw] = useState("");
    const [newPw, setNewPw] = useState("");
    const [pwEnd, setPwEnd] = useState(false);
    const dispatch = useDispatch();

    const isPasswordEnd = (valid) => {
        setPwEnd(valid);
    }

    const onChangeCurrentPw = (e) => {
        setCurrentPw(e.target.value);
    }

    const getNewPw = (e) => {
        setNewPw(e.target.value);
    }

    const onSubmit = e => {
        dispatch(patchPassword(auth.jwt, auth.userId, currentPw, newPw));
    }

    return (
        <div className="edit-modal-container" >
            <div className="edit-modal-window">
                <div className="edit-modal-window-header">
                    <div className="edit-modal-window-header-left"></div>
                    <div className="edit-modal-window-header-center">
                        <p>비밀번호 변경</p>
                    </div>
                    <div className='edit-modal-window-header-right'>
                        <button type="button" onClick={isOpenModal}><span ><svg width="20" height="20" viewBox="0 0 24 24" ><path d="M17.97 19.03a.749.749 0 1 0 1.06-1.06l-6.5-6.5a.749.749 0 0 0-1.06 0l-6.5 6.5a.749.749 0 1 0 1.06 1.06L12 13.06l5.97 5.97zM12 10.94 6.03 4.97a.749.749 0 1 0-1.06 1.06l6.5 6.5a.749.749 0 0 0 1.06 0l6.5-6.5a.749.749 0 1 0-1.06-1.06L12 10.94z"></path></svg></span></button>
                    </div>
                </div>
                <div className="edit-modal-window-form">
                    <form onSubmit={onSubmit}>
                        <div className="edit-modal-title">
                            <label htmlFor="email">현재 비밀번호</label>
                        </div>
                        <input 
                            className="my-password-input" 
                            type="password" 
                            placeholder="비밀번호를 입력해주세요." 
                            name="oldPassword" 
                            onChange={onChangeCurrentPw}
                            value={currentPw}
                        />
                        <div className="edit-modal-title">
                            <label htmlFor="email">새 비밀번호</label>
                        </div>
                        <PasswordInput isPasswordEnd={isPasswordEnd} getNewPw={getNewPw} />
                        <div className="edit-modal-window-form-button">
                            <button type="button" onClick={isOpenModal}>
                                <span>취소</span>
                            </button>
                            {
                                pwEnd ?
                                <button type="submit">
                                    <span>저장</span>
                                </button> :
                                <button type="submit" disabled>
                                    <span>저장</span>
                                </button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditPasswordModal;