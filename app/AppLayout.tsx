import { TransitionComponent } from "./Transition";
const AppLayout: React.FC<React.PropsWithChildren & { footer?: boolean }> = ({
    children,
    footer = true,
}) => {
    return <TransitionComponent>{children}</TransitionComponent>;
};

export default AppLayout;
