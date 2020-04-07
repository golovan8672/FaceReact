import React from 'react';
import stl from './post.module.scss'

const Post = (props) => {
    return (
        <div className={stl.post}>
            <div className={stl.circle}></div>
            <div className={stl.text}>{props.text}</div>
            <div className={stl.like}>{props.likeCount} <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTAuNzA5IC0xMS41NTUgMTQxLjczMiAxNDEuNzMyIiBoZWlnaHQ9IjE0MS43MzJweCIgaWQ9IkxpdmVsbG9fMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSItMC43MDkgLTExLjU1NSAxNDEuNzMyIDE0MS43MzIiIHdpZHRoPSIxNDEuNzMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJMaXZlbGxvXzgyIj48cGF0aCBkPSJNMTQwLjMxNCwzNy42NTRDMTQwLjMxNCwxNi44NTgsMTIzLjQwMiwwLDEwMi41MzcsMGMtMTMuNzQ0LDAtMjUuNzcsNy4zMTctMzIuMzc5LDE4LjI1NUM2My41NDksNy4zMTcsNTEuNTIxLDAsMzcuNzc3LDAgICBDMTYuOTEyLDAsMCwxNi44NTgsMCwzNy42NTRjMCwxMC44MjEsNC41ODgsMjAuNTcsMTEuOTIyLDI3LjQzOGgtMC4wMWw1NC4wODQsNTEuNTg0YzAuOTkyLDEuMTg4LDIuNDgsMS45NDUsNC4xNDgsMS45NDUgICBjMS41NDUsMCwyLjkzNi0wLjY1MywzLjkyLTEuNjk2bDU0LjM0Ni01MS44MzNoLTAuMDE2QzEzNS43MjksNTguMjI1LDE0MC4zMTQsNDguNDc2LDE0MC4zMTQsMzcuNjU0Ii8+PC9nPjxnIGlkPSJMaXZlbGxvXzFfMV8iLz48L3N2Zz4=" alt="" /> </div>
        </div>
    );
}

export default Post;