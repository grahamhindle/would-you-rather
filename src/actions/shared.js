import { getInitialData } from '../Utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { getAuthedUser } from './authedUser'

const AUTHED_ID = 'sarahedo'


export function handleInitialData(){
  return (dispatch) => {
      return getInitialData()
        .then (({users, questions})=> {
          dispatch(receiveUsers(users))
          dispatch(receiveQuestions(questions))
          dispatch(getAuthedUser(AUTHED_ID))
        })
  }
}
