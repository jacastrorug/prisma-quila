import React from "react";

const Loader = () => {

    return (
        <div class="loader-wrap">
            <div class="preloader">
                <div class="preloader-close">Preloader Close</div>
                <div id="handle-preloader" class="handle-preloader">
                    <div class="animation-preloader">
                        <div class="spinner"></div>
                        <div class="txt-loading">
                            <span data-text-preloader="p" class="letters-loading">
                                p
                        </span>
                            <span data-text-preloader="r" class="letters-loading">
                                r
                        </span>
                            <span data-text-preloader="i" class="letters-loading">
                                i
                        </span>
                            <span data-text-preloader="s" class="letters-loading">
                                s
                        </span>
                            <span data-text-preloader="m" class="letters-loading">
                                a
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Loader;