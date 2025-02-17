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
`

const DownloadButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: none;
    width: 200px;
    height: 68px;
    border-radius: 34px;
    border: none;
`
const DownloadButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
`
const DownloadTextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:12px;
`

const download = () => {
  return (
    <DownloadWrapper>
        <DownloadTextWrapper>
            <h2>
            위잇트와 함께해요!
            </h2>
            <p>
            건강한 한 끼가 더 쉬워지는 곳, 위잇트 새로운 건강식 경험을 만들어갈 여러분을 기다립니다.
            </p>
        </DownloadTextWrapper>
        <DownloadButtonWrapper>
            <DownloadButton>
                <img src="src/assets/images/PC_google play.png" alt="구글 플레이 스토어"/>
            </DownloadButton>
            <DownloadButton>
                <img src="src/assets/images/PC_app store.png" alt="앱 스토어"/>
            </DownloadButton>
        </DownloadButtonWrapper>
    </DownloadWrapper>
  )
}

export default download