import API from '../../api/client'


export const FETCH_SEARCH_DATA = 'FETCH_SEARCH_DATA'

const api = new API()

export default (persons, search) => {
  return (dispatch) => {

  api.get(persons, search)
    .then((result) => {
      dispatch({
        type: FETCH_SEARCH_DATA,
        payload: result.body
      })
    })
    .catch((error) => {
      // todo implement error handling for api call
    console.log('Sorry, something went wrong ')
    })
  }
}
