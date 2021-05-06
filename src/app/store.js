import userReducer from "../app-features/user-features/userSlice"
import { configureStore, getDefaultMiddleware,} from "@reduxjs/toolkit";
import movieReducer from "../app-features/movie-features/movieSlice"

export default configureStore ({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    middleware: getDefaultMiddleware({
        serializable: true,
    })
})