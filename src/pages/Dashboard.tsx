import * as React from "react"

import Navbar from "../components/navigation/Navbar"

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="page dashboard-container">
                <Navbar />
            </div>
        )
    }
}
