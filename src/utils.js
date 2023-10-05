import { toast } from 'react-toastify';

const baseURL = process.env.REACT_APP_BASE_URL || 'here_should_be_base_url';

const emailPatternValidator = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const verifyAuthToken = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
        toast.success('Authentication!', { autoClose: 3000 });
        // var myHeaders = new Headers();
        // myHeaders.append("Authorization",`Bearer ${token}`);
        // myHeaders.append('Content-Type', 'application/json');

        fetch(`${baseURL}/user_profile`, {
            method: 'GET',
            // headers: myHeaders
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }).then((res) => res.json())
        .then((data) => {
            console.log({data});
        }).catch((err) => {
            console.log({err});
            throw new Error("Authentication Error ::: ", err);
        })
      // Return true if valid, false otherwise
    }
    return false; // No token found
}

export { emailPatternValidator, verifyAuthToken };