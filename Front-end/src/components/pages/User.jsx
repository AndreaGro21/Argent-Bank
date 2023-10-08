
import {  useSelector } from "react-redux"
import UserDetails from "../UserDetails"
import RenameBtn from "../RenameUser"


export default function User() {
    /* const [nickName, setNickName] = useState("") */
    const profile = useSelector((state) => state.profile)
    console.log(profile)

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{profile.firstName}</h1>
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