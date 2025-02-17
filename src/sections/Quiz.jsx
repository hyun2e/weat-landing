import React from 'react';
import Button from '../components/Button';

const quiz = () => {
  return (
    <div>
        <div>
             <div>
                 <img/>
                 <img/>
                 <img/>
              </div>
             <div>
                   <h2>
                        퀴즈와 출석체크를 통해서 포인트를 얻어보세요
                  </h2>
                  <p>
                      퀴즈를 풀고 출석 체크하면 포인트가 쌓여요! 건강도 챙기고 혜택도 받아보세요.
                  </p>
             </div>
        </div>

        <Button type="outline-btn" href="/characters">
            포인트 획득하기
        </Button>
    </div>
  )
}

export default quiz;