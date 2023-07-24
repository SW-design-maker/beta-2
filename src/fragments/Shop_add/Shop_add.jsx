import React, { useState } from 'react'
import '../Shop_add/Shop_add.scss'
import { useCart } from 'react-use-cart';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Shop_add = () => {

    const { items, updateItemQuantity, removeItem, emptyCart } = useCart();
    let total = 0;

    const [name, setName] = useState("");
    const [telefon, setTelefon] = useState("");
    const [location, setLocation] = useState("");

    const postTest = () => {
        axios.post(
            `https://api.telegram.org/bot6309177783:AAHmewwy4T7vn16GCtjJ85DB7tVP02JitlE/sendMessage?chat_id=-956057559&text=${encodeURIComponent(
                `<b>Zakazlar:</b>
    ${items.map((item) => {
                    return `

Mahsulot nomi: ${item.title}

Mahsulot narxi: ${item.price} UZS

Jami mahsulot soni : ${item.count} ta`;

                })
                    .join("")}        

<b>Jami zakaz:</b> ${total} UZS

Mijoz ismi: ${name}

Mijoz telefon nomeri: ${telefon}

Mijoz manzili: ${location}`
            )}&parse_mode=html`
        )
            .then(() => {

                window.location.reload()
            })
    };

    const { t } = useTranslation();

    return (
        <div className='shop_add'>
            <div className="container">
                <h1>{t("shop4")}</h1>
                <div className="card_all">
                    <div className="left">
                        {items?.map((item) => {
                            const priceCount = item.count * item.price;
                            total += priceCount;

                            if (item.count >= 1) {
                                return (
                                    <div className="card" key={item._id}>
                                        <a to="">
                                            <img src={item.image} alt="" />
                                        </a>
                                        <div className="text">
                                            <button className='xit'>XIT</button>
                                            <a to="" className='desc'>
                                                {item.title}
                                            </a>
                                            <b>{item.price} {t("shop9")}
                                                <button>
                                                    <p
                                                        onClick={() =>
                                                            updateItemQuantity(item.id, item.count--)
                                                        }
                                                    >
                                                        -
                                                    </p>
                                                    <h3>{item.count}</h3>
                                                    <p
                                                        onClick={() =>
                                                            updateItemQuantity(item.id, item.count++)
                                                        }
                                                    >
                                                        +
                                                    </p>
                                                </button>
                                            </b>
                                        </div>

                                    </div>
                                );
                            } else {
                                removeItem(item.id);
                            }
                        })}
                    </div>
                    <div className="right_all">
                        <div className="right_top">
                            <p>
                                Ismingiz:
                            </p>
                            <input
                                value={name}
                                type="text"
                                placeholder="Ismingiz"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <p>
                                Telefon raqam:
                            </p>
                            <input
                                value={telefon}
                                type="text"
                                placeholder="+998"
                                onChange={(e) => setTelefon(e.target.value)}
                            />
                            <p>
                                Viloyatingiz
                            </p>
                            <input
                                value={location}
                                type="text"
                                placeholder="Turar joyingiz"
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <div className="right_bottom">
                            <p>{t("shop5")}</p>
                            <ul>
                                <li>{t("shop6")}</li>
                                <b>{total} {t("shop9")}</b>
                            </ul>
                            <ul>
                                <li>{t("shop7")}</li>
                                <b>0 {t("shop9")}</b>
                            </ul>
                            <ul>
                                <li>{t("shop8")}</li>
                                <b>{total} {t("shop9")}</b>
                            </ul>
                            <NavLink to='' className="send"
                                onClick={() => {
                                    postTest();
                                }}>
                                {t("shop10")}
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop_add