import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Reviews from '../Reviews/Review'
import AdsSection from '../Ads/AdsSection'
import Basket from './Basket'
import OrderForm from './OrderForm'
import { Alert, Dialog, DialogContent } from '@mui/material'
import { AuthService } from '../services/auth/auth-service'
import { useNavigate } from "react-router-dom";
import { ClientService } from '../services/service/client-service'


export default function BasketList() {
  function FormRow(props) {
    return (
      <React.Fragment>
        <Grid item xs={3} wrap >
          <Paper><Basket basket={props.basket} /></Paper>
        </Grid>
      </React.Fragment>
    );
  }

  // let baskets = [
  //   { id: 1, num: 1, title: 'Рамэн с курицей', description: 'Очень вкусное блюдо', price: 500 },
  //   { id: 2, num: 1, title: 'Рамэн с курицей', description: 'А это среднее', price: 500 },
  //   { id: 3, num: 1, title: 'Рамэн с курицей', description: 'Приготовил Максим Боженко', price: 500 },
  // ]

  const [baskets, setBaskets] = useState();
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState();

  function countTotalPrice() {
    let sum = 0;
    if (baskets != undefined) {
      baskets.forEach((el) => {
        sum += el.count * el.price;
      })
    }

    setTotalPrice(sum);
  }

  useEffect(() => {
    console.log("useEffect");
    if (!AuthService.isAuthorized()) {
      navigate('../auth');
    }
    let basketJSON = localStorage.getItem("dish-basket")
    let baskets = [];
    if (basketJSON) {
      baskets = JSON.parse(basketJSON);
    }
    setBaskets(baskets);
  }, []);

  useEffect(() => {
    countTotalPrice();
  }, [baskets]);

  function removeFromBasket(dish_id) {
    let newBaskets = baskets.filter((obj) => {
      return obj.id !== dish_id;
    });
    console.log(newBaskets);
    localStorage.setItem("dish-basket", JSON.stringify(newBaskets));
    setBaskets(newBaskets);
    //countTotalPrice();
  }

  const addOrder=(order)=>{
      baskets.length = 0;
      // reviewsList.push(review);
      setBaskets(baskets);
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  function handleOrder(event) {
      event.preventDefault();
      let dishes;
      let time;
      let client_address;
      let client_phone;
      ClientService.createOrder(dishes, time, client_address, client_phone)
          .then(response => {
              console.log(response.data);
              handleClose();
              //addReview(response.data);
              // <Alert id='alertMessageSuccess' severity="success">This is a success alert — check it out!</Alert>
          }).catch(error => {
              console.log("Неверно введены данные")
          })
  }

  return (
    <>
      <div id="openModalSuccess" className="modal">
        <Alert id='alertMessageSuccess' severity="success">This is a success alert — check it out!</Alert>
      </div>
      <div className='emptyBlock2'></div>
      <div className='basketSectionContainer'>
        <div className='basketSection'>
          <span className='basketSectionTitle'>Корзина</span>
          <Grid className='gridBasketAll' container spacing={1}>
            {baskets && baskets.map(basket => {
              return <>
                <Grid className='gridBasket' container item xs={12} spacing={3}>
                  <Grid item xs={3} wrap >
                    <Paper><Basket basket={basket} onRemove={() => removeFromBasket(basket.id)} /></Paper>
                  </Grid>
                </Grid>
              </>
            })}
          </Grid>
        </div>
        {(baskets != undefined && baskets.length)
          ? <>
            <div className='totalPrice'>Итого: <span className='totalPriceText'>{totalPrice} руб.</span></div>
            <a onClick={handleClickOpen} style={{cursor: "pointer"}} className='buyBtn'><span className='buyBtnText'>Оформить заказ</span></a>
            
            {/* <div id="openOrder" class="modal">
              <OrderForm id='SignInModal' />
            </div> */}


            <Dialog
                open={open}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <OrderForm addOrder={addOrder} handleClose={handleClose} id='SignInModal' />
                </DialogContent>
            </Dialog>


          </>
          : <>
            <span className='basketNull'>Здесь пока пусто</span>
          </>}

      </div>
    </>

  );
}