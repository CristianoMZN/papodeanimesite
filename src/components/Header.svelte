<script>
    import banner from '../img/banner.png';
</script>
<div>
    <a href="/">
        PAPO DE ANIME
        <!-- <img src={banner} alt=""> -->
    </a>
</div>

<style>
    @keyframes title {
        0% {
            text-shadow: 1px 0px 5px blue,
                1px 1px 5px blue,
                0px 1px 5px blue,
                0px 0px 5px blue;
        }

        50% {
            text-shadow:
                1px 0px 2px red,
                1px 1px 2px red,
                0px 1px 2px red,
                0px 0px 2px red;
        }

        100% {
            text-shadow: 1px 0px 5px blue,
                1px 1px 5px blue,
                0px 1px 5px blue,
                0px 0px 5px blue;
        }
    }

    a {
        font-size: 56px;
        font-family: Arial, Helvetica, sans-serif;
        font-family: 'Arial Black';
        font-style: italic;
        font-weight: bolder;
        text-align: center;
        width: 100%;
        display: inline-block;
        color: black;
        text-shadow: 1px 0px 5px blue,
            1px 1px 5px blue,
            0px 1px 5px blue,
            0px 0px 5px blue;
        animation-name: title;
        animation-duration: 5s;
        animation-iteration-count: infinite;
    }

    a:hover {
        text-decoration: none;
    }
</style>