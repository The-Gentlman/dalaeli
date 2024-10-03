import { Layout } from "antd";
import { TransitionComponent } from "./Transition";
import { LayoutOptions } from "@/types/AppProps";
import classnames from "classnames";
const AppLayout: React.FC<React.PropsWithChildren & { footer?: boolean }> = ({
    children,
    footer = true,
}) => {
    return <TransitionComponent>{children}</TransitionComponent>;
};

export default AppLayout;
