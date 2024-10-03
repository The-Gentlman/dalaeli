"use client"; // Add this at the very top

import React, { useEffect, useState } from "react";
import { Layout, Row } from "antd";

const Footer = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <Layout.Footer className="text-center p-0 h-9 w-full">
            <Row
                justify="center"
                align="middle"
                className="h-full"
                style={{ direction: "ltr" }}
            >
                © 2023-{new Date().getFullYear()} PIDEMCO | All Rights reserved.
            </Row>
        </Layout.Footer>
    );
};

export default Footer;
