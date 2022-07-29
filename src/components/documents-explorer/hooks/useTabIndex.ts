import { useRecoilState } from "recoil";
import { tabIndexState } from "../../../store/atoms";

const useTabIndex = () => {
    const [tabIndex, setIndex] = useRecoilState(tabIndexState);

    const setTabIndex = (val: number) => {
        let v = val;

        if (val <= 0 ) {
            v = 0;
        }

        setIndex(v);
    }

    return {
        tabIndex,
        setTabIndex
    }
}

export default useTabIndex;