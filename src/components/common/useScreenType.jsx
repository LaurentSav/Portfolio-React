import {useMediaQuery} from "react-responsive";

export const useScreenType = () => {
    const bigScreen = useMediaQuery({ minWidth: 1440 });
    const medScreen = useMediaQuery({ minWidth: 1265});
    const smlScreen = useMediaQuery({ minWidth: 800});

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