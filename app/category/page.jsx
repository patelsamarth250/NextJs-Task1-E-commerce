import styles from './page.module.css'
import React from 'react'
import datas from './productData.json'
import { getLocalData } from './DispProducts';
import Image from 'next/image';

// console.log(jsonData)

export default async function page1() {

  const products = await getLocalData();

  return (
    <div className={styles.category_page1}>

      <div className={styles.header}>

      {/* IMPORT NAVBAR COMPONENT AND INSERT HERE */}
        this is the header for navbar
      
      
      </div>

      <div className={styles.main_container}>

        <div className={styles.container_heads}>

          <p>Our Products</p>
          <p>Sort &#11206;</p>
        </div>

        <hr className={styles.hr_line} />

        <div className={styles.container_contents}>

          <div className={styles.container_filter}>
            <h5>Big Art</h5>
            <h5>Pendants</h5>
            <h5>Candles</h5>
            <h5>Bookmarks</h5>
            <h5>New</h5>

            <hr className={styles.hr_line} />

            <div className={styles.filter_button}>
              <div className={styles.filter_button_title}>
                <h5>Designers</h5>
                <h5 className={styles.filter_sign}>+</h5>
              </div>
              <div className={styles.filter_button_inactive}>
              </div>
            </div>

            <hr className={styles.hr_line} />

            <div className={styles.filter_button}>

              <div className={styles.filter_button_title}>
                <h5>Material</h5>
                <h5 className={styles.filter_sign}>-</h5>
              </div>

              <div className={styles.filter_button_active}>

                <div className={styles.checkbox_div}>
                  <input type="checkbox" name="silk" id="silk" />
                  <label htmlFor="silk">Silk</label>
                </div>

                <div className={styles.checkbox_div}>
                  <input type="checkbox" name="tweed" id="tweed" />
                  <label htmlFor="tweed">Tweed</label>
                </div>

                <div className={styles.checkbox_div}>
                  <input type="checkbox" name="wool" id="wool" />
                  <label htmlFor="wool">Wool</label>
                </div>

                <div className={styles.checkbox_div}>
                  <input type="checkbox" name="linen" id="linen" />
                  <label htmlFor="linen">Linen</label>
                </div>

                <div className={styles.checkbox_div}>
                  <input type="checkbox" name="polyster" id="polyster" />
                  <label htmlFor="polyster">Polyster</label>
                </div>

              </div>

            </div>

            <hr className={styles.hr_line} />

            <div className={styles.filter_button}>
              <div className={styles.filter_button_title}>
                <h5>Size</h5>
                <h5 className={styles.filter_sign}>+</h5>
              </div>
              <div className={styles.filter_button_inactive}>
              </div>
            </div>

          </div>

          <div className={styles.container_products}>

            {
              products.map((product) => {
                return (
                  <div key={product.id} className={styles.product_div}>
                    <div className={styles.product_div_image} style={{ position: "relative" }}>
                      <Image
                        src={product.image}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <p>{product.category}</p>
                    <h4>{product.title} </h4>
                    <p>{product.description} </p>

                    <h3>{product.price}/Piece</h3>
                  </div>
                )
              })
            }

          </div>
        </div>

        <div className={styles.page_navigator}>
          <div></div>
          <div className={styles.page_navigator_div}>
            <div className={styles.page_navigator_button}>
              Previous
            </div>
            <div className={styles.page_buttons}>
              <div className={styles.page_list_active}>
                1
              </div>
              <div className={styles.page_list_inactive}>
                2
              </div>
              <div className={styles.page_list_inactive}>
                3
              </div>
              ....
              <div className={styles.page_list_inactive}>
                8
              </div>
              <div className={styles.page_list_inactive}>
                9
              </div>
              <div className={styles.page_list_inactive}>
                10
              </div>
            </div>
            <div className={styles.page_navigator_button}>
              Next
            </div>
          </div>

        </div>

      </div>

      <div className="footer">
        {/* IMPORT FOOTER COMPONENT AND INSERT HERE */}
        this is the footer component
      </div>

    </div>

  )
}