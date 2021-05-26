import {useMediaQuery} from "react-responsive";

export const useScreenType = () => {
    const bigScreen = useMediaQuery({ minWidth: 1280 });
    const medScreen = useMediaQuery({ minWidth: 600});
    const smlScreen = useMediaQuery({ minWidth: 0});

    if(bigScreen){
        return "big";
    }
    if(medScreen){
        return "med";
    }
    if(smlScreen){
        return "sml";
    }

    return "fullscreen";

}