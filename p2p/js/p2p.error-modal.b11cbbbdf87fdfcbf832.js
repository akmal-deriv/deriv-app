(self.webpackChunk_deriv_p2p=self.webpackChunk_deriv_p2p||[]).push([[445],{1939:(n,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>l});var a=r(1799),o=r.n(a),t=r(2609),i=r.n(t)()(o());i.push([n.id,".error-modal__body{padding:0 2.4rem}@media(min-width: 320px)and (max-width: 767px){.error-modal__body{padding:0 1.6rem}}","",{version:3,sources:["webpack://./src/components/modal-manager/modals/error-modal/error-modal.scss"],names:[],mappings:"AAmoBI,mBACI,gBAAA,CA3BJ,+CA0BA,mBAIQ,gBAAA,CAAA",sourcesContent:["/*------------------------------------*\n *  # Constants\n *------------------------------------*/\n\n/* stylelint-disable color-no-hex */\n\n/* COLOR PALETTE */\n\n/* colors */\n$color-black: #0e0e0e;\n$color-black-1: #333333;\n$color-black-3: #151717;\n$color-black-4: #1d1f20;\n$color-black-5: #242828;\n$color-black-6: #3e3e3e;\n$color-black-7: #000000;\n$color-black-8: #323738;\n$color-black-9: #5c5c5c;\n$color-blue: #377cfc;\n$color-blue-1: #0dc2e7;\n$color-blue-2: #2a3052;\n$color-blue-3: #0796e0;\n$color-blue-4: #0677af;\n$color-blue-5: #dfeaff;\n$color-blue-6: #92b8ff;\n$color-blue-7: #182130;\n$color-blue-8: #e6f5ff;\n$color-brown: #664407;\n$color-green: #85acb0;\n$color-green-1: #4bb4b3;\n$color-green-2: #3d9494;\n$color-green-3: #00a79e;\n$color-green-4: #008079;\n$color-green-5: #4bb4b329;\n$color-green-6: #17eabd;\n$color-green-7: #e8fdf8;\n$color-grey: #c2c2c2;\n$color-grey-1: #999999;\n$color-grey-2: #f2f3f4;\n$color-grey-3: #eaeced;\n$color-grey-4: #e6e9e9;\n$color-grey-5: #d6dadb;\n$color-grey-6: #d6d6d6;\n$color-grey-7: #6e6e6e;\n$color-grey-8: #d7d7d7;\n$color_grey-9: #868686;\n$color-grey-10: #919191;\n$color-grey-11: #fafafa;\n$color-grey-12: #f5f7fa;\n$color-grey-13: #2e2e2e;\n$color-orange: #ff6444;\n$color-purple: #722fe4;\n$color-red: #ff444f;\n$color-red-1: #ec3f3f;\n$color-red-2: #cc2e3d;\n$color-red-3: #a32430;\n$color-red-4: #d33636;\n$color-red-5: #eb3e48;\n$color-red-6: #ec3f3f29;\n$color-red-7: #ffe1e3;\n$color-red-8: #661b20;\n$color-red-9: #b33037;\n$color-red-10: #ff444f;\n$color-violet: #4a3871;\n$color-white: #ffffff;\n$color-yellow: #ffad3a;\n$color-yellow-1: #b3760d;\n$color-yellow-2: #ffa912;\n$color-yellow-3: rgba(255, 173, 58, 0.16);\n\n/* status colors */\n$color-status-warning: rgba(255, 173, 58, 0.16);\n$color-status-information: rgba(55, 124, 252, 0.16);\n$color-status-announcement: rgba(75, 180, 179, 0.16);\n$color-status-error: rgba(236, 63, 63, 0.16);\n\n/* alpha colors */\n$alpha-color-black-1: transparentize($color-black-7, 0.28);\n$alpha-color-black-2: transparentize($color-black, 0.04);\n$alpha-color-black-3: transparentize($color-black-7, 0.92);\n$alpha-color-black-4: transparentize($color-black-7, 0.84);\n$alpha-color-black-5: transparentize($color-black-7, 0.16);\n$alpha-color-black-6: transparentize($color-black-7, 0.36);\n$alpha-color-black-7: transparentize($color-black, 0.5);\n$alpha-color-blue-1: transparentize($color-blue, 0.84);\n$alpha-color-blue-2: transparentize($color-blue-3, 0.84);\n$alpha-color-blue-3: transparentize($color-blue, 0.92);\n$alpha-color-white-1: transparentize($color-white, 0.04);\n$alpha-color-white-2: transparentize($color-white, 0.84);\n$alpha-color-white-3: transparentize($color-white, 0.92);\n$alpha-color-white-4: transparentize($color-white, 0.3);\n$alpha-color-red-1: transparentize($color-red, 0.92);\n$alpha-color-red-2: transparentize($color-red, 0.84);\n$alpha-color-red-3: transparentize($color-red, 0.76);\n$alpha-color-green-1: transparentize($color-green-1, 0.08);\n$alpha-color-green-2: transparentize($color-green-3, 0.08);\n$alpha-color-yellow-1: transparentize($color-yellow, 0.84);\n\n/* gradient colors */\n$gradient-color-green-1: linear-gradient(to top, $color-white, transparentize($color-green-1, 0.84));\n$gradient-color-green-2: linear-gradient(to top, $color-black, transparentize($color-green-3, 0.84));\n$gradient-color-red-1: linear-gradient(to top, $color-white, transparentize($color-red, 0.84));\n$gradient-color-red-2: linear-gradient(to top, $color-black, transparentize($color-red, 0.84));\n$contract-gradient-color-red-1: linear-gradient(to top, $color-white 85%, transparentize($color-red, 0.84));\n$contract-gradient-color-red-2: linear-gradient(to top, $color-black 85%, transparentize($color-red, 0.84));\n$gradient-color-white: linear-gradient(to right, transparentize($color-white, 1) -5%, $color-white 71%);\n$gradient-color-black: linear-gradient(to right, transparentize($color-black, 1) -5%, $color-black 71%);\n\n$gradient-color-purple: linear-gradient(274.73deg, #5a205d 3.82%, #7f3883 88.49%);\n$gradient-color-blue: linear-gradient(274.73deg, #1a205e 3.82%, #122d96 88.49%);\n$gradient-color-orange: linear-gradient(90deg, #eb001b 0%, #f79e1b 100%);\n$gradient-color-black-2: linear-gradient(274.73deg, #464750 3.82%, #0e0f11 88.49%);\n$gradient-color-orange-2: linear-gradient(90deg, #f89e32 0%, #f7931b 103.12%);\n$gradient-color-blue-2: linear-gradient(90deg, #3d83cf 0%, #2775ca 100%);\n$gradient-color-green-3: linear-gradient(90deg, #98cc53 0%, #8dc640 100%);\n$gradient-color-blue-3: linear-gradient(90deg, #1a77ac 0%, #0068a3 100%);\n$gradient-color-orange-3: linear-gradient(90deg, #ff7635 0%, #ff671f 100%);\n$gradient-color-orange-4: linear-gradient(90deg, #f36938 0%, #f25822 100%);\n$gradient-color-blue-4: linear-gradient(90deg, #1a8fff 0%, #0083ff 100%);\n$gradient-color-red-3: linear-gradient(90deg, #ff444f 0%, #211d1e 95.22%);\n$gradient-color-red-4: linear-gradient(90deg, #ff6444 0%, #ff444f 100%);\n$gradient-color-black-3: linear-gradient(58.51deg, #061828 28.06%, #1a3c60 93.51%);\n$gradient-color-black-4: linear-gradient(274.25deg, #333333 9.01%, #5c5b5b 103.31%);\n$gradient-color-black-5: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.16) 100%);\n$gradient-color-white-2: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.16) 100%);\n$gradient-color-blue-5: linear-gradient(90deg, #00a8af 0%, #04cfd8 104.41%);\n$gradient-color-gold: linear-gradient(90deg, #f7931a 0%, #ffc71b 104.41%);\n$gradient-color-green-4: linear-gradient(90deg, #1db193 0%, #09da7a 104.41%);\n\n/* Preserve legacy variables */\n/* Primary */\n\n$COLOR_BLACK: #000000;\n$COLOR_BLACK_2: #1d1f20;\n$COLOR_BLACK_3: #0e0e0e;\n$COLOR_GREEN_1: #39b19d;\n$COLOR_GREEN_2: #2d9f93;\n$COLOR_GREEN_3: #21ce99;\n$COLOR_GREEN_4: #00a79e;\n$COLOR_GREEN_5: #4bb4b3;\n$COLOR_ORANGE: #ff9933;\n$COLOR_DARK_ORANGE: #ff8802;\n$COLOR_PURPLE: #4f60ae;\n$COLOR_RED: #e31c4b;\n$COLOR_RED_2: #cc2e3d;\n$COLOR_RED_3: #ec3f3f;\n$COLOR_CORAL_RED: #ff444f;\n$COLOR_SKY_BLUE: #2196f3;\n$COLOR_WHITE: #ffffff;\n$COLOR_BLUE: #1c5ae3;\n// Light theme\n$COLOR_LIGHT_BLACK_1: rgba(0, 0, 0, 0.8);\n$COLOR_LIGHT_BLACK_2: rgba(0, 0, 0, 0.4);\n$COLOR_LIGHT_BLACK_3: rgba(0, 0, 0, 0.16);\n$COLOR_LIGHT_BLACK_3_SOLID_1: #d6d6d6;\n$COLOR_LIGHT_BLACK_3_SOLID_2: #b3b3b3;\n$COLOR_LIGHT_BLACK_4: rgba(0, 0, 0, 0.04);\n$COLOR_LIGHT_BLACK_4_SOLID: #f4f4f6;\n$COLOR_LIGHT_GRAY_1: #999cac;\n$COLOR_LIGHT_GRAY_2: rgba(153, 156, 172, 0.32);\n$COLOR_LIGHT_GRAY_3: #eaeced;\n$COLOR_LIGHT_GRAY_4: #6e6e6e;\n$COLOR_LIGHT_GRAY_5: #c2c2c2;\n$COLOR_LIGHT_GRAY_6: #f2f3f4;\n$COLOR_LIGHT_GREEN_GRADIENT: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(0, 148, 117, 0.16));\n$COLOR_LIGHT_RED_GRADIENT: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(227, 28, 75, 0.16));\n$COLOR_LIGHT_WHITE_GRADIENT: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));\n// Dark theme\n$COLOR_DARK_BLACK_GRADIENT: linear-gradient(to right, rgba(16, 19, 32, 1), rgba(16, 19, 32, 0));\n$COLOR_DARK_BLUE_1: #0b0e18;\n$COLOR_DARK_BLUE_2: #101320;\n$COLOR_DARK_BLUE_3: #191c31;\n$COLOR_DARK_BLUE_4: #202641;\n$COLOR_DARK_BLUE_5: #2a3052;\n$COLOR_DARK_BLUE_6: #555975;\n$COLOR_DARK_BLUE_7: #7f8397;\n$COLOR_DARK_BLUE_8: rgba(127, 131, 151, 0.3);\n$COLOR_DARK_GREEN_GRADIENT: linear-gradient(to top, rgba(16, 19, 32, 0), rgba(0, 148, 117, 0.16));\n$COLOR_DARK_RED_GRADIENT: linear-gradient(to top, rgba(16, 19, 32, 0), rgba(227, 28, 75, 0.16));\n$COLOR_DARK_GRAY_1: #282a37;\n$COLOR_DARK_GRAY_2: #303342;\n$COLOR_DARK_GRAY_3: #555975;\n$COLOR_DARK_GRAY_4: #999999;\n/* stylelint-enable color-no-hex */\n\n$BORDER_RADIUS: 4px;\n$BORDER_RADIUS_2: 8px;\n\n$MAX_CONTAINER_WIDTH: 1440px;\n\n$POSITIONS_DRAWER_WIDTH: 240px;\n$POSITIONS_DRAWER_MARGIN: 8px;\n\n$HEADER_HEIGHT: 48px;\n$FOOTER_HEIGHT: 36px;\n\n$MOBILE_HEADER_HEIGHT: 40px;\n$MOBILE_HEADER_HEIGHT_DASHBOARD: 48px;\n$MOBILE_WRAPPER_HEADER_HEIGHT: 40px;\n$MOBILE_WRAPPER_FOOTER_HEIGHT: 70px;\n\n$SIDEBAR_WIDTH: 240px;\n\n/* Wallet gradient background */\n$gradient-airtm: linear-gradient(90deg, #1a8fff 0%, #0083ff 100%);\n$gradient-banxa: linear-gradient(90deg, #000000 0%, #4ac0ba 96.35%);\n$gradient-bitcoin: linear-gradient(90deg, #f89e32 0%, #f7931b 103.12%);\n$gradient-credit: linear-gradient(274.73deg, #464750 3.82%, #0e0f11 88.49%);\n$gradient-dp2p: linear-gradient(90deg, #ff444f 0%, #211d1e 95.22%);\n$gradient-fasapay: linear-gradient(90deg, #f6931c 0%, #4873ac 95.22%);\n$gradient-jeton: linear-gradient(90deg, #ff7635 0%, #ff671f 100%);\n$gradient-mastercard: linear-gradient(90deg, #eb001b 0%, #f79e1b 100%);\n$gradient-neteller: linear-gradient(90deg, #98cc53 0%, #8dc640 100%);\n$gradient-paylivre: linear-gradient(90deg, #352caa 0%, #9a6bfc 100%);\n$gradient-paysafe: linear-gradient(90deg, #e3001b 0%, #008ac9 100%);\n$gradient-perfectmoney: linear-gradient(90deg, #f12c2c 0%, #ef1515 100%);\n$gradient-skrill: linear-gradient(274.73deg, #5a205d 3.82%, #7f3883 88.49%);\n$gradient-sticpay: linear-gradient(90deg, #f36938 0%, #f25822 100%);\n$gradient-virtual: linear-gradient(90deg, #ff6444 0%, #ff444f 100%);\n$gradient-visa: linear-gradient(274.73deg, #1a205e 3.82%, #122d96 88.49%);\n$gradient-webmoney: linear-gradient(90deg, #1a77ac 0%, #0068a3 100%);\n\n/* App Cards gradient background */\n$gradient-virtual: linear-gradient(274.25deg, #333333 9.01%, #5c5b5b 103.31%);\n$gradient-virtual-swap-free: linear-gradient(58.51deg, #061828 28.06%, #1a3c60 93.51%);\n\n/* Wallets */\n$ready-banner-bg-color: #e2f3f3;\n$ready-banner-tick-bg-color: #4ab4b3;\n$wallet-demo-bg-color: #fff8f9;\n$wallet-dark-demo-bg-color: #140506;\n$wallet-demo-divider-color: #fff0f1;\n$wallet-box-shadow: 0px 12px 16px -4px rgba(14, 14, 14, 0.08), 0px 4px 6px -2px rgba(14, 14, 14, 0.03);\n$btn-shadow: 0px 24px 24px 0px rgba(0, 0, 0, 0.08), 0px 0px 24px 0px rgba(0, 0, 0, 0.08);\n\n/*------------------------------------*\n *  # SASS Mixins and Functions\n *------------------------------------*/\n\n/*\n * SASS interpolation\n */\n// Requires the calc-interpolation function which can also be used independently\n@function calc-interpolation($min-screen, $min-value, $max-screen, $max-value) {\n    $a: ($max-value - $min-value) / ($max-screen - $min-screen);\n    $b: $min-value - $a * $min-screen;\n\n    $sign: '+';\n    @if ($b < 0) {\n        $sign: '-';\n        $b: abs($b);\n    }\n    @return calc(#{$a * 100}vw #{$sign} #{$b});\n}\n\n@mixin interpolate($properties, $min-screen, $max-screen, $min-value, $max-value) {\n    & {\n        @each $property in $properties {\n            #{$property}: $min-value;\n        }\n        @media screen and (min-width: $min-screen) {\n            @each $property in $properties {\n                #{$property}: calc-interpolation($min-screen, $min-value, $max-screen, $max-value);\n            }\n        }\n        @media screen and (min-width: $max-screen) {\n            @each $property in $properties {\n                #{$property}: $max-value;\n            }\n        }\n    }\n}\n\n/*\n * PX to EM\n * @param $px - px value to be converted\n * @param $base - base font size (in `em`)\n * Note: 'em' values are calculate based on the element font-size\n *       to properly converts 'px' to 'em', please pass in the element font-size with it\n * Usage example:\n    padding: em(16px, 1.6em); // font-size in 'em'\n */\n@function em($px, $base: $BASE_FONT_SIZE) {\n    $list: ();\n    @if length($px) != 1 {\n        @for $i from 1 through length($px) {\n            $val_em: (nth($px, $i) / $base) * 1em;\n            $list: append($list, $val_em, space);\n        }\n        @return $list;\n    } @else {\n        @return ($px / $base) * 1em;\n    }\n}\n\n/*\n * Set property by passing a property name, and values.\n * @param $property name - padding, margin etc.\n * @param $values        - values in `px` (space separated for multiple values)\n * @param $font-size     - base font-size in `em`\n * Usage example:\n   @include toEm(padding, 8px 16px 8px, 1.6em);\n */\n@mixin toEm($property, $values, $font-size: $BASE_FONT_SIZE) {\n    #{$property}: em($values, $font-size);\n}\n\n/*\n * Generate typefaces key-value pair of variable name and config\n * Example:\n   --paragraph-center-bold-black: (14px, center, bold, black)\n */\n@function generate-typefaces() {\n    $typeface_list: ();\n    @each $fontsize_name, $size in $FONT_SIZES {\n        @each $textalign_name, $text_align in $TEXT_ALIGN {\n            @each $color_name, $color in $FONT_COLORS {\n                @each $fontweight_name, $weight in $FONT_WEIGHTS {\n                    $key: --#{$fontsize_name}-#{$textalign_name}-#{$fontweight_name}-#{$color_name};\n                    $val: ($size, $text_align, $weight, $color);\n                    $typeface: (\n                        $key: $val,\n                    );\n                    $typeface_list: map-merge($typeface_list, $typeface);\n                }\n            }\n        }\n    }\n    // @debug $typeface_list; /* uncomment to debug */\n    @return $typeface_list;\n}\n\n/*\n * Sets font-size, font-weight, color, text-transform, text-align and line-height\n * Usage example:\n   @include setTypeface(16px, bold, black, uppercase);\n */\n@mixin setTypeface($size, $align, $weight, $colour, $tt) {\n    @if $size {\n        font-size: $size;\n    }\n    @if $colour {\n        color: $colour;\n    }\n    @if $weight {\n        font-weight: $weight;\n    }\n    @if $tt {\n        text-transform: $tt;\n    }\n    @if $align {\n        text-align: $align;\n    }\n    @if $size == 1.6rem {\n        line-height: map-get($map: $LINEHEIGHTS, $key: 'large');\n    } @else if $size == 1.4rem {\n        line-height: map-get($map: $LINEHEIGHTS, $key: 'medium');\n    } @else if $size == 1.2rem {\n        line-height: map-get($map: $LINEHEIGHTS, $key: 'small');\n    } @else if $size == 1rem {\n        line-height: map-get($map: $LINEHEIGHTS, $key: 'xsmall');\n    } @else {\n        line-height: unset;\n    }\n}\n\n/*\n * Set typefaces by passing a typeface variable name\n * @param $var   - typeface variable\n * @param $tt    - text-transform property\n * @param $align - text-align property\n * Usage example:\n   @include typeface(--paragraph-bold-black, uppercase, center);\n */\n@mixin typeface($var, $tt: none) {\n    $typeface_config: map-get(\n        $map: $TYPEFACES_LIST,\n        $key: $var,\n    );\n\n    $size: nth($typeface_config, 1); // font-size\n    $align: nth($typeface_config, 2); // text-align\n    $weight: nth($typeface_config, 3); // font-weight\n    $color: nth($typeface_config, 4); // color\n    @include setTypeface($size, $align, $weight, $color, $tt);\n}\n\n/*\n * Range Slider Thumb styling is set here\n */\n@mixin thumbStyle() {\n    appearance: none;\n    width: 1em;\n    height: 1em;\n    border-radius: 100%;\n    border: 0;\n    cursor: pointer;\n    transition: box-shadow 0.2s;\n    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0);\n\n    &:hover {\n        box-shadow: 0 0 0 0.5em var(--state-hover);\n    }\n}\n\n/*\n * SVG icons colors\n */\n@mixin colorIcon($colors...) {\n    @for $i from 1 through length($colors) {\n        /* postcss-bem-linter: ignore */\n        .color#{$i}-fill {\n            fill: nth($colors, $i);\n        }\n        /* postcss-bem-linter: ignore */\n        .color#{$i}-stroke {\n            stroke: nth($colors, $i);\n        }\n    }\n}\n\n/*\n * Bar Spinner Animation\n * @param $count    - number of bars\n * @param $duration - duration of animation\n * @param $phase    - each bar phase change delay\n * Usage example:\n   @include createBarspinnerAnimation(5, 1.2s, 0,1);\n */\n@mixin createBarspinnerAnimation($count, $duration, $phase) {\n    animation: sk-stretchdelay $duration infinite ease-in-out;\n\n    @for $i from 1 through $count {\n        &--#{$i} {\n            animation-delay: -$duration + (($i - 1) * $phase);\n        }\n    }\n}\n\n/*\n * Tooltip colors\n * @param $color - color property\n * Usage example:\n   @include tooltipColor($COLOR_RED);\n */\n@mixin tooltipColor($color) {\n    &:before {\n        background: $color;\n    }\n    &:after,\n    &[data-tooltip-pos='top']:after {\n        border-top-color: $color;\n    }\n    &[data-tooltip-pos='right']:after {\n        border-top-color: transparent;\n        border-right-color: $color;\n    }\n    &[data-tooltip-pos='left']:after {\n        border-top-color: transparent;\n        border-left-color: $color;\n    }\n    &[data-tooltip-pos='bottom']:after {\n        border-top-color: transparent;\n        border-bottom-color: $color;\n    }\n}\n\n/*\n * Convert Tooltip colors\n * @param $color - css color property\n * Usage example:\n   @include convertTooltipColor(var(--status-default));\n */\n@mixin convertTooltipColor($color) {\n    &:before {\n        background: $color;\n    }\n    &:after,\n    &[data-tooltip-pos='top']:after {\n        border-top-color: $color;\n    }\n    &[data-tooltip-pos='right']:after {\n        border-top-color: transparent;\n        border-right-color: $color;\n    }\n    &[data-tooltip-pos='left']:after {\n        border-top-color: transparent;\n        border-left-color: $color;\n    }\n    &[data-tooltip-pos='bottom']:after {\n        border-top-color: transparent;\n        border-bottom-color: $color;\n    }\n}\n\n/*\n    Constants\n*/\n$FONT_STACK: 'IBM Plex Sans', sans-serif;\n$BASE_FONT_SIZE: 10px;\n\n/*\n    Variables\n*/\n$FONT_SIZES: (\n    'xheading' 3.2rem,\n    'heading' 3rem,\n    'large' 2.8rem,\n    'title' 1.6rem,\n    'paragraph' 1.4rem,\n    'small' 1.2rem,\n    'xsmall' 1rem,\n    'xxsmall' 0.8rem,\n    'xxxsmall' 0.6rem\n);\n\n$FONT_COLORS: (\n    'active' var(--text-colored-background),\n    'prominent' var(--text-prominent),\n    'black' var(--text-general),\n    'grey' var(--text-less-prominent),\n    'disabled' var(--text-disabled),\n    'green' var(--text-profit-success),\n    'red' var(--text-loss-danger)\n);\n\n$FONT_WEIGHTS: ('bold' 700, 'semibold' 500, 'normal' 400, 'light' 300);\n\n$TEXT_ALIGN: ('center' center, 'left' left, 'right' right);\n\n$LINEHEIGHTS: (\n    'large': 1.75,\n    'medium': 1.5,\n    'small': 1.25,\n    'xsmall': 1.4,\n);\n\n/*\n    List of all typefaces variables in the format: --$FONT_SIZES-$TEXT_ALIGN-$FONT_WEIGHTS-COLORS.\n    See $FONT_SIZES, $TEXT_ALIGN, $FONT_WEIGHTS, $COLORS maps above for references.\n    Variables name example: --title-center-semibold-red\n */\n$TYPEFACES_LIST: generate-typefaces();\n\n/*\n    to use styles without modifier class on .inline-icon\n    use @extend\n\n    e.g. style icon on parent hover:\n        a:hover .inline-icon {\n            @extend %inline-icon-active;\n        }\n*/\n\n%inline-icon {\n    @include colorIcon(var(--text-general), none);\n\n    &.active,\n    &-active {\n        @include colorIcon(var(--text-prominent), none);\n    }\n    &.disabled,\n    &-disabled {\n        @include colorIcon(var(--text-disabled), none);\n    }\n    &.white,\n    &-white {\n        @include colorIcon(var(--text-prominent));\n    }\n    &.border_hover_color,\n    &-border_hover_color {\n        @include colorIcon(var(--text-prominent));\n    }\n    &.secondary,\n    &-secondary {\n        @include colorIcon(var(--text-less-prominent));\n    }\n}\n\n/**\n * Define Breakpoints here.\n */\n$mobile-width: 320px;\n$tablet-width: 768px;\n$desktop-width: 1024px;\n\n@mixin tablet {\n    @media (min-width: #{$tablet-width}) and (max-width: #{$desktop-width - 1px}) {\n        @content;\n    }\n}\n\n@mixin desktop {\n    @media (min-width: #{$desktop-width}) {\n        @content;\n    }\n}\n\n@mixin tablet-down {\n    @media (max-width: #{$tablet-width}) {\n        @content;\n    }\n}\n\n@mixin tablet-up {\n    @media (min-width: #{$tablet-width}) {\n        @content;\n    }\n}\n\n@mixin mobile-up {\n    @media (min-width: #{$mobile-width}) {\n        @content;\n    }\n}\n\n@mixin mobile {\n    @media (min-width: #{$mobile-width}) and (max-width: #{$tablet-width - 1}) {\n        @content;\n    }\n}\n\n@mixin mobile-landscape {\n    @media only screen and (min-width: #{$mobile-width}) and (max-width: #{$desktop-width - 1}) and (orientation: landscape) {\n        @content;\n    }\n}\n\n@mixin touch-device {\n    // add css interaction media query to detect touch devices\n    // refer to: https://caniuse.com/#feat=css-media-interaction\n    @media (pointer: coarse) {\n        @content;\n    }\n}\n\n@mixin mobile-tablet-mix {\n    @media (min-width: #{$mobile-width}) and (max-width: #{$desktop-width - 1px}) {\n        @content;\n    }\n}\n\n.error-modal {\n    &__body {\n        padding: 0 2.4rem;\n\n        @include mobile {\n            padding: 0 1.6rem;\n        }\n    }\n}\n"],sourceRoot:""}]);const l=i},4178:(n,e,r)=>{var a=r(6062),o=r(1939);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.id,o,""]]);var t={insert:"head",singleton:!1};a(o,t);n.exports=o.locals||{}},8753:(n,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>s});var a=r(8156),o=r(5099),t=r.n(o),i=r(4309),l=r(1336),c=r(1630),$=r(4047),d=function(n){var e=n.error_message,r=n.error_modal_button_text,o=void 0===r?"Ok":r,t=n.error_modal_title,i=n.has_close_icon,d=n.onClose,p=n.width,s=(0,$.M)(),g=s.hideModal,f=s.is_modal_open;return a.createElement(l.Modal,{className:"error-modal",has_close_icon:i,is_open:f,title:t,width:p},a.createElement(l.Modal.Body,{className:"error-modal__body"},e),a.createElement(l.Modal.Footer,null,a.createElement(l.Button,{large:!0,primary:!0,onClick:null!=d?d:g},a.createElement(c.Xx,{i18n_default_text:o}))))};d.propTypes={error_message:t().string,error_modal_button_text:t().string,error_modal_title:t().string,has_close_icon:t().bool,onClose:t().func,width:t().string};const p=(0,i.Pi)(d);r(4178);const s=p}}]);
//# sourceMappingURL=p2p.error-modal.b11cbbbdf87fdfcbf832.js.map