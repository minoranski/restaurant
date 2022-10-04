import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import ProductList from './ProductSection/ProductList'
import Ads from './Ads/Ads'
import AdsList from './Ads/AdsList'
import RestaurantSection from './Restaurants/RestaurantSection'
import ReviewsSection from './Reviews/ReviewsSection'
import AboutUs from './AboutUs/AboutUs'
import BasketList from './Basket/BasketList'
import Layout from './layout/Layout'
import SignIn from './AuthReg/SignIn'
import SignUp from './AuthReg/SignUp'
import ScrollUpBtn from './ProductSection/ScrollUpBtn'
import FeedbackForm from './Reviews/FeedbackForm'

function App() {

  const sections = [
    { name: 'Рамэн с курицей', weight: 540, price: 500 }
  ]

  let adsFormMainPage = [
    { id: 1, name: 'СКИДКА ДЛЯ МАМ' }
  ]

  let ads = [
    { id: 1, name: '1СКИДКА ДЛЯ МАМ'},
    { id: 2, name: '2СКИДКА ДЛЯ МАМ'},
    { id: 3, name: '3СКИДКА ДЛЯ МАМ'},
    { id: 4, name: '4СКИДКА ДЛЯ МАМ'},
    { id: 5, name: '5СКИДКА ДЛЯ МАМ'},
    { id: 6, name: '6СКИДКА ДЛЯ МАМ'},
    { id: 7, name: '7СКИДКА ДЛЯ МАМ'},
    { id: 8, name: '8СКИДКА ДЛЯ МАМ'},
    { id: 9, name: '9СКИДКА ДЛЯ МАМ'},
  ]

  let reviews = [
    { id: 1, name: 'Москаленко', date: '01.01.2001', rate: 4, likes: 26, dislikes: 5, text: 'Замечательное заведение, полностью удовлетворился. Повара вообще красавцы, классные ребята ... такие у нас не потеряются!'},
    { id: 2, name: 'ник подгорный', date: '01.01.2001', rate: 4, likes: 26, dislikes: 5, text: 'Лично я предпочитаю итальянскую кухню. Мне не нравиться интерьр заведения, отношение прислуги к посетителям и туалет (плохой смыв). Еда не впечатлила. Нет настолок.'},
    { id: 3, name: 'папков', date: '01.01.2001', rate: 4, likes: 26, dislikes: 5, text: 'Заведение на твердую четверку. К сожалеию, официантка не дала мне свой номер. Понравился повар.Он молодец. Такие у меня не пропадут)'},
  ]

  const topStyleForMainPage = {
    top: '293px',
  };

  return (
    <div className='all'>
      <a name="top"></a>
      <ScrollUpBtn/>
      {/* <Header/> */}
        <Routes>
          <Route path='/' element={ <Layout><ProductList/></Layout> }/>
          <Route path='/restaurants' element={ <Layout><RestaurantSection/></Layout>  }/>
          <Route path='/ads' element={<Layout><Ads ads={ads} style1={topStyleForMainPage}/></Layout> }/>
          <Route path='/reviews' element={ <Layout><ReviewsSection/></Layout> }/>
          <Route path='/aboutus' element={ <Layout><AboutUs/></Layout> }/>
          <Route path='/basket' element={ <Layout><BasketList/></Layout> }/>
          <Route path='/auth' element={ <Layout><SignIn/></Layout> }/>
          <Route path='/reg' element={ <Layout><SignUp/></Layout> }/>
          <Route path='feedbackform' element={ <Layout><FeedbackForm/></Layout> }/>
        </Routes>
      {/* <Footer/> */}
    </div>
  )
}

export default App;