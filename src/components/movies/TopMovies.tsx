import * as React from "react"
import { MdSearch } from "react-icons/md"

import { DEFAULT_ICON_SIZE } from "../../util/values"

export default class TopMovies extends React.Component {
    render() {
        return (
            <div className="top-movies-container">
                <div className="header-and-search-container">
                    <div className="header-container">
                        <h2>Top rated movies</h2>
                    </div>
                    <div className="search-btn-container">
                        <MdSearch
                            size={ DEFAULT_ICON_SIZE }
                            className="search-btn"
                        />
                    </div>
                </div>
            </div>
        )
    }
}
