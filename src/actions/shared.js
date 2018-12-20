import { _getQuestions, _getUsers} from '../Utils/_Data'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser'

const AUTHED_ID = 'sarahedo'


export function handleInitialData(){
  return (dispatch) => {
      return _getUsers()
        .then (({users})=> {
          dispatch(receiveUsers(users))
          dispatch(setAuthedUser(AUTHED_ID))
        })
  }
}
