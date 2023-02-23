import Cities from '../cities.json'

export const useChangeCities = () => {
  /**
   * APIで取得した市区町村から読み仮名を一つの文字列に変換
   * 〜市、〜区、〜町、〜村は削除する
   * @returns string[]
   */
  const changeCities = () => Cities.response.map(prefecture => prefecture.map(city => city.city_kana.replace(/(し$|く$|ちょう$|まち$|そん$|むら$)/g, '')).join(''))

  return {
    changeCities
  }
}