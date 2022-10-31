import {useWindowSize} from './useWindowSize'

export function useIsMobile(){
    const size = useWindowSize()
    if(size.width < 820){
        return true
    }
    return false
}


