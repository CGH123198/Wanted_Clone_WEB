import AccountManagementSection from "./accountManagementSection"

const AccountManagementSectionContainer = ({user, auth}) => {
    return (
        <AccountManagementSection user={user} auth={auth}/>
    )
}

export default AccountManagementSectionContainer;