"use client";

import BaseContainer from "../../layouts/BaseContainer";
import ClientPostListHeader from "./ClientPostListHeader";
import ClientPostListBody from "./ClientPostListBody";

interface PostPageProps {
  pathname?: string;
}

export default function PostListContentPage(props: PostPageProps) {
  return (
    <BaseContainer pathname={props.pathname}>
      <>
        <ClientPostListHeader />
        <ClientPostListBody />
      </>
    </BaseContainer>
  );
}
