import React from 'react'
import styled from 'styled-components'

const DownloadWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:30px;
    padding: 0 16px 52px 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 0 16;
    };
`
// 다운로드 버튼 스타일
const DownloadButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: none;
    width: 200px;
    height: 68px;
    border-radius: 34px;
    border: none;
`
// 다운로드 버튼 이미지 스타일
const DownloadButtonImage = styled.img`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 156px;
        height: 52px;
        border-radius: 26px;
    };
`

const DownloadButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 318px;
        gap: 7px;
  }
`
const DownloadTextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:12px;
`

// 다운로드 제목 스타일
const DownloadTitle = styled.h2`
    line-height: 1.5;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: ${({ theme }) => theme.fontSizes.fs22};
  }
`
// 다운로드 본문 스타일
const DownloadDescription = styled.p`
    color: ${({ theme }) => theme.colors.grey600};
    line-height: 1.5;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: ${({ theme }) => theme.fontSizes.fs14};
  }
`

const download = () => {
  return (
    <DownloadWrapper>
        <DownloadTextWrapper>
            <DownloadTitle>
            위잇트와 함께해요!
            </DownloadTitle>
            <DownloadDescription>
            건강한 한 끼가 더 쉬워지는 곳, 위잇트<br/> 새로운 건강식 경험을 만들어갈 여러분을 기다립니다.
            </DownloadDescription>
        </DownloadTextWrapper>
        <DownloadButtonWrapper>
            <DownloadButton href="https://play.google.com/store" target="_blank">
                <DownloadButtonImage src="src/assets/images/PC_google play.png" alt="구글 플레이 스토어"/>
            </DownloadButton>
            <DownloadButton href="https://www.apple.com/app-store/" target="_blank">
                <DownloadButtonImage src="src/assets/images/PC_app store.png" alt="앱 스토어"/>
            </DownloadButton>
        </DownloadButtonWrapper>
    </DownloadWrapper>
  )
}

export default download