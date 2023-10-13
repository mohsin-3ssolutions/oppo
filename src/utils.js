import moment from 'moment';
import { toast } from 'react-toastify';

import { fetchUserProfileDetails } from './store/userProfileSlice/userProfileSlice';

const baseURL = process.env.REACT_APP_BASE_URL || 'here_should_be_base_url';
const emailPatternValidator = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const userStatus = {
    trail: 'ON_TRIAL',
    trailExpired: 'TRIAL_EXPIRED',
    subscribed: 'SUBSCRIBED'
}

const getUserStatus = (data) => {
    let subscriptionStatus = userStatus.trailExpired;
    if (data.stripe_customer_id?.length && data.stripe_subscription_id?.length) {
        subscriptionStatus = userStatus.subscribed;
    } else if (moment(data.created_at).utc().format() > moment(data.created_at).subtract(14, 'days').utc().format()) {
        subscriptionStatus = userStatus.trail;
    } else {
        subscriptionStatus = userStatus.trailExpired;
    }

    // return subscriptionStatus;
    return userStatus.trailExpired;
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
            console.log({ data });
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

export { emailPatternValidator, verifyAuthToken, userStatus };