import { useCallback } from "react";
import axios from "axios";

const useHttp = () => {
    const sendRequest = useCallback(async (requestConfig, responseHandler, errorHandler) => {
        try {
            const response = await axios({
                method: requestConfig.method ? requestConfig.method : "GET",
                url: `https://www.pre-onboarding-selection-task.shop${requestConfig.URL}`,
                data: requestConfig.data ? requestConfig.data : {},
                headers: requestConfig.headers ? requestConfig.headers : {}
            });

            responseHandler && responseHandler(response);
        } catch (err) {
            errorHandler && errorHandler(err);
        }
    }, []);

    return sendRequest;
};

export default useHttp;