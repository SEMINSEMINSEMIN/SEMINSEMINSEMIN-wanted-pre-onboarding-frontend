import { useState, useEffect } from "react";
import ListItem from "../ListItem/ListItem";

const useListRender = () => {
    const [list, setList] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        // 렌더링 테스트용
        setList([
            {
                id: 1,
                todo: "밥먹기",
                isCompleted: true,
                userId: 1,
            },
            {
                id: 2,
                todo: "잠자기",
                isCompleted: false,
                userId: 1,
            },
            {
                id: 3,
                todo: "졸업 인증제 - 컴퓨터 활용 능력 2급, 토익 850 이상. 6월 중에 학교에 제출하고, 졸업복 신청해서 사진 찍으러 가기",
                isCompleted: false,
                userId: 1,
            },
        ]);
    }, []);

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

    return { items };
};

export default useListRender;
