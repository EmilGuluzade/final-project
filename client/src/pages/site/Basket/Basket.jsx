import React, { useContext } from "react";
import MainContext from "../../../context/context";
import { Helmet } from "react-helmet-async";
import BasketItem from "../../../components/site/Cards/BasketItem/BasketItem";

const Basket = () => {
  const { basket, products,resetBasket,basketTotal, } = useContext(MainContext);
  console.log(basket);
  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>

      {basket.length < 1 ? (
        <div class="holder mt-0">
          <div class="container">
            <div class="page404-bg" style={{ "min-height": "1.8px" }}>
              <div class="page404-text">
                <div class="txt1">
                  <img
                    src="https://big-skins.com/frontend/foxic-html-demo/images/pages/tumbleweed.gif"
                    alt=""
                  />
                </div>
                <div class="txt2">Your shopping cart is empty!</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div class="holder mt-0">
            <div class="container">
              <div class="page-title text-center my-5">
                <h1>Shopping Cart</h1>
              </div>
              <div className="row d-flex">
                <div class="col-8">
                  <div class="cart-table">
                    <div class="cart-table-prd cart-table-prd--head py-1 d-none d-md-flex">
                      <div class="cart-table-prd-image text-center">Image</div>
                      <div class="cart-table-prd-content-wrap">
                        <div class="cart-table-prd-info">Name</div>
                        <div class="cart-table-prd-qty">Qty</div>
                        <div class="cart-table-prd-price">Price</div>
                        <div class="cart-table-prd-action">&nbsp;</div>
                      </div>
                    </div>
                    {
                      basket.map((item, index) => (
                      <BasketItem  key={index} item={item}></BasketItem>
                    ))
                    }
                  </div>
                  <div class="text-center mt-1">
                    <p onClick={resetBasket} class="btn btn--grey">
                      Clear All
                    </p>
                  </div>
                </div>
                <div class="col-4">
                  <div class="cart-promo-banner">
                    <div class="cart-promo-banner-inside">
                      <div class="txt1">Save 50%</div>
                      <div class="txt2">Only Today!</div>
                    </div>
                  </div>
                  <div class="card-total">
                    
                    <div class="row d-flex">
                      <div class="col card-total-txt">Total</div>
                      <div class="col-auto card-total-price text-right">
                        $ {basketTotal}
                      </div>
                    </div>
                    <button class="btn btn--full btn--lg">
                      <span>Checkout</span>
                    </button>
                    <div class="card-text-info text-right">
                      <h5>Standart shipping</h5>
                      <p>
                        <b>10 - 11 business days</b>
                        <br />1 item ships from the U.S. and will be delivered
                        in 10 - 11 business days
                      </p>
                    </div>
                  </div>
                  <div class="mt-2"></div>
                  <div  class="panel-group panel-group--style1 prd-block_accordion" id="productAccordion" >
                    <div class="panel">
                      <div class="panel-heading">
                        <h4 class="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#productAccordion"
                            href="#collapse1"
                            aria-expanded="false"
                            class="collapsed"
                          >
                            Shipping options
                          </a>
                          <span class="toggle-arrow">
                            <span></span>
                            <span></span>
                          </span>
                        </h4>
                      </div>
                      <div id="collapse1" class="panel-collapse collapse">
                        <div class="panel-body">
                          <label>Country:</label>
                          <div class="form-group select-wrapper select-wrapper-sm">
                            <select class="form-control form-control--sm">
                              <option value="United States">
                                United States
                              </option>
                              <option value="Canada">Canada</option>
                              <option value="China">China</option>
                              <option value="India">India</option>
                              <option value="Italy">Italy</option>
                              <option value="Mexico">Mexico</option>
                            </select>
                          </div>
                          <label>State:</label>
                          <div class="form-group select-wrapper select-wrapper-sm">
                            <select class="form-control form-control--sm">
                              <option value="AL">Alabama</option>
                              <option value="AK">Alaska</option>
                              <option value="AZ">Arizona</option>
                              <option value="AR">Arkansas</option>
                              <option value="CA">California</option>
                              <option value="CO">Colorado</option>
                              <option value="CT">Connecticut</option>
                              <option value="DE">Delaware</option>
                              <option value="DC">District Of Columbia</option>
                              <option value="FL">Florida</option>
                              <option value="GA">Georgia</option>
                              <option value="HI">Hawaii</option>
                              <option value="ID">Idaho</option>
                              <option value="IL">Illinois</option>
                              <option value="IN">Indiana</option>
                              <option value="IA">Iowa</option>
                              <option value="KS">Kansas</option>
                              <option value="KY">Kentucky</option>
                              <option value="LA">Louisiana</option>
                            </select>
                          </div>
                          <label>Zip/Postal code:</label>
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control form-control--sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="panel">
                      <div class="panel-heading">
                        <h4 class="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#productAccordion"
                            href="#collapse2"
                            aria-expanded="false"
                            class="collapsed"
                          >
                            Discount Code
                          </a>
                          <span class="toggle-arrow">
                            <span></span>
                            <span></span>
                          </span>
                        </h4>
                      </div>
                      <div id="collapse2" class="panel-collapse collapse">
                        <div class="panel-body">
                          <p>
                            Got a promo code? Then you're a few randomly
                            combined numbers &amp; letters away from fab
                            savings!
                          </p>
                          <div class="form-inline mt-2">
                            <input
                              type="text"
                              class="form-control form-control--sm"
                              placeholder="Promotion/Discount Code"
                            />
                            <button type="submit" class="btn">
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="panel">
                      <div class="panel-heading">
                        <h4 class="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#productAccordion"
                            href="#collapse3"
                            aria-expanded="false"
                            class="collapsed"
                          >
                            Note for the seller
                          </a>
                          <span class="toggle-arrow">
                            <span></span>
                            <span></span>
                          </span>
                        </h4>
                      </div>
                      <div id="collapse3" class="panel-collapse collapse">
                        <div class="panel-body">
                          <textarea
                            class="form-control form-control--sm textarea--height-100"
                            placeholder="Text here"
                          ></textarea>
                          <div class="card-text-info mt-2">
                            <p>
                              *Savings include promotions, coupons, rueBUCKS,
                              and shipping (if applicable).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Basket;
