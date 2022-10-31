import {useWindowSize} from './useWindowSize'

export function useIsMobile(){
    const size = useWindowSize()
    return size.width < 820
}


