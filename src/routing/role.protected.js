import { useSelector } from "react-redux"

export function RoleProtected({children, roleAccepted}){
    const accountRole = useSelector(state => state.authentication.user.role)
    
    if(roleAccepted.includes(accountRole)){
        return (
            <>{children}</>
        )
    }
    else{
        return (
            <h2>
                Permission denied
            </h2>
        )
    }
}