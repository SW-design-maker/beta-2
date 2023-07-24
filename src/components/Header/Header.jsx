import React from 'react'
import '../Header/Header.scss'
import Card from '../../fragments/Card/Card'
import Info from '../../fragments/Info/Info'
import { useTranslation } from 'react-i18next'

const Header = () => {

  const { t, i18n } = useTranslation();


  return (
    <header>
      <div className="container">
        <h1>{t("header1")}</h1>
        <div className="all">
          <Card />
        </div>
        <Info />
      </div>
    </header>
  )
}

export default Header