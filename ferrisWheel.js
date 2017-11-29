.wheel {
    position: absolute;
    left: 200px;
    top: 200px;

    .car {
        position: absolute;

        width: 50px;
        height: 50px;
        background-color: #f00;

        $len: 8;
        $easeInOutSine: cubic-bezier(0.445, 0.05, 0.55, 0.95);
        $duration: 10s;

        animation: anim-x $duration $easeInOutSine -$duration / 2 infinite alternate, anim-y $duration $easeInOutSine 0s infinite alternate;
        -moz-animation: anim-x $duration $easeInOutSine -$duration / 2 infinite alternate, anim-y $duration $easeInOutSine 0s infinite alternate;
        -webkit-animation: anim-x $duration $easeInOutSine -$duration / 2 infinite alternate, anim-y $duration $easeInOutSine 0s infinite alternate;
        @for $i from 1 through $len {
            &:nth-child(#{$i}) {
                animation-delay: - 2 * $duration * ($i - 1)/ $len - $duration / 2, - 2 * $duration * ($i - 1)/ $len;
                -moz-animation-delay: - 2 * $duration * ($i - 1)/ $len - $duration / 2, - 2 * $duration * ($i - 1)/ $len;
                -webkit-animation-delay: - 2 * $duration * ($i - 1)/ $len - $duration / 2, - 2 * $duration * ($i - 1)/ $len;
            }
        }

    }
}

@keyframes anim-x {
    0% {
        margin-left: -100px;
        // @include transform(translate(-100px, 0px));
    }
    100% {
        margin-left: 100px;
        // @include transform(translate(100px, 0px));
    }
}

@keyframes anim-y {
    0% {
        margin-top: -100px;
        // @include transform(translate(0px, -100px));
    }
    100% {
        margin-top: 100px;
        // @include transform(translate(0px, 100px));
    }
}

@-moz-keyframes anim-x {
    0% {
        margin-left: -100px;
        // @include transform(translate(-100px, 0px));
    }
    100% {
        margin-left: 100px;
        // @include transform(translate(100px, 0px));
    }
}

@-moz-keyframes anim-y {
    0% {
        margin-top: -100px;
        // @include transform(translate(0px, -100px));
    }
    100% {
        margin-top: 100px;
        // @include transform(translate(0px, 100px));
    }
}

@-webkit-keyframes anim-x {
    0% {
        margin-left: -100px;
        // @include transform(translate(-100px, 0px));
    }
    100% {
        margin-left: 100px;
        // @include transform(translate(100px, 0px));
    }
}

@-webkit-keyframes anim-y {
    0% {
        margin-top: -100px;
        // @include transform(translate(0px, -100px));
    }
    100% {
        margin-top: 100px;
        // @include transform(translate(0px, 100px));
    }
}
