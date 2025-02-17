import React from 'react'
import styled from 'styled-components'

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

const download = () => {
  return (
    <div>
        <div>
            <h2>
            위잇트와 함께해요!
            </h2>
            <p>
            건강한 한 끼가 더 쉬워지는 곳, 위잇트 새로운 건강식 경험을 만들어갈 여러분을 기다립니다.
            </p>
        </div>
        <DownloadButtonWrapper>
            <DownloadButton>
                <img src="src/assets/images/PC_google play.png" alt="구글 플레이 스토어"/>
            </DownloadButton>
            <DownloadButton>
                <img src="src/assets/images/PC_app store.png" alt="앱 스토어"/>
            </DownloadButton>
        </DownloadButtonWrapper>
    </div>
  )
}

export default download