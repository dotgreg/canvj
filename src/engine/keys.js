import mousetrap from 'mousetrap'
import {each} from 'lodash'

export let startKeysTracking = (mapping) => {
  each(mapping, m => {
    Mousetrap.bind(m[0], m[1])
  })
}

export let stopKeysTracking = () => {

}
