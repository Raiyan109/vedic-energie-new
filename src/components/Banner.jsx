import React from 'react';
import bg from '../assets/back.jpg'
import styled from 'styled-components';
import styles from './banner.module.css'


const Section = styled.div`
background-image: url(${bg});
height: 100vh;
`

const Banner = () => {
    return (

        <Section >
            <section
                className={styles.sec1}
            >

                <div
                    className="absolute inset-0  bg-transparent bg-gradient-to-r from-black/95 to-white/35 bg-blend-overlay "
                ></div>
                <div
                    className="relative mx-auto  px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >


                    <svg id="sv" className='lg:w-[722px] lg:h-[358px] w-[350px] h-[240px]' viewBox="0 0 722 358" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path d="M368 153.5C368 189.013 354.523 223.427 329.866 250.879C305.208 278.331 270.896 297.122 232.775 304.051C194.654 310.979 155.084 305.616 120.805 288.875C86.5271 272.134 59.6623 245.052 44.7882 212.242C29.9142 179.432 27.9513 142.925 39.234 108.941C50.5167 74.9575 74.3469 45.5994 106.664 25.8694C138.981 6.13944 177.786 -2.74174 216.467 0.739143C255.147 4.22002 291.31 19.8476 318.794 44.9591L289.095 72.0943C268.483 53.2607 241.361 41.54 212.35 38.9294C183.34 36.3187 154.236 42.9796 129.998 57.7771C105.76 72.5746 87.8875 94.5931 79.4255 120.081C70.9635 145.569 72.4357 172.949 83.5912 197.556C94.7467 222.164 114.895 242.476 140.604 255.031C166.313 267.587 195.991 271.609 224.581 266.413C253.172 261.217 278.906 247.123 297.399 226.535C315.892 205.946 326 180.135 326 153.5H368Z" fill="url(#paint0_linear_0_1)" />
                        
                        <path d="M327 153.5C327 117.987 340.477 83.5726 365.134 56.1206C389.792 28.6687 424.104 9.87771 462.225 2.94946C500.346 -3.97879 539.916 1.38436 574.195 18.1251C608.473 34.8658 635.338 61.9483 650.212 94.7581C665.086 127.568 667.049 164.075 655.766 198.059C644.483 232.043 620.653 261.401 588.336 281.131C556.019 300.861 517.214 309.742 478.533 306.261C439.853 302.78 403.69 287.152 376.206 262.041L405.905 234.906C426.517 253.739 453.639 265.46 482.65 268.071C511.66 270.681 540.764 264.02 565.002 249.223C589.24 234.425 607.112 212.407 615.574 186.919C624.037 161.431 622.564 134.051 611.409 109.444C600.253 84.8362 580.105 64.5244 554.396 51.9688C528.687 39.4133 499.009 35.3909 470.419 40.5871C441.828 45.7833 416.094 59.8765 397.601 80.4655C379.108 101.054 369 126.865 369 153.5L327 153.5Z" fill="url(#paint1_linear_0_1)" />
                        <g filter="url(#filter0_d_0_1)">
                            <path d="M240.918 109V77H252.918C255.376 77 257.439 77.4271 259.105 78.2812C260.783 79.1354 262.048 80.3333 262.902 81.875C263.767 83.4062 264.199 85.1927 264.199 87.2344C264.199 89.2865 263.762 91.0677 262.887 92.5781C262.022 94.0781 260.746 95.2396 259.059 96.0625C257.371 96.875 255.298 97.2812 252.84 97.2812H244.293V92.4687H252.059C253.496 92.4687 254.673 92.2708 255.59 91.875C256.507 91.4687 257.184 90.8802 257.621 90.1094C258.069 89.3281 258.293 88.3698 258.293 87.2344C258.293 86.099 258.069 85.1302 257.621 84.3281C257.173 83.5156 256.491 82.901 255.574 82.4844C254.658 82.0573 253.475 81.8438 252.027 81.8438H246.715V109H240.918ZM257.449 94.5L265.371 109H258.902L251.121 94.5H257.449ZM279.566 109.469C277.16 109.469 275.082 108.969 273.332 107.969C271.592 106.958 270.254 105.531 269.316 103.687C268.379 101.833 267.91 99.651 267.91 97.1406C267.91 94.6719 268.379 92.5052 269.316 90.6406C270.264 88.7656 271.587 87.3073 273.285 86.2656C274.983 85.2135 276.978 84.6875 279.27 84.6875C280.749 84.6875 282.145 84.9271 283.457 85.4062C284.78 85.875 285.947 86.6042 286.957 87.5937C287.978 88.5833 288.78 89.8437 289.363 91.375C289.947 92.8958 290.238 94.7083 290.238 96.8125V98.5469H270.566V94.7344H284.816C284.806 93.651 284.572 92.6875 284.113 91.8437C283.655 90.9896 283.014 90.3177 282.191 89.8281C281.379 89.3385 280.431 89.0937 279.348 89.0937C278.191 89.0937 277.176 89.375 276.301 89.9375C275.426 90.4896 274.743 91.2187 274.254 92.125C273.775 93.0208 273.53 94.0052 273.52 95.0781V98.4062C273.52 99.8021 273.775 101 274.285 102C274.796 102.99 275.509 103.75 276.426 104.281C277.342 104.802 278.415 105.062 279.645 105.062C280.467 105.062 281.212 104.948 281.879 104.719C282.546 104.479 283.124 104.13 283.613 103.672C284.103 103.214 284.473 102.646 284.723 101.969L290.004 102.562C289.671 103.958 289.035 105.177 288.098 106.219C287.171 107.25 285.983 108.052 284.535 108.625C283.087 109.187 281.431 109.469 279.566 109.469ZM313.992 91.3438L308.836 91.9062C308.69 91.3854 308.435 90.8958 308.07 90.4375C307.716 89.9792 307.237 89.6094 306.633 89.3281C306.029 89.0469 305.289 88.9062 304.414 88.9062C303.237 88.9062 302.247 89.1615 301.445 89.6719C300.654 90.1823 300.263 90.8437 300.273 91.6562C300.263 92.3542 300.518 92.9219 301.039 93.3594C301.57 93.7969 302.445 94.1562 303.664 94.4375L307.758 95.3125C310.029 95.8021 311.716 96.5781 312.82 97.6406C313.935 98.7031 314.497 100.094 314.508 101.812C314.497 103.323 314.055 104.656 313.18 105.812C312.315 106.958 311.112 107.854 309.57 108.5C308.029 109.146 306.258 109.469 304.258 109.469C301.32 109.469 298.956 108.854 297.164 107.625C295.372 106.385 294.305 104.661 293.961 102.453L299.477 101.922C299.727 103.005 300.258 103.823 301.07 104.375C301.883 104.927 302.94 105.203 304.242 105.203C305.586 105.203 306.664 104.927 307.477 104.375C308.299 103.823 308.711 103.141 308.711 102.328C308.711 101.641 308.445 101.073 307.914 100.625C307.393 100.177 306.581 99.8333 305.477 99.5937L301.383 98.7344C299.081 98.2552 297.378 97.4479 296.273 96.3125C295.169 95.1667 294.622 93.7187 294.633 91.9687C294.622 90.4896 295.023 89.2083 295.836 88.125C296.659 87.0312 297.799 86.1875 299.258 85.5937C300.727 84.9896 302.419 84.6875 304.336 84.6875C307.148 84.6875 309.362 85.2865 310.977 86.4844C312.602 87.6823 313.607 89.3021 313.992 91.3438ZM319.172 118V85H324.734V88.9687H325.063C325.354 88.3854 325.766 87.7656 326.297 87.1094C326.828 86.4427 327.547 85.875 328.453 85.4062C329.359 84.9271 330.516 84.6875 331.922 84.6875C333.776 84.6875 335.448 85.1615 336.938 86.1094C338.438 87.0469 339.625 88.4375 340.5 90.2812C341.385 92.1146 341.828 94.3646 341.828 97.0312C341.828 99.6667 341.396 101.906 340.531 103.75C339.667 105.594 338.49 107 337 107.969C335.51 108.938 333.823 109.422 331.938 109.422C330.563 109.422 329.422 109.193 328.516 108.734C327.609 108.276 326.88 107.724 326.328 107.078C325.786 106.422 325.365 105.802 325.063 105.219H324.828V118H319.172ZM324.719 97C324.719 98.5521 324.938 99.9115 325.375 101.078C325.823 102.245 326.464 103.156 327.297 103.812C328.141 104.458 329.161 104.781 330.359 104.781C331.609 104.781 332.656 104.448 333.5 103.781C334.344 103.104 334.979 102.182 335.406 101.016C335.844 99.8385 336.063 98.5 336.063 97C336.063 95.5104 335.849 94.1875 335.422 93.0312C334.995 91.875 334.359 90.9687 333.516 90.3125C332.672 89.6562 331.62 89.3281 330.359 89.3281C329.151 89.3281 328.125 89.6458 327.281 90.2812C326.438 90.9167 325.797 91.8073 325.359 92.9531C324.932 94.099 324.719 95.4479 324.719 97ZM357.141 109.469C354.797 109.469 352.766 108.953 351.047 107.922C349.328 106.891 347.995 105.448 347.047 103.594C346.109 101.74 345.641 99.5729 345.641 97.0937C345.641 94.6146 346.109 92.4427 347.047 90.5781C347.995 88.7135 349.328 87.2656 351.047 86.2344C352.766 85.2031 354.797 84.6875 357.141 84.6875C359.484 84.6875 361.516 85.2031 363.234 86.2344C364.953 87.2656 366.281 88.7135 367.219 90.5781C368.167 92.4427 368.641 94.6146 368.641 97.0937C368.641 99.5729 368.167 101.74 367.219 103.594C366.281 105.448 364.953 106.891 363.234 107.922C361.516 108.953 359.484 109.469 357.141 109.469ZM357.172 104.937C358.443 104.937 359.505 104.589 360.359 103.891C361.214 103.182 361.849 102.234 362.266 101.047C362.693 99.8594 362.906 98.5365 362.906 97.0781C362.906 95.6094 362.693 94.2812 362.266 93.0937C361.849 91.8958 361.214 90.9427 360.359 90.2344C359.505 89.526 358.443 89.1719 357.172 89.1719C355.87 89.1719 354.786 89.526 353.922 90.2344C353.068 90.9427 352.427 91.8958 352 93.0937C351.583 94.2812 351.375 95.6094 351.375 97.0781C351.375 98.5365 351.583 99.8594 352 101.047C352.427 102.234 353.068 103.182 353.922 103.891C354.786 104.589 355.87 104.937 357.172 104.937ZM379.098 94.9375V109H373.441V85H378.848V89.0781H379.129C379.681 87.7344 380.561 86.6667 381.77 85.875C382.988 85.0833 384.493 84.6875 386.285 84.6875C387.941 84.6875 389.384 85.0417 390.613 85.75C391.853 86.4583 392.811 87.4844 393.488 88.8281C394.176 90.1719 394.514 91.8021 394.504 93.7187V109H388.848V94.5937C388.848 92.9896 388.431 91.7344 387.598 90.8281C386.775 89.9219 385.634 89.4687 384.176 89.4687C383.186 89.4687 382.306 89.6875 381.535 90.125C380.775 90.5521 380.176 91.1719 379.738 91.9844C379.311 92.7969 379.098 93.7812 379.098 94.9375ZM419.223 91.3438L414.066 91.9062C413.921 91.3854 413.665 90.8958 413.301 90.4375C412.947 89.9792 412.467 89.6094 411.863 89.3281C411.259 89.0469 410.52 88.9062 409.645 88.9062C408.467 88.9062 407.478 89.1615 406.676 89.6719C405.884 90.1823 405.493 90.8437 405.504 91.6562C405.493 92.3542 405.749 92.9219 406.27 93.3594C406.801 93.7969 407.676 94.1562 408.895 94.4375L412.988 95.3125C415.259 95.8021 416.947 96.5781 418.051 97.6406C419.165 98.7031 419.728 100.094 419.738 101.812C419.728 103.323 419.285 104.656 418.41 105.812C417.546 106.958 416.342 107.854 414.801 108.5C413.259 109.146 411.488 109.469 409.488 109.469C406.551 109.469 404.186 108.854 402.395 107.625C400.603 106.385 399.535 104.661 399.191 102.453L404.707 101.922C404.957 103.005 405.488 103.823 406.301 104.375C407.113 104.927 408.171 105.203 409.473 105.203C410.816 105.203 411.895 104.927 412.707 104.375C413.53 103.823 413.941 103.141 413.941 102.328C413.941 101.641 413.676 101.073 413.145 100.625C412.624 100.177 411.811 99.8333 410.707 99.5937L406.613 98.7344C404.311 98.2552 402.608 97.4479 401.504 96.3125C400.4 95.1667 399.853 93.7187 399.863 91.9687C399.853 90.4896 400.254 89.2083 401.066 88.125C401.889 87.0312 403.03 86.1875 404.488 85.5937C405.957 84.9896 407.65 84.6875 409.566 84.6875C412.379 84.6875 414.592 85.2865 416.207 86.4844C417.832 87.6823 418.837 89.3021 419.223 91.3438ZM424.402 109V85H430.059V109H424.402ZM427.246 81.5938C426.35 81.5938 425.579 81.2969 424.934 80.7031C424.288 80.099 423.965 79.375 423.965 78.5312C423.965 77.6771 424.288 76.9531 424.934 76.3594C425.579 75.7552 426.35 75.4531 427.246 75.4531C428.152 75.4531 428.923 75.7552 429.559 76.3594C430.204 76.9531 430.527 77.6771 430.527 78.5312C430.527 79.375 430.204 80.099 429.559 80.7031C428.923 81.2969 428.152 81.5938 427.246 81.5938ZM436.125 109V77H441.781V88.9687H442.016C442.307 88.3854 442.719 87.7656 443.25 87.1094C443.781 86.4427 444.5 85.875 445.406 85.4062C446.313 84.9271 447.469 84.6875 448.875 84.6875C450.729 84.6875 452.401 85.1615 453.891 86.1094C455.391 87.0469 456.578 88.4375 457.453 90.2812C458.339 92.1146 458.781 94.3646 458.781 97.0312C458.781 99.6667 458.349 101.906 457.484 103.75C456.62 105.594 455.443 107 453.953 107.969C452.464 108.938 450.776 109.422 448.891 109.422C447.516 109.422 446.375 109.193 445.469 108.734C444.563 108.276 443.833 107.724 443.281 107.078C442.74 106.422 442.318 105.802 442.016 105.219H441.688V109H436.125ZM441.672 97C441.672 98.5521 441.891 99.9115 442.328 101.078C442.776 102.245 443.417 103.156 444.25 103.812C445.094 104.458 446.115 104.781 447.313 104.781C448.563 104.781 449.609 104.448 450.453 103.781C451.297 103.104 451.932 102.182 452.359 101.016C452.797 99.8385 453.016 98.5 453.016 97C453.016 95.5104 452.802 94.1875 452.375 93.0312C451.948 91.875 451.313 90.9687 450.469 90.3125C449.625 89.6562 448.573 89.3281 447.313 89.3281C446.104 89.3281 445.078 89.6458 444.234 90.2812C443.391 90.9167 442.75 91.8073 442.313 92.9531C441.885 94.099 441.672 95.4479 441.672 97ZM469.246 77V109H463.59V77H469.246ZM485.687 109.469C483.281 109.469 481.203 108.969 479.453 107.969C477.714 106.958 476.375 105.531 475.438 103.687C474.5 101.833 474.031 99.651 474.031 97.1406C474.031 94.6719 474.5 92.5052 475.438 90.6406C476.385 88.7656 477.708 87.3073 479.406 86.2656C481.104 85.2135 483.099 84.6875 485.391 84.6875C486.87 84.6875 488.266 84.9271 489.578 85.4062C490.901 85.875 492.068 86.6042 493.078 87.5937C494.099 88.5833 494.901 89.8437 495.484 91.375C496.068 92.8958 496.359 94.7083 496.359 96.8125V98.5469H476.688V94.7344H490.938C490.927 93.651 490.693 92.6875 490.234 91.8437C489.776 90.9896 489.135 90.3177 488.312 89.8281C487.5 89.3385 486.552 89.0937 485.469 89.0937C484.313 89.0937 483.297 89.375 482.422 89.9375C481.547 90.4896 480.865 91.2187 480.375 92.125C479.896 93.0208 479.651 94.0052 479.641 95.0781V98.4062C479.641 99.8021 479.896 101 480.406 102C480.917 102.99 481.63 103.75 482.547 104.281C483.464 104.802 484.536 105.062 485.766 105.062C486.589 105.062 487.333 104.948 488 104.719C488.667 104.479 489.245 104.13 489.734 103.672C490.224 103.214 490.594 102.646 490.844 101.969L496.125 102.562C495.792 103.958 495.156 105.177 494.219 106.219C493.292 107.25 492.104 108.052 490.656 108.625C489.208 109.187 487.552 109.469 485.687 109.469ZM480.518 169H474.33L485.596 137H492.752L504.033 169H497.846L489.299 143.562H489.049L480.518 169ZM480.721 156.453H497.596V161.109H480.721V156.453ZM513.654 154.937V169H507.998V145H513.404V149.078H513.686C514.238 147.734 515.118 146.667 516.326 145.875C517.545 145.083 519.05 144.688 520.842 144.688C522.498 144.688 523.941 145.042 525.17 145.75C526.41 146.458 527.368 147.484 528.045 148.828C528.732 150.172 529.071 151.802 529.061 153.719V169H523.404V154.594C523.404 152.99 522.988 151.734 522.154 150.828C521.331 149.922 520.191 149.469 518.732 149.469C517.743 149.469 516.863 149.687 516.092 150.125C515.331 150.552 514.732 151.172 514.295 151.984C513.868 152.797 513.654 153.781 513.654 154.937ZM543.717 169.422C541.831 169.422 540.144 168.938 538.654 167.969C537.165 167 535.988 165.594 535.123 163.75C534.258 161.906 533.826 159.667 533.826 157.031C533.826 154.365 534.264 152.115 535.139 150.281C536.024 148.437 537.217 147.047 538.717 146.109C540.217 145.161 541.889 144.688 543.732 144.688C545.139 144.688 546.295 144.927 547.201 145.406C548.107 145.875 548.826 146.443 549.357 147.109C549.889 147.766 550.3 148.385 550.592 148.969H550.826V137H556.498V169H550.936V165.219H550.592C550.3 165.802 549.878 166.422 549.326 167.078C548.774 167.724 548.045 168.276 547.139 168.734C546.232 169.193 545.092 169.422 543.717 169.422ZM545.295 164.781C546.493 164.781 547.514 164.458 548.357 163.812C549.201 163.156 549.842 162.245 550.279 161.078C550.717 159.911 550.936 158.552 550.936 157C550.936 155.448 550.717 154.099 550.279 152.953C549.852 151.807 549.217 150.917 548.373 150.281C547.54 149.646 546.514 149.328 545.295 149.328C544.035 149.328 542.982 149.656 542.139 150.312C541.295 150.969 540.66 151.875 540.232 153.031C539.805 154.187 539.592 155.51 539.592 157C539.592 158.5 539.805 159.839 540.232 161.016C540.67 162.182 541.311 163.104 542.154 163.781C543.008 164.448 544.055 164.781 545.295 164.781Z" fill="#FBFF4A" />
                            <path d="M206.928 147.797H201.084C200.917 146.839 200.61 145.99 200.162 145.25C199.714 144.5 199.157 143.865 198.49 143.344C197.824 142.823 197.063 142.432 196.209 142.172C195.365 141.901 194.454 141.766 193.475 141.766C191.735 141.766 190.193 142.203 188.85 143.078C187.506 143.943 186.454 145.214 185.693 146.891C184.933 148.557 184.553 150.594 184.553 153C184.553 155.448 184.933 157.51 185.693 159.187C186.464 160.854 187.516 162.115 188.85 162.969C190.193 163.812 191.73 164.234 193.459 164.234C194.417 164.234 195.313 164.109 196.146 163.859C196.99 163.599 197.745 163.219 198.412 162.719C199.089 162.219 199.657 161.604 200.115 160.875C200.584 160.146 200.907 159.312 201.084 158.375L206.928 158.406C206.709 159.927 206.235 161.354 205.506 162.688C204.787 164.021 203.844 165.198 202.678 166.219C201.511 167.229 200.146 168.021 198.584 168.594C197.021 169.156 195.287 169.437 193.381 169.437C190.568 169.437 188.058 168.786 185.85 167.484C183.641 166.182 181.902 164.302 180.631 161.844C179.36 159.385 178.725 156.437 178.725 153C178.725 149.552 179.365 146.604 180.646 144.156C181.928 141.698 183.673 139.818 185.881 138.516C188.089 137.214 190.589 136.562 193.381 136.562C195.162 136.562 196.818 136.812 198.35 137.312C199.881 137.812 201.245 138.547 202.443 139.516C203.641 140.474 204.626 141.651 205.396 143.047C206.178 144.432 206.688 146.016 206.928 147.797ZM222.455 169.469C220.111 169.469 218.08 168.953 216.361 167.922C214.643 166.891 213.309 165.448 212.361 163.594C211.424 161.74 210.955 159.573 210.955 157.094C210.955 154.615 211.424 152.443 212.361 150.578C213.309 148.714 214.643 147.266 216.361 146.234C218.08 145.203 220.111 144.688 222.455 144.688C224.799 144.688 226.83 145.203 228.549 146.234C230.268 147.266 231.596 148.714 232.533 150.578C233.481 152.443 233.955 154.615 233.955 157.094C233.955 159.573 233.481 161.74 232.533 163.594C231.596 165.448 230.268 166.891 228.549 167.922C226.83 168.953 224.799 169.469 222.455 169.469ZM222.486 164.937C223.757 164.937 224.82 164.589 225.674 163.891C226.528 163.182 227.163 162.234 227.58 161.047C228.007 159.859 228.221 158.536 228.221 157.078C228.221 155.609 228.007 154.281 227.58 153.094C227.163 151.896 226.528 150.943 225.674 150.234C224.82 149.526 223.757 149.172 222.486 149.172C221.184 149.172 220.101 149.526 219.236 150.234C218.382 150.943 217.742 151.896 217.314 153.094C216.898 154.281 216.689 155.609 216.689 157.078C216.689 158.536 216.898 159.859 217.314 161.047C217.742 162.234 218.382 163.182 219.236 163.891C220.101 164.589 221.184 164.937 222.486 164.937ZM244.412 154.937V169H238.756V145H244.162V149.078H244.443C244.995 147.734 245.876 146.667 247.084 145.875C248.303 145.083 249.808 144.688 251.6 144.688C253.256 144.688 254.699 145.042 255.928 145.75C257.167 146.458 258.126 147.484 258.803 148.828C259.49 150.172 259.829 151.802 259.818 153.719V169H254.162V154.594C254.162 152.99 253.745 151.734 252.912 150.828C252.089 149.922 250.949 149.469 249.49 149.469C248.501 149.469 247.62 149.687 246.85 150.125C246.089 150.552 245.49 151.172 245.053 151.984C244.626 152.797 244.412 153.781 244.412 154.937ZM284.537 151.344L279.381 151.906C279.235 151.385 278.98 150.896 278.615 150.438C278.261 149.979 277.782 149.609 277.178 149.328C276.574 149.047 275.834 148.906 274.959 148.906C273.782 148.906 272.792 149.161 271.99 149.672C271.199 150.182 270.808 150.844 270.818 151.656C270.808 152.354 271.063 152.922 271.584 153.359C272.115 153.797 272.99 154.156 274.209 154.438L278.303 155.312C280.574 155.802 282.261 156.578 283.365 157.641C284.48 158.703 285.042 160.094 285.053 161.812C285.042 163.323 284.6 164.656 283.725 165.812C282.86 166.958 281.657 167.854 280.115 168.5C278.574 169.146 276.803 169.469 274.803 169.469C271.865 169.469 269.501 168.854 267.709 167.625C265.917 166.385 264.85 164.661 264.506 162.453L270.021 161.922C270.271 163.005 270.803 163.823 271.615 164.375C272.428 164.927 273.485 165.203 274.787 165.203C276.131 165.203 277.209 164.927 278.021 164.375C278.844 163.823 279.256 163.141 279.256 162.328C279.256 161.641 278.99 161.073 278.459 160.625C277.938 160.177 277.126 159.833 276.021 159.594L271.928 158.734C269.626 158.255 267.923 157.448 266.818 156.312C265.714 155.167 265.167 153.719 265.178 151.969C265.167 150.49 265.568 149.208 266.381 148.125C267.204 147.031 268.344 146.187 269.803 145.594C271.271 144.99 272.964 144.688 274.881 144.688C277.693 144.688 279.907 145.286 281.521 146.484C283.146 147.682 284.152 149.302 284.537 151.344ZM305.014 158.906V145H310.67V169H305.186V164.734H304.936C304.394 166.078 303.503 167.177 302.264 168.031C301.035 168.885 299.519 169.313 297.717 169.313C296.144 169.313 294.753 168.964 293.545 168.266C292.347 167.557 291.41 166.531 290.732 165.188C290.055 163.833 289.717 162.198 289.717 160.281V145H295.373V159.406C295.373 160.927 295.79 162.135 296.623 163.031C297.456 163.927 298.55 164.375 299.904 164.375C300.738 164.375 301.545 164.172 302.326 163.766C303.107 163.359 303.748 162.755 304.248 161.953C304.758 161.141 305.014 160.125 305.014 158.906ZM316.486 169V145H321.893V149.078H322.174C322.674 147.703 323.502 146.63 324.658 145.859C325.814 145.078 327.195 144.688 328.799 144.688C330.424 144.688 331.794 145.083 332.908 145.875C334.033 146.656 334.825 147.724 335.283 149.078H335.533C336.064 147.745 336.96 146.682 338.221 145.891C339.492 145.089 340.997 144.688 342.736 144.688C344.945 144.688 346.747 145.385 348.143 146.781C349.538 148.177 350.236 150.214 350.236 152.891V169H344.564V153.766C344.564 152.276 344.169 151.187 343.377 150.5C342.585 149.802 341.617 149.453 340.471 149.453C339.106 149.453 338.038 149.88 337.268 150.734C336.507 151.578 336.127 152.677 336.127 154.031V169H330.58V153.531C330.58 152.292 330.205 151.302 329.455 150.562C328.715 149.823 327.747 149.453 326.549 149.453C325.736 149.453 324.997 149.661 324.33 150.078C323.663 150.484 323.132 151.062 322.736 151.812C322.34 152.552 322.143 153.417 322.143 154.406V169H316.486ZM355.975 178V145H361.537V148.969H361.865C362.157 148.385 362.568 147.766 363.1 147.109C363.631 146.443 364.35 145.875 365.256 145.406C366.162 144.927 367.318 144.688 368.725 144.688C370.579 144.688 372.251 145.161 373.74 146.109C375.24 147.047 376.428 148.437 377.303 150.281C378.188 152.115 378.631 154.365 378.631 157.031C378.631 159.667 378.199 161.906 377.334 163.75C376.469 165.594 375.292 167 373.803 167.969C372.313 168.938 370.626 169.422 368.74 169.422C367.365 169.422 366.225 169.193 365.318 168.734C364.412 168.276 363.683 167.724 363.131 167.078C362.589 166.422 362.167 165.802 361.865 165.219H361.631V178H355.975ZM361.521 157C361.521 158.552 361.74 159.911 362.178 161.078C362.626 162.245 363.266 163.156 364.1 163.812C364.943 164.458 365.964 164.781 367.162 164.781C368.412 164.781 369.459 164.448 370.303 163.781C371.146 163.104 371.782 162.182 372.209 161.016C372.646 159.839 372.865 158.5 372.865 157C372.865 155.51 372.652 154.187 372.225 153.031C371.798 151.875 371.162 150.969 370.318 150.312C369.475 149.656 368.423 149.328 367.162 149.328C365.954 149.328 364.928 149.646 364.084 150.281C363.24 150.917 362.6 151.807 362.162 152.953C361.735 154.099 361.521 155.448 361.521 157ZM395.459 145V149.375H381.662V145H395.459ZM385.068 139.25H390.725V161.781C390.725 162.542 390.839 163.125 391.068 163.531C391.308 163.927 391.62 164.198 392.006 164.344C392.391 164.49 392.818 164.562 393.287 164.562C393.641 164.562 393.964 164.536 394.256 164.484C394.558 164.432 394.787 164.385 394.943 164.344L395.896 168.766C395.594 168.87 395.162 168.984 394.6 169.109C394.048 169.234 393.37 169.307 392.568 169.328C391.152 169.37 389.876 169.156 388.74 168.687C387.605 168.208 386.704 167.469 386.037 166.469C385.381 165.469 385.058 164.219 385.068 162.719V139.25ZM400.189 169V145H405.846V169H400.189ZM403.033 141.594C402.137 141.594 401.367 141.297 400.721 140.703C400.075 140.099 399.752 139.375 399.752 138.531C399.752 137.677 400.075 136.953 400.721 136.359C401.367 135.755 402.137 135.453 403.033 135.453C403.939 135.453 404.71 135.755 405.346 136.359C405.992 136.953 406.314 137.677 406.314 138.531C406.314 139.375 405.992 140.099 405.346 140.703C404.71 141.297 403.939 141.594 403.033 141.594ZM422.131 169.469C419.787 169.469 417.756 168.953 416.037 167.922C414.318 166.891 412.985 165.448 412.037 163.594C411.1 161.74 410.631 159.573 410.631 157.094C410.631 154.615 411.1 152.443 412.037 150.578C412.985 148.714 414.318 147.266 416.037 146.234C417.756 145.203 419.787 144.688 422.131 144.688C424.475 144.688 426.506 145.203 428.225 146.234C429.943 147.266 431.271 148.714 432.209 150.578C433.157 152.443 433.631 154.615 433.631 157.094C433.631 159.573 433.157 161.74 432.209 163.594C431.271 165.448 429.943 166.891 428.225 167.922C426.506 168.953 424.475 169.469 422.131 169.469ZM422.162 164.937C423.433 164.937 424.495 164.589 425.35 163.891C426.204 163.182 426.839 162.234 427.256 161.047C427.683 159.859 427.896 158.536 427.896 157.078C427.896 155.609 427.683 154.281 427.256 153.094C426.839 151.896 426.204 150.943 425.35 150.234C424.495 149.526 423.433 149.172 422.162 149.172C420.86 149.172 419.777 149.526 418.912 150.234C418.058 150.943 417.417 151.896 416.99 153.094C416.574 154.281 416.365 155.609 416.365 157.078C416.365 158.536 416.574 159.859 416.99 161.047C417.417 162.234 418.058 163.182 418.912 163.891C419.777 164.589 420.86 164.937 422.162 164.937ZM444.088 154.937V169H438.432V145H443.838V149.078H444.119C444.671 147.734 445.551 146.667 446.76 145.875C447.979 145.083 449.484 144.688 451.275 144.688C452.932 144.688 454.374 145.042 455.604 145.75C456.843 146.458 457.801 147.484 458.479 148.828C459.166 150.172 459.505 151.802 459.494 153.719V169H453.838V154.594C453.838 152.99 453.421 151.734 452.588 150.828C451.765 149.922 450.624 149.469 449.166 149.469C448.176 149.469 447.296 149.687 446.525 150.125C445.765 150.552 445.166 151.172 444.729 151.984C444.301 152.797 444.088 153.781 444.088 154.937ZM254.561 229V197H266.561C269.019 197 271.081 197.458 272.748 198.375C274.425 199.292 275.691 200.552 276.545 202.156C277.41 203.75 277.842 205.562 277.842 207.594C277.842 209.646 277.41 211.469 276.545 213.063C275.68 214.656 274.404 215.911 272.717 216.828C271.029 217.734 268.951 218.187 266.482 218.187H258.529V213.422H265.701C267.139 213.422 268.316 213.172 269.232 212.672C270.149 212.172 270.826 211.484 271.264 210.609C271.712 209.734 271.936 208.729 271.936 207.594C271.936 206.458 271.712 205.458 271.264 204.594C270.826 203.729 270.144 203.057 269.217 202.578C268.3 202.089 267.118 201.844 265.67 201.844H260.357V229H254.561ZM282.627 229V205H288.111V209H288.361C288.799 207.615 289.549 206.547 290.611 205.797C291.684 205.036 292.908 204.656 294.283 204.656C294.596 204.656 294.945 204.672 295.33 204.703C295.726 204.724 296.054 204.76 296.314 204.812V210.016C296.075 209.932 295.695 209.859 295.174 209.797C294.663 209.724 294.169 209.687 293.689 209.687C292.658 209.687 291.731 209.911 290.908 210.359C290.096 210.797 289.455 211.406 288.986 212.187C288.518 212.969 288.283 213.87 288.283 214.891V229H282.627ZM309.553 229.469C307.209 229.469 305.178 228.953 303.459 227.922C301.74 226.891 300.407 225.448 299.459 223.594C298.521 221.74 298.053 219.573 298.053 217.094C298.053 214.615 298.521 212.443 299.459 210.578C300.407 208.714 301.74 207.266 303.459 206.234C305.178 205.203 307.209 204.688 309.553 204.688C311.896 204.688 313.928 205.203 315.646 206.234C317.365 207.266 318.693 208.714 319.631 210.578C320.579 212.443 321.053 214.615 321.053 217.094C321.053 219.573 320.579 221.74 319.631 223.594C318.693 225.448 317.365 226.891 315.646 227.922C313.928 228.953 311.896 229.469 309.553 229.469ZM309.584 224.937C310.855 224.937 311.917 224.589 312.771 223.891C313.626 223.182 314.261 222.234 314.678 221.047C315.105 219.859 315.318 218.536 315.318 217.078C315.318 215.609 315.105 214.281 314.678 213.094C314.261 211.896 313.626 210.943 312.771 210.234C311.917 209.526 310.855 209.172 309.584 209.172C308.282 209.172 307.199 209.526 306.334 210.234C305.48 210.943 304.839 211.896 304.412 213.094C303.995 214.281 303.787 215.609 303.787 217.078C303.787 218.536 303.995 219.859 304.412 221.047C304.839 222.234 305.48 223.182 306.334 223.891C307.199 224.589 308.282 224.937 309.584 224.937ZM334.76 229.422C332.874 229.422 331.187 228.938 329.697 227.969C328.208 227 327.031 225.594 326.166 223.75C325.301 221.906 324.869 219.667 324.869 217.031C324.869 214.365 325.307 212.115 326.182 210.281C327.067 208.437 328.26 207.047 329.76 206.109C331.26 205.161 332.932 204.688 334.775 204.688C336.182 204.688 337.338 204.927 338.244 205.406C339.15 205.875 339.869 206.443 340.4 207.109C340.932 207.766 341.343 208.385 341.635 208.969H341.869V197H347.541V229H341.979V225.219H341.635C341.343 225.802 340.921 226.422 340.369 227.078C339.817 227.724 339.088 228.276 338.182 228.734C337.275 229.193 336.135 229.422 334.76 229.422ZM336.338 224.781C337.536 224.781 338.557 224.458 339.4 223.812C340.244 223.156 340.885 222.245 341.322 221.078C341.76 219.911 341.979 218.552 341.979 217C341.979 215.448 341.76 214.099 341.322 212.953C340.895 211.807 340.26 210.917 339.416 210.281C338.583 209.646 337.557 209.328 336.338 209.328C335.077 209.328 334.025 209.656 333.182 210.312C332.338 210.969 331.702 211.875 331.275 213.031C330.848 214.187 330.635 215.51 330.635 217C330.635 218.5 330.848 219.839 331.275 221.016C331.713 222.182 332.354 223.104 333.197 223.781C334.051 224.448 335.098 224.781 336.338 224.781ZM368.865 218.906V205H374.521V229H369.037V224.734H368.787C368.245 226.078 367.355 227.177 366.115 228.031C364.886 228.885 363.37 229.313 361.568 229.313C359.995 229.313 358.605 228.964 357.396 228.266C356.199 227.557 355.261 226.531 354.584 225.188C353.907 223.833 353.568 222.198 353.568 220.281V205H359.225V219.406C359.225 220.927 359.641 222.135 360.475 223.031C361.308 223.927 362.402 224.375 363.756 224.375C364.589 224.375 365.396 224.172 366.178 223.766C366.959 223.359 367.6 222.755 368.1 221.953C368.61 221.141 368.865 220.125 368.865 218.906ZM390.807 229.469C388.411 229.469 386.354 228.943 384.635 227.891C382.926 226.839 381.609 225.385 380.682 223.531C379.765 221.667 379.307 219.521 379.307 217.094C379.307 214.656 379.775 212.505 380.713 210.641C381.65 208.766 382.973 207.307 384.682 206.266C386.4 205.214 388.432 204.688 390.775 204.688C392.723 204.688 394.447 205.047 395.947 205.766C397.458 206.474 398.661 207.479 399.557 208.781C400.452 210.073 400.963 211.583 401.088 213.312H395.682C395.463 212.156 394.942 211.193 394.119 210.422C393.307 209.641 392.218 209.25 390.854 209.25C389.697 209.25 388.682 209.562 387.807 210.187C386.932 210.802 386.249 211.687 385.76 212.844C385.281 214 385.041 215.385 385.041 217C385.041 218.635 385.281 220.042 385.76 221.219C386.239 222.385 386.911 223.286 387.775 223.922C388.65 224.547 389.676 224.859 390.854 224.859C391.687 224.859 392.432 224.703 393.088 224.391C393.755 224.068 394.312 223.604 394.76 223C395.208 222.396 395.515 221.661 395.682 220.797H401.088C400.952 222.495 400.452 224 399.588 225.312C398.723 226.615 397.546 227.635 396.057 228.375C394.567 229.104 392.817 229.469 390.807 229.469ZM417.717 205V209.375H403.92V205H417.717ZM407.326 199.25H412.982V221.781C412.982 222.542 413.097 223.125 413.326 223.531C413.566 223.927 413.878 224.198 414.264 224.344C414.649 224.49 415.076 224.562 415.545 224.562C415.899 224.562 416.222 224.536 416.514 224.484C416.816 224.432 417.045 224.385 417.201 224.344L418.154 228.766C417.852 228.87 417.42 228.984 416.857 229.109C416.305 229.234 415.628 229.307 414.826 229.328C413.41 229.37 412.133 229.156 410.998 228.687C409.863 228.208 408.962 227.469 408.295 226.469C407.639 225.469 407.316 224.219 407.326 222.719V199.25ZM422.447 229V205H428.104V229H422.447ZM425.291 201.594C424.395 201.594 423.624 201.297 422.979 200.703C422.333 200.099 422.01 199.375 422.01 198.531C422.01 197.677 422.333 196.953 422.979 196.359C423.624 195.755 424.395 195.453 425.291 195.453C426.197 195.453 426.968 195.755 427.604 196.359C428.249 196.953 428.572 197.677 428.572 198.531C428.572 199.375 428.249 200.099 427.604 200.703C426.968 201.297 426.197 201.594 425.291 201.594ZM444.389 229.469C442.045 229.469 440.014 228.953 438.295 227.922C436.576 226.891 435.243 225.448 434.295 223.594C433.357 221.74 432.889 219.573 432.889 217.094C432.889 214.615 433.357 212.443 434.295 210.578C435.243 208.714 436.576 207.266 438.295 206.234C440.014 205.203 442.045 204.688 444.389 204.688C446.732 204.688 448.764 205.203 450.482 206.234C452.201 207.266 453.529 208.714 454.467 210.578C455.415 212.443 455.889 214.615 455.889 217.094C455.889 219.573 455.415 221.74 454.467 223.594C453.529 225.448 452.201 226.891 450.482 227.922C448.764 228.953 446.732 229.469 444.389 229.469ZM444.42 224.937C445.691 224.937 446.753 224.589 447.607 223.891C448.462 223.182 449.097 222.234 449.514 221.047C449.941 219.859 450.154 218.536 450.154 217.078C450.154 215.609 449.941 214.281 449.514 213.094C449.097 211.896 448.462 210.943 447.607 210.234C446.753 209.526 445.691 209.172 444.42 209.172C443.118 209.172 442.035 209.526 441.17 210.234C440.316 210.943 439.675 211.896 439.248 213.094C438.831 214.281 438.623 215.609 438.623 217.078C438.623 218.536 438.831 219.859 439.248 221.047C439.675 222.234 440.316 223.182 441.17 223.891C442.035 224.589 443.118 224.937 444.42 224.937ZM466.346 214.937V229H460.689V205H466.096V209.078H466.377C466.929 207.734 467.809 206.667 469.018 205.875C470.236 205.083 471.742 204.688 473.533 204.688C475.189 204.688 476.632 205.042 477.861 205.75C479.101 206.458 480.059 207.484 480.736 208.828C481.424 210.172 481.762 211.802 481.752 213.719V229H476.096V214.594C476.096 212.99 475.679 211.734 474.846 210.828C474.023 209.922 472.882 209.469 471.424 209.469C470.434 209.469 469.554 209.687 468.783 210.125C468.023 210.552 467.424 211.172 466.986 211.984C466.559 212.797 466.346 213.781 466.346 214.937Z" fill="white" />
                        </g>
                        
                        <defs>
                            <filter id="filter0_d_0_1" x="174.725" y="75.4531" width="385.773" height="162.016" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.52 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear_0_1" x1="200" y1="-7.33894e-07" x2="222.5" y2="409.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#579152" />
                                <stop offset="1" stop-color="#E2FC44" stop-opacity="0.29" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_0_1" x1="495" y1="3.75102e-06" x2="380" y2="453.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#E2FC44" stop-opacity="0.5" />
                                <stop offset="1" stop-color="#579052" stop-opacity="0.5" />
                            </linearGradient>
                        </defs>
                        
                    </svg>


                </div>
                    <div className='relative text-yellow text-center text-1xl sm:text-2xl mt-[-130px] sm:mt-[-220px] ml-[0px] sm:ml-[-580px]  block'>Connecting world to green energy solutions and carbon free future.</div>
            </section>

        </Section>
    );
};

export default Banner;
