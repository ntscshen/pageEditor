import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { Card } from "antd";
const { Meta } = Card;

export interface Template {
  id: number;
  src: string;
  name: string;
  author: string;
  userNumber: number;
  created: number;
}
export interface TemplateListProps {
  list: Template[];
}

const TemplateList = ({ list }: TemplateListProps) => {
  return (
    <CardWrap>
      {list.map((template) => {
        return (
          <CCardWrap key={template.id}>
            <Link to={`/template/${template.id}`}>
              <CCard
                hoverable
                cover={<img alt={template.name} src={template.src} />}
                actions={[
                  <div>作者: {template.author}</div>,
                  <div>人数: {template.userNumber}</div>,
                ]}
              >
                <Meta title={template.name} />
              </CCard>
            </Link>
          </CCardWrap>
        );
      })}
    </CardWrap>
  );
};

export default TemplateList;

const CardWrap = styled.div`
  margin-top: 20px;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

const CCardWrap = styled.div`
  width: 25%;
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 20px;
`;

const CCard = styled(Card)`
  position: relative;
  width: 100%;
`;
