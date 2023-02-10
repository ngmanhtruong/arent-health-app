import React, { useEffect } from 'react'
import BottomButton from '../../common/bottom-button'
import CardImage from '../../common/card-image'
import HexItem from '../../common/hex-item'
import { handleScrollTop } from '../../utils/scroll'
import './index.scss'

const section2 = [
  {
    iconType: 'fork',
    label: 'Morning'
  },
  {
    iconType: 'fork',
    label: 'Lunch'
  },
  {
    iconType: 'fork',
    label: 'Dinner'
  },
  {
    iconType: 'cup',
    label: 'Snack'
  }
]

const section3 = [
  {
    imgSrc: 'assets/images/top-page/section3-sandwich.png',
    label: '05.21.Morning',
  },
  {
    imgSrc: 'assets/images/top-page/section3-bento.png',
    label: '05.21.Lunch',
  },
  {
    imgSrc: 'assets/images/top-page/section3-dinner.png',
    label: '05.21.Dinner'
  },
  {
    imgSrc: 'assets/images/top-page/section3-soup.png',
    label: '05.21.Snack'
  },
  {
    imgSrc: 'assets/images/top-page/section3-sandwich.png',
    label: '05.20.Morning',
  },
  {
    imgSrc: 'assets/images/top-page/section3-banhmi.png',
    label: '05.20.Lunch',
  },
  {
    imgSrc: 'assets/images/top-page/section3-porkrice.png',
    label: '05.20.Dinner'
  },
  {
    imgSrc: 'assets/images/top-page/section3-icecream.png',
    label: '05.20.Snack'
  }
]

const TopPageComponent = () => {
  const [state, setState] = React.useState([])
  // set filter
  const [filter, setFilter] = React.useState('all')

  const onClick = () => {
    // add 4 more random items
    let newState = []
    for (let i = 0; i < 4; i++) {
      newState = [
        ...newState,
        section3[Math.floor(Math.random() * section3.length)]
      ]
    }
    setState([
      ...state,
      ...newState
    ])
  }

  useEffect(() => {
    let newState = []
    for (let i = 0; i < 8; i++) {
      newState = [
        ...newState,
        section3[i]
      ]
    }
    setState(newState)
  },[])

  //set useEffect for filter that when filter change, the result in current state will change, we will have 5 filter, all, Morning, Lunch, Dinner, Snack
  useEffect(() => {
    if (filter !== 'all') {
      const newState = state.filter(item => item.label.includes(filter))
      setState(newState)
    }
  }, [filter])

  return (
    <div className="top-page">
      <div className="top-page__wrapper">
        <section className="top-page__section__section1">
          <div className="left">
            <div className="top-page__loading__overlay">
              <div className="top-page__loading__wrapper">
                <div className="top-page__loading__content">
                  <p className="top-page__loading__normal">05/21</p>
                  <p className="top-page__loading__percent">75%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <img src="assets/images/top-page/section1-right.png" alt="main-graph" />
          </div>
        </section>
        <section className="top-page__section__section2">
          {section2.map((item, index) => {
            return (
              <HexItem iconType={item.iconType} label={item.label} key={index} setFilter={setFilter}/>
            )
          })}
        </section>
        <section className="top-page__section__section3">
          <div className="wrapper">
            {state.map((item, index) => {
              return (
                <CardImage imgSrc={item.imgSrc} label={item.label} key={index} />
              )
            })}
            <div className="to-top" onClick={handleScrollTop}></div>
          </div>
        </section>
        <div className="top-page__bottom">
          <BottomButton onClick={onClick} text="記録をもっと見る"/>
        </div>
      </div>
    </div>
  )
}

export default TopPageComponent