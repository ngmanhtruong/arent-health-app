import React, { useEffect } from 'react'
import BottomButton from '../../common/bottom-button'
import ImageFrame from '../../common/image-frame'
import Loader from '../../common/loader'
import { handleScrollTop } from '../../utils/scroll'
import './index.scss'

const recommends = [
  {
    title: 'BODY RECORD',
    buttonName: '自分のカラダの記録',
    buttonFn: () => {},
    index: 0,
  },
  {
    title: 'MY EXERCISE',
    buttonName: '自分の運動の記録',
    buttonFn: () => {},
    index: 1,
  },
  {
    title: 'MY DIARY',
    buttonName: '自分の日記',
    buttonFn: () => {},
    index: 2,
  }
]

const myExcercise = 
{
  title: '家事全般（立位・軽い）',
  time: 10,
  kcal: 26
}

const myDiary = {
  date: '2021.05.21',
  time: '23:25',
  title: '私の日記の記録が一部表示されます。',
  content: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`
}


const MyRecordPageComponent = () => {
  const [excercise, setExcercise] = React.useState([])
  const [diary, setDiary] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    // create 20 excercises
    let newExcercise = []
    for (let i = 0; i < 20; i++) {
      newExcercise = [
        ...newExcercise,
        myExcercise
      ]
    }
    setExcercise(newExcercise)
    // create 8 diaries
    let newDiary = []
    for (let i = 0; i < 8; i++) {
      newDiary = [
        ...newDiary,
        myDiary
      ]
    }
    setDiary(newDiary)
    setLoading(false)
    return () => {
      setExcercise([])
      setDiary([])
    }
  }, [])

  // click this button to show more diary
  const onClick = () => {
    setLoading(true)
    let newDiary = []
    // load 4 more diaries
    for (let i = 0; i < 4; i++) {
      newDiary = [
        ...newDiary,
        myDiary
      ]
    }
    setDiary([
      ...diary,
      ...newDiary
    ])
    setLoading(false)
  }

  return (
    <div className="my-record">
      <div className="my-record__wrapper">
        <section className="my-record__section__section1">
          {recommends.map((item, index) =>
              <ImageFrame title={item.title} buttonFn={item.buttonFn} buttonName={item.buttonName} index={item.index} key={index} /> )}
        </section>
        <section className="my-record__section__section2">
          <div className="my-record__graph">
            <img src="assets/images/my-record/body-record.png" alt="body-record" />
          </div>
        </section>
        <section className="my-record__section__section3">
          <div className="my-record__exercise">
            <div className="my-record__exercise__wrapper">
              <div className="my-record__exercise__title">
                <h2>MY EXERCISE</h2>
                <p>2021.05.21</p>
              </div>
              <div className="my-record__exercise__container">
                <ul>
                  {excercise.length > 0 && excercise.map((item, index) => {
                    return (
                      <li className="my-record__exercise__item" key={index}>
                        <div className="my-record__exercise__item-wrapper">
                          <div>
                            <p>{item.title}</p>
                            <p className="my-record__lightning-yellow">{item.kcal}kcal</p>
                          </div>
                          <p className="my-record__lightning-yellow">{item.time} min</p>
                        </div>
                        <div className="my-record__horizontal-line"></div>
                      </li>
                    )
                  }) }
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="my-record__section__section4">
          <div className="my-record__diary">
            <h3>MY DIARY</h3>
            <div className="my-record__diary__wrapper">
              {diary.length > 0 && diary.map((item, index) => {
                return (
                  <div className="my-record__diary__item" key={index}>
                    <div className="my-record__diary__item-wrapper">
                      <div className="my-record__diary__title">
                        <p>{item.date}</p>
                        <p>{item.time}</p>
                      </div>
                      <p className="my-record__diary__normal">{item.title}</p>
                      <p className="my-record__diary__normal">{item.content}</p>
                    </div>
                  </div>
                )
              })}
              <div className="to-top" onClick={handleScrollTop}></div>
            </div>
          </div>
        </section>
        {loading && <Loader />}
        <div className="top-page__bottom">
          <BottomButton onClick={onClick} text="自分の日記をもっと見る"/>
        </div>
      </div>
    </div>
  )
}


export default MyRecordPageComponent