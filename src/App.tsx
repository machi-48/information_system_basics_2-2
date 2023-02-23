import { FC } from 'react'
import { MapOfJapan } from './component/MapOfJapan'
import { Copyright } from './component/Copyright'
import { Description } from './component/Description'
import './App.css'

export const App: FC = () => (
  <div className="wrap">
    <Description />
    <MapOfJapan />
    <Copyright />
  </div>
)
