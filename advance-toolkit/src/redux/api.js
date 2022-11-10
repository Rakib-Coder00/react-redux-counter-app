import { updateError, updateStart, updateSuccess } from "./features/userSlice"
import axios from 'axios'

export const updateUser = async (user, dispatch) => {
    dispatch(updateStart())
    try {
        const res = await axios.post('http://localhost:5000/users/1/update', user)
        dispatch(updateSuccess(res.data))
    } catch (error) {
        dispatch(updateError())
    }
}