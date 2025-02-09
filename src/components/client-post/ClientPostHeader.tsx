"use client";

import React from "react";
import { Typography, Space, Avatar } from "antd";

const { Title, Text } = Typography;

interface ClientPostHeaderProps {
  title: string;
  author: string;
  date: string;
  avatar: string;
}

const ClientPostHeader: React.FC<ClientPostHeaderProps> = ({
  title,
  author,
  date,
  avatar,
}) => (
  <>
    <Title level={2}>{title}</Title>
    <Space>
      <Avatar src={avatar} />
      <Text>{author}</Text>
      <Text type="secondary">{date}</Text>
    </Space>
    <hr />
  </>
);

// ClientPostHeader.defaultProps = {
//   title: "제목 없음",
//   author: "익명",
//   date: "날짜 없음",
//   avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=default",
// };

export default ClientPostHeader;
