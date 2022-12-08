import './resumeRegist.scss';

const ResumeRegist = ({ school }) => {
    return (
        <div className="resume-basic-form">
            <header className="resume-header">
                <dl>
                    <dt>기본 이력서</dt>
                </dl>
            </header>
            <div className="resume-form-block">
                <div className='resume-form-block-content'>
                    <div className="main-fieldset">
                        <div className='school-fieldset'>
                            <div className="static-label">학교</div>
                            <div className='static-body'>
                                <div className="resume-entry">
                                    {
                                        school &&
                                        <div className='resume-entry-major'>{school}</div>
                                    }
                                    {
                                        !school &&
                                        <div className="resume-entry-empty">학교 미입력</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeRegist;