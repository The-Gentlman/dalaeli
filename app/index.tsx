import { ReactNode } from "react";
import { TransitionComponent } from "./Transition";
import dynamic from "next/dynamic";
import Layout from "./layout";

const Navbar = dynamic(() => import("./navbar"), {
    ssr: false,
});


type Props = {
    children: ReactNode;
    navbar?: boolean;
    footer?: boolean;
};

const RootLayout = ({ children, navbar = true }: Props) => {
    return (
        <TransitionComponent>
            <Layout>
                {navbar && <Navbar />}
                <main>{children}</main>
                <Navbar />
            </Layout>
        </TransitionComponent>
    );
};

export default RootLayout;
// export default RootLayout
