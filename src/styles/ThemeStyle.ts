import { ThemeState } from "../store/themeSlice";

export const themeStyles = (mode: ThemeState["value"]) => {
    return {
        palette: {
            background: {
                paper: (mode === "light") ? '#gray' : '#161b22',
                default: (mode === "light") ? '#fafafa' : '#121212',
            },
            mode: mode,
        }
    }
}