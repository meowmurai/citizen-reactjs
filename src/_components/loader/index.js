import { DotPulse } from "./elements"

export const ThreeDots = ({show}) => {
    if(!show) return <></>

    return (
        <DotPulse/>
    )
}