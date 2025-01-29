// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import PackingList from './components/props_item'
import List from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'
import Gallery from './qcomps/state'
import Form from'./qcomps/updObjectsForm'
import RequestTracker from './qcomps/shoppingCart'
import BucketList from './qcomps/arrObj'

export default function Home() {
  return (
    <Form />
  )
}
