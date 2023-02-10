import React, { useEffect, useState } from 'react'
import BottomButton from '../../common/bottom-button'
import { handleScrollTop } from '../../utils/scroll'
import './index.scss'

const articles = [
  {
    text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    hashTag: '#魚料理  #和食  #DHA',
    image: 'assets/images/column/column1.png'
  },
  {
    text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    hashTag: '#魚料理  #和食  #DHA',
    image: 'assets/images/column/column2.png'
  },
  {
    text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    hashTag: '#魚料理  #和食  #DHA',
    image: 'assets/images/column/column3.png'
  },
  {
    text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    hashTag: '#魚料理  #和食  #DHA',
    image: 'assets/images/column/column4.png'
  },
  {
    text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    hashTag: '#魚料理  #和食  #DHA',
    image: 'assets/images/column/column5.png'
  },
  {
    text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    hashTag: '#魚料理  #和食  #DHA',
    image: 'assets/images/column/column6.png'
  },
  {
    text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    hashTag: '#魚料理  #和食  #DHA',
    image: 'assets/images/column/column7.png'
  },
  {
    text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    hashTag: '#魚料理  #和食  #DHA',
    image: 'assets/images/column/column8.png'
  }
]

const ColumnPageComponent = () => {
  const [columns, setColumns] = useState([])
  const generateRecommended = () => {
    let recommended = []
    for (let i = 0; i < 4; i++) {
      recommended = [
        ...recommended,
        Recommended(i)
      ]
    }
    return recommended
  }
  const generateArticles = () => {
    let articles = []
    for (let i = 0; i < 8; i++) {
      articles = [
        ...articles,
        Articles(i)
      ]
    }
    setColumns(articles)
  }
  const onClick = () => {
    //add more columns when click by random articles
    let newColumns = []
    for (let i = 0; i < 4; i++) {
      newColumns = [
        ...newColumns,
        Articles(Math.floor(Math.random() * 8))
      ]
    }
    setColumns([
      ...columns,
      ...newColumns
    ])
  }

  useEffect(() => {
    generateArticles()
    return () => {
      setColumns([])
    }
  },[])

  return (
    <div className="column">
      <div className="column__wrapper">
        <section className="column__section__section1">
          {generateRecommended().map(item => {
            return item
          })}
        </section>
        <section className="column__section__section2">
          <div className="wrapper">
            {columns.map(item => {
              return item
            })}
            <div className="to-top" onClick={handleScrollTop}></div>
          </div>
        </section>
        <div className="top-page__bottom">
          <BottomButton onClick={onClick} text="コラムをもっと見る"/>
        </div>
      </div>  
    </div>
  )
}

const Recommended = (index) => {
  const recommendedFields = [
    {
      title: 'COLUMN',
      text: 'オススメ'
    },
    {
      title: 'DIET',
      text: 'ダイエット'
    },
    {
      title: 'BEAUTY',
      text: '美容'
    },
    {
      title: 'HEALTH',
      text: '健康'
    }
  ]

  const getRecommendedFields = () => {
    if (index > 3) {
      return recommendedFields[0]
    } else {
      return recommendedFields[index]
    }
  }

  return (
    <div className='recommend' key={index}>
      <div className='recommend__wrapper'>
        <div className='recommend__title'>
          <p className='lightning-yellow'>RECOMMENDED {getRecommendedFields().title}</p>
        </div>
        <p className='recommend__text'>{getRecommendedFields().text}</p>
      </div>
    </div>
  )
}

const Articles = (index) => {
  return (
    <div className='article' key={index}>
      <div className='article__wrapper'>
        <div className='article__image'>
          <img src={articles[index].image} alt='article' />
          <p>2021.05.17  23:25</p>
        </div>
        <div className='article__text'>
          <p>{articles[index].text}</p>
        </div>
        <div className='article__hashtag'>
          <p>{articles[index].hashTag}</p>
        </div>
      </div>
    </div>
  )
}

export default ColumnPageComponent