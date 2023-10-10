import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

import UserDetails from "../UserDetails"
import RenameBtn from "../RenameUser"
import { setGetProfile } from "../../redux/profileInfoSlice"

export default function User() {

    const token = useSelector(state => state.userToken.token)
    const profile = useSelector((state) => state.profile)
    console.log(profile, "user")
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchInfoUser = async () => {
            try {
                const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                const data = await response.json()
                console.log(data, "userdata")
                dispatch(setGetProfile( data.body))
            } catch (err) {
                console.log(err)
            }
        }
        fetchInfoUser()
    }, [token,dispatch])//per recuoerare il token che e fouri dallo scope

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{profile.firstName} {profile.lastName}</h1>
                <RenameBtn />
            </div>
            <h2 className="sr-only">Accounts</h2>
            <UserDetails
                title="Checking"
                x="x8349"
                amount="$2,082.79"
                balance="Available"
            />
            <UserDetails
                title="Savings"
                x="x6712"
                amount="$10,928.42"
                balance="Available"
            />
            <UserDetails
                title="Credit Card"
                x="x8349"
                amount="$184.30"
                balance="Current"
            />
        </main>
    )





}