import { useRecoilState } from "recoil";
import { editorConfig } from "../store/atoms";

const useConfig = () => {
    const [config, setConfig] = useRecoilState(editorConfig);

    return {
        config,
        setConfig
    }
}

export default useConfig;