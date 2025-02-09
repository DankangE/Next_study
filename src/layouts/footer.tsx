"use client";

import styled from "styled-components";
import Image from "next/image";
import { FaFacebook, FaDiscord, FaYoutube } from "react-icons/fa";
import profileImg from "../../public/images/단강프로필.png"; // 이미지 경로는 실제 위치에 맞게 조정해주세요

// background-color: #2b2d36;
// color: white;
const FooterContainer = styled.footer`
  padding: 2rem 1rem;
  width: 100%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const CompanyInfo = styled.div`
  margin-bottom: 2rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;

  .image-container {
    position: relative;
    width: 30px;
    height: 30px;
  }

  .logo-text {
    font-size: 20px;
    font-family: Gungsuh, "궁서체", serif; // 궁서체 적용
  }
`;

const InfoText = styled.div`
  font-size: 0.875rem;
  line-height: 1.6;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactItem = styled.p`
  font-size: 0.875rem;
  margin: 0.5rem 0;

  span {
    color: white;
  }
`;

const GreenContact = styled(ContactItem)`
  span {
    color: #4cd964;
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
  border-top: 1px solid #404040;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  a {
    color: #a0a0a0;
    text-decoration: none;
    font-size: 0.875rem;

    &:hover {
      color: white;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #a0a0a0;

    &:hover {
      color: white;
    }
  }
`;

const Copyright = styled.div`
  text-align: right;
  margin-top: 1.5rem;
  color: #a0a0a0;
  font-size: 0.875rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <CompanyInfo>
          <LogoContainer>
            <div className="image-container">
              <Image
                src={profileImg}
                alt="Dankang"
                width={30}
                height={30}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <span className="logo-text">Yo Dankang</span>
          </LogoContainer>
          <InfoText>
            <p>대표이사 남찬호</p>
            <p>사업자등록번호 117-46-11954</p>
            <p>주소 (11029) 경기도 남양주시 별내동 덕송3로 7</p>
          </InfoText>
        </CompanyInfo>

        <ContactGrid>
          <div>
            <ContactItem>
              이메일 <span>dankang01@gmail.com</span>
            </ContactItem>
            <ContactItem>
              대표번호 <span>031-1004-8282</span>
            </ContactItem>
            <ContactItem>
              IR문의 <span>031-4000-8000</span>
            </ContactItem>
          </div>
          <div>
            <GreenContact>
              기술문의 <span>1588-1588</span>
            </GreenContact>
            <GreenContact>
              교육문의 <span>031-9696-5252</span>
            </GreenContact>
            <ContactItem>
              완격지원 또는 전화상담 <span>9:00~17:00</span>
            </ContactItem>
          </div>
        </ContactGrid>

        <BottomSection>
          <Links>
            <a href="#">제품문의</a>
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
          </Links>

          <SocialLinks>
            <a href="#">
              <FaFacebook size={20} />
            </a>
            <a href="#">
              <FaDiscord size={20} />
            </a>
            <a href="#">
              <FaYoutube size={20} />
            </a>
          </SocialLinks>
        </BottomSection>

        <Copyright>
          Copyright Dankang Compony Co.,Ltd. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
}
