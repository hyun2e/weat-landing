import React from 'react'
import Button from '../components/Button'

const character = () => {
  return (
    <div>
        <div>
            <h2>포인트를 모아서 4종 랜덤 위펫을 만나보세요!</h2>
            <p>포인트를 모으면 화분에서 꽃이 자라고,랜덤 위펫 등장해요! 🌱🍅🥕🥦 어떤 친구가 나올지 기대해 보세요!</p>
        </div>

        <div>
            <div>
                <img/>
                <div>
                    <div>
                        <div>Lv.1</div>
                        <div>
                            <img/>
                            <img/>
                            <img/>
                            <img/>
                            <img/>
                        </div>
                    </div>
                    <p>작은 씨앗에서 새로운 생명의 시작을 느껴보세요!</p>
                </div>
            </div>

            <div>
                <img/>
                <div>
                    <div>
                        <div>Lv.2</div>
                        <div>
                            <img/>
                            <img/>
                            <img/>
                            <img/>
                            <img/>
                        </div>
                    </div>
                    <p>첫 싹이 틀 때, 당신의 식물도 함께 자라기 시작합니다!</p>
                </div>
            </div>

            <div>
                <img/>
                <div>
                    <div>
                        <div>Lv.3</div>
                        <div>
                            <img/>
                            <img/>
                            <img/>
                            <img/>
                            <img/>
                        </div>
                    </div>
                    <p>싹에서 꽃 봉우리가 싹트기 시작했습니다!</p>
                </div>
            </div>

            <div>
                <img/>
                <div>
                    <div>
                        <div>Lv.4</div>
                        <div>
                            <img/>
                            <img/>
                            <img/>
                            <img/>
                            <img/>
                        </div>
                    </div>
                    <p>아름다운 꽃이 만개할 순간이 가까워졌습니다!</p>
                </div>
            </div>

            <div>
                <img/>
                <div>
                    <div>
                        <div>Lv.5</div>
                        <div>
                            <img/>
                            <img/>
                            <img/>
                            <img/>
                            <img/>
                        </div>
                    </div>
                    <p>아름다운 꽃이 어떤 열매를 맺었을까요?</p>
                </div>
            </div>
        </div>

        <div>
            <h3>여러분을 기다리는 위펫은 어떤 모습일까요?</h3>
            <img/>
        </div>

        <div>
            <img/>
            <img/>
            <img/>
            <img/>
        </div>

        <Button type="outline-btn" href="/characters">
            위펫 만나러가기
        </Button>
    </div>
  )
}

export default character