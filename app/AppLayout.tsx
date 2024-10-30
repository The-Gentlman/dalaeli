import { TransitionComponent } from "./Transition";
const AppLayout: React.FC<React.PropsWithChildren & { footer?: boolean }> = ({
    children,
}) => {
    return <TransitionComponent>{children}</TransitionComponent>;
};

export default AppLayout;
