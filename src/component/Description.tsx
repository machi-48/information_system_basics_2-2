import { FC } from 'react'
import './style.css'

export const Description: FC = () => (
  <div className='description_wrap'>
    <h1 className='title'>日本を構成するひらがな</h1>
    <p className='description'>各都道府県の市区町村の読み仮名で、一番使われている ひらがな を日本地図に当てはめたもの</p>
    <p className='description'>※「〜市」「〜区」「〜町」「〜村」の読み仮名は含まない</p>
  </div>
)