import { useState } from "react";

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false)

    function showModal() {
        setIsShowing(!isShowing)
    }

    return {
        isShowing,
        showModal
    }
}

export default useModal