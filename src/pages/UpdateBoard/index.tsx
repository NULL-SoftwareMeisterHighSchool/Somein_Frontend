import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import * as S from "./style";
import { getboardDetail, putWrite } from "@apis/article";
import { alertError, alertSuccess } from "@utils/toastify";
import Toast from "@components/pages/WriteBoard/Toast";
import { useLocation, useNavigate } from "react-router-dom";
import { getCookie } from "@utils/cookies";

const UpdateBoard = () => {
    const { search } = useLocation();
    const id = search.split(/[=,&]/)[1];
    const [title, setTitle] = useState("");
    const [articleType, setArticleType] = useState("GENERAL");
    const [content, setContent] = useState("");
    const [content2, setContent2] = useState("");
    const navigate = useNavigate();
    const { mutate: putwriteMutate } = useMutation(putWrite, {
        onSuccess: () => {
            alertSuccess("글 수정에 성공했습니다.");
            navigate("/");
        },
        onError: () => {
            alertError("글 수정에 실패했습니다.");
        },
    });

    const { refetch } = useQuery("getUpdate", () => getboardDetail(id), {
        onSuccess: (res) => {
            setTitle(res.data.title);
            setArticleType(res.data.articleType);
            setContent(res.data.body);
        },
        onError: () => {
            console.log("Error");
        },
        enabled: false,
    });

    useEffect(() => {
        refetch();
    }, []);

    const refreshCookie = getCookie("refreshToken")

    useEffect(() => {
        if (!refreshCookie) {
            alertError("로그인 후 이용 가능합니다.");
            navigate("/login");
        }
    }, []);

    return (
        <>
            <S.Header>
                <S.STitle>
                    {articleType == "GENERAL"
                        ? "게시판 글쓰기"
                        : "기술 블로그 글쓰기"}
                </S.STitle>
                <S.Post
                    onClick={() => {
                        putwriteMutate({ id, title, content2 });
                    }}
                >
                    글 수정하기
                </S.Post>
            </S.Header>
            <S.TitleInput
                placeholder="제목을 입력해주세요"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setTitle(e.target.value)
                }
            />
            <Toast content={content} setContent2={setContent2} />
        </>
    );
};

export default UpdateBoard;
