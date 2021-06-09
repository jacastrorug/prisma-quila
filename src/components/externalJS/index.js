import React from "react";
import { withPrefix } from "gatsby";
import Helmet from "react-helmet"

const ExternalJS = () => (
    <Helmet>
        <script src={(withPrefix('js/jquery.js'))} type="text/javascript" />
        <script src={(withPrefix('js/popper.min.js'))} type="text/javascript" />
        <script src={(withPrefix('js/bootstrap.min.js'))} type="text/javascript" />
        <script src={(withPrefix('js/owl.js'))} type="text/javascript" />
        <script src={(withPrefix('js/wow.js'))} type="text/javascript" />
        <script src={(withPrefix('js/validation.js'))} type="text/javascript" />
        <script src={(withPrefix('js/jquery.fancybox.js'))} type="text/javascript" />
        <script src={(withPrefix('js/appear.js'))} type="text/javascript" />
        <script src={(withPrefix('js/jquery.countTo.js'))} type="text/javascript" />
        <script src={(withPrefix('js/jquery.nice-select.min.js'))} type="text/javascript" />

        <script src={(withPrefix('js/script.js'))} type="text/javascript" />
    </Helmet>
);

export default ExternalJS;