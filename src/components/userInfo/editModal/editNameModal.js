import './editModal.scss';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { patchUsername } from '../../../store/actions/userInfo';

const EditNameModal = ({ref, isOpenNameModal, user, auth}) => {
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();
    
    const onChange = (e) => {
        setUserName(e.target.value)
    }

    const onSubmit = (e) => {
        console.log(userName);
        dispatch(patchUsername(auth.jwt, auth.userId, userName));
    }

    useEffect(() => {
        console.log(auth)
        setUserName(user.userName);
    }, [user])

    return (
        <div className="edit-modal-container" >
            <div className="edit-modal-window">
                <div className="edit-modal-window-header">
                    <div className="edit-modal-window-header-left"></div>
                    <div className="edit-modal-window-header-center">
                        <p>이름</p>
                    </div>
                    <div className='edit-modal-window-header-right'>
                        <button type="button" onClick={isOpenNameModal}><span ><svg width="20" height="20" viewBox="0 0 24 24" ><path d="M17.97 19.03a.749.749 0 1 0 1.06-1.06l-6.5-6.5a.749.749 0 0 0-1.06 0l-6.5 6.5a.749.749 0 1 0 1.06 1.06L12 13.06l5.97 5.97zM12 10.94 6.03 4.97a.749.749 0 1 0-1.06 1.06l6.5 6.5a.749.749 0 0 0 1.06 0l6.5-6.5a.749.749 0 1 0-1.06-1.06L12 10.94z"></path></svg></span></button>
                    </div>
                </div>
                <div className="edit-modal-window-form">
                    <form onSubmit={onSubmit}>
                        <div className="edit-modal-window-form-input">
                            <input 
                                type="text" 
                                placeholder="이름을 입력해주세요" 
                                onChange={onChange}
                                value={userName}
                            />
                        </div>
                        <div className="edit-modal-window-form-button">
                            <button type="button">
                                <span>취소</span>
                            </button>
                            <button type="submit">
                                <span>저장</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditNameModal;