import { Layout } from "antd";
import { ReactNode } from "react";
import { TransitionComponent } from "./Transition";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./navbar"), {
    ssr: false,
});

const Footer = dynamic(() => import("./footer"), {
    ssr: false,
});

type Props = {
    children: ReactNode;
    navbar?: boolean;
    footer?: boolean;
};

const RootLayout = ({ children, navbar = true, footer = true }: Props) => {
    return (
        <TransitionComponent>
            <Layout>
                {navbar && <Navbar />}
                <main>{children}</main>
                {footer && <Footer />}
                <Navbar />
            </Layout>
        </TransitionComponent>
    );
};

export default RootLayout;
// export default RootLayout
