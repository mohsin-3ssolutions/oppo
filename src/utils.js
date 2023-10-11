// verifyAuthToken.js
import { toast } from 'react-toastify';
import { fetchUserProfileDetails } from './store/userProfileSlice/userProfileSlice';

const baseURL = process.env.REACT_APP_BASE_URL || 'here_should_be_base_url';

const emailPatternValidator = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

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
            dispatch(fetchUserProfileDetails(data)); // Dispatch the action with data payload
        } catch (error) {
            console.error('Authentication Error:', error);
            toast.error('Authentication Error', { autoClose: 3000 });
        }
    }
};

export { emailPatternValidator, verifyAuthToken };