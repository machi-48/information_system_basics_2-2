import { FC, useEffect, useState, useRef, memo } from 'react'
import { PREFECTURES, KANA } from '../constants'
import { useChangeCities } from '../hooks/useChangeCities'
import './style.css'

type Props = {
  count?: { kana: string, count: number}[][]
}

const Component: FC<Props> = memo(({ count }) => (
  <div className='japan'>
    <ul className='prefectures'>
      {count && count.length && PREFECTURES.map((prefecture, i) => (
        <li key={prefecture.prefecture} title={prefecture.prefecture} className="prefecture" style={{ left: prefecture.x, top: prefecture.y, fontSize: prefecture.size, color: prefecture.color }}>{count[i].reduce((a, b) => a.count > b.count ? a : b).kana}</li>
      ))}
    </ul>
  </div>
))

export const MapOfJapan: FC = () => {
  const { changeCities } = useChangeCities()
  const [kana, setKana] = useState<string[]>([])
  const [count, setCount] = useState<{ kana: string, count: number}[][]>()
  const isInitialRender = useRef(true)

  useEffect(() => {
    setKana(changeCities())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (isInitialRender.current) {
      // 初期レンダリング時は実行しない
      isInitialRender.current = false
    } else if (kana) {
      // 読み仮名を変換後、ひらがなの個数をセットする
      setCount(kana.map((prefecture) => KANA.split('').map(item => ({ kana: item, count: (prefecture.match(new RegExp(item, 'g')) || [] ).length }))))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kana])

  return <Component {...{ count }} />
}
