import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Base URL and endpoints
    const apiBaseUrl = 'https://api.bharatparcel.org';
    const loginEndpoint = '/user/login';
    const logoutEndpoint = '/user/logout';
    const createUserEndpoint = '/user/acc/create';

    // Function to fetch login data
    const loginFetchData = async (username, password) => {
        try {
            setLoading(true);
            const response = await axios.post(`${apiBaseUrl}${loginEndpoint}`, { username, password });
            setData(response.data);
            return response.data;
        } catch (error) {
            setError(error);
            return null;
        } finally {
            setLoading(false);
        }
    };

    // Function to handle logout
    const logoutFetchData = async () => {
        try {
            setLoading(true);
            await axios.delete(`${apiBaseUrl}${logoutEndpoint}`);
            setData(null);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    // Function to create a new user
    const createUser = async (firstName, middleName, lastName, mobile, email, password) => {
        try {
            setLoading(true);
            const response = await axios.post(`${apiBaseUrl}${createUserEndpoint}`, {
                firstName,
                middleName,
                lastName,
                mobile,
                email,
                password,
            });
            setData(response.data);
            return response.data;
        } catch (error) {
            setError(error);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return (
        <ApiContext.Provider value={{ data, loading, error, loginFetchData, logoutFetchData, createUser }}>
            {children}
        </ApiContext.Provider>
    );
};

// Custom hook to use the API context
export const useApi = () => {
    return useContext(ApiContext);
};
