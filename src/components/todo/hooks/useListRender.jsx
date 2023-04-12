import { useState, useEffect, useContext, useCallback } from "react";
import ListItem from "../ListItem/ListItem";
import useHttp from "../../../hooks/use-http";
import AuthContext from "../../../context/AuthContext";

const useListRender = () => {
    const [list, setList] = useState([]);
    const [items, setItems] = useState([]);

    const ctx = useContext(AuthContext);
    const { isLoggedIn: token } = ctx;

    const sendRequest = useHttp();

    useEffect(() => {
        const reqConfig = {
            method: "GET", 
            URL: "/todos",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

        const handleListGet = (res) => {
            setList(res.data);
        };

        const handleListGetErr = (err) => {
            console.log(err);
        };

        sendRequest(reqConfig, handleListGet, handleListGetErr);
    }, [sendRequest, token]);

    useEffect(() => {
        setItems(() => list.map((e) => (
            <ListItem
                key={e.id}
                isCompleted={e.isCompleted}
                todo={e.todo}
                inpId={e.id}
            />
        )));
    }, [list]);

    const listUpdate = useCallback((newItem) => {
        setList((prev) => [
            ...prev,
             newItem
        ]);
    }, []);

    return { items, listUpdate };
};

export default useListRender;
