"use client";

import { useEffect, useState } from "react";
import BaseContainer from "../../layouts/BaseContainer";
import ClientPostHeader from "./ClientPostHeader";
import ClientPostBody from "./ClientPostBody";

interface Comment {
  author: string;
  avatar: string;
  content: string;
  date: string;
}

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  avatar: string;
  content: string;
  comments: Comment[];
}

interface PostPageProps {
  pathname?: string;
}

export default function PostContentPage(props: PostPageProps) {
  const [post, setPost] = useState<Post>({
    id: 0,
    title: "",
    author: "",
    date: "",
    avatar: "",
    content: "",
    comments: [],
  });

  useEffect(() => {
    const postData = {
      id: 1,
      title: "게시글 제목 예제",
      author: "홍길동",
      date: "2024-02-01",
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=홍길동",
      content: "이것은 게시글 본문입니다. Markdown 형식도 지원할 수 있습니다.",
      comments: [
        {
          author: "김철수",
          avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=김철수",
          content: "좋은 글 감사합니다!",
          date: "2024-02-02",
        },
      ],
    };

    setPost(postData);
  }, []);

  return (
    <BaseContainer pathname={props.pathname}>
      <>
        <ClientPostHeader
          title={post.title}
          author={post.author}
          date={post.date}
          avatar={post.avatar}
        />
        <ClientPostBody content={post.content} comments={post.comments} />
      </>
    </BaseContainer>
  );
}
