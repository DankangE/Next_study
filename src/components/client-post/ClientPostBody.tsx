"use client";

import React from "react";
import { Typography, Divider, List, Avatar } from "antd";
import { Comment } from "@ant-design/compatible";

const { Paragraph } = Typography;

interface ClientPostBodyProps {
  content: string;
  comments: { author: string; avatar: string; content: string; date: string }[];
}

const { Title } = Typography;

const ClientPostBody: React.FC<ClientPostBodyProps> = ({
  content,
  comments,
}) => (
  <>
    <Paragraph>{content}</Paragraph>
    <Divider />
    <Title level={4}>댓글</Title>
    <List
      itemLayout="horizontal"
      dataSource={comments}
      renderItem={(item) => (
        <Comment
          author={item.author}
          avatar={<Avatar src={item.avatar} />}
          content={item.content}
          datetime={item.date}
        />
      )}
    />
  </>
);

export default ClientPostBody;
