import React from 'react'
import MyNavbar from '../components/MyNavbar'
import MyFooter from '../components/MyFooter'
import CardResults from '../components/CardResults'

export default function ResultPage({ data }) {

  return (
    <>
    <MyNavbar />
    <CardResults data={data}/>
    <MyFooter />
    </>

  )
}
