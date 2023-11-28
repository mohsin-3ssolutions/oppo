import moment from 'moment';
import { toast } from 'react-toastify';

import { fetchUserProfileDetails } from './store/userProfileSlice/userProfileSlice';

const baseURL = process.env.REACT_APP_BASE_URL || 'here_should_be_base_url';
const emailPatternValidator = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const userRoles = { // 'owner', 'general_contractor', 'sub_contractor'
    owner: 'owner',
    generalContractor: 'general_contractor',
    subContractor: 'sub_contractor',
}

const userStatus = {
    trail: 'ON_TRIAL',
    trailExpired: 'TRIAL_EXPIRED',
    subscribed: 'SUBSCRIBED',
    newUser: 'NEW',
}

const getUserStatus = (data) => {
    let subscriptionStatus = null;
    if (data.stripe_customer_id?.length && data.stripe_subscription_id?.length) {
        subscriptionStatus = userStatus.subscribed;
    } else if (data.is_trial == "1" && moment(data.trial_start_data).utc().format() > moment().subtract(14, 'days').utc().format()) {
        subscriptionStatus = userStatus.trail;
    } else if (data.is_trial == "0") {
        subscriptionStatus = userStatus.newUser;
    } else if (moment(data.trial_start_data).utc().format() < moment().subtract(14, 'days').utc().format()) {
        subscriptionStatus = userStatus.trailExpired;
    } else {
        subscriptionStatus = userStatus.subscribed;
    }
    return subscriptionStatus;
    // return userStatus.trailExpired;
};

const verifyAuthToken = () => async (dispatch) => { // Use Redux Thunk
    const token = localStorage.getItem('authToken');

    if (token) {
        try {
            // toast.success('Authentication!', { autoClose: 3000 });
            const response = await fetch(`${baseURL}/user_profile`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error(`Authentication Error: ${response.status}`);
            }

            const data = await response.json();
            dispatch(fetchUserProfileDetails({
                ...data,
                data: {
                    ...data.data,
                    // created_at: moment(data.data.created_at).format(),
                    status: getUserStatus(data.data)
                }
            })); // Dispatch the action with data payload

        } catch (error) {
            console.error('Authentication Error:', error);
            toast.error('Authentication Error', { autoClose: 3000 });
        }
    }
};


export const LoadingLayout = () => {
    return (
        <>
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    );
};

export default LoadingLayout;


export { emailPatternValidator, verifyAuthToken, userStatus, userRoles };