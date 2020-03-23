<template>
    <article class="home-page-one-wrapper">
        <section class="description">
            <h1 class="description">{{ $description }}</h1>
            <div>
                <iframe src="https://ghbtns.com/github-btn.html?user=sublimetext-io&repo=docs.sublimetext.io&type=star&count=true&q=GitHub+Octocat+in:readme+user:defunkt" frameborder="0" scrolling="0" width="100px" height="20px"></iframe>
                <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/sublimetext-io/docs.sublimetext.io?style=social">
            </div>
            <router-link class="btn-about" :to="$frontmatter.actionLink">{{ $frontmatter.actionText }}</router-link>
        </section>
        <section class="md-content-wrapper">
            <Content />
        </section>
    </article>
</template>
<script>
export default {
    data() {
        return {}
    },
    computed: {},
    methods: {},
    mounted() {
        document.onreadystatechange = () => {
            // if (document.readyState == "complete") {
            //     document.querySelector("div.footer-wrapper.footer > span:nth-child(1)").remove()
            // }
        }

    }
}
</script>
<style lang="stylus" scoped>
.home-page-one-wrapper {
    padding-top: 3.4rem;

    section {
        &.description {
            box-sizing: border-box;
            margin: 0 auto 1rem;
            max-width: 46rem;
            width: 100%;
            text-align: center;

            h1 {
                margin-top: 8rem;
            }

            p {
                margin-bottom: 2rem;
                font-family: sans-serif;
            }

            .btn-about {
                margin: 2rem 0;
                display: inline-block;
                padding: .6rem 1.2rem;
                border-radius: 0.25rem;
                background: $accentColor;
                color: #fff;
                font-size: 1rem;
            }

            .banner {
                display: block;
                width: 100%;
            }
        }

        &.wish {
            overflow: hidden;

            &.yesterday,
            &.tomorrow {
                background: var(--code-color);
            }

            .wish-inner {
                box-sizing: border-box;
                margin: 0 auto;
                padding: 2rem;
                max-width: 56rem;
                width: 100%;
                min-height: 25rem;
                display: flex;
                align-items: center;

                >div {
                    flex: auto;

                    &.img-wrapper {
                        max-width: 22rem;

                        img {
                            display: block;
                            width: 100%;
                        }
                    }

                    &.text-wrapper {
                        box-sizing: border-box;
                        padding: 0 2rem;
                    }
                }
            }
        }
    }
}

@media (max-width: $MQMobile) {
    .home-page-one-wrapper {
        section {
            padding: 0 2rem;

            &.description {
                h1 {
                    margin-top: 5rem;
                }

                .btn-about {
                    font-size .9rem
                }
            }

            &.md-content-wrapper {
                padding: 0;
            }

            &.wish {
                .wish-inner {
                    display: block;
                    padding: 2rem 0;

                    .img-wrapper {
                        margin: 0 auto;
                    }
                }
            }
        }
    }
}

@media (max-width: $MQMobileNarrow) {
    .home-page-one-wrapper {
        section {
            padding: 0 2rem;

            &.description {
                h1 {
                    margin-top: 5rem;
                }

                .btn-about {
                    font-size .8rem
                }
            }

            &.md-content-wrapper {
                padding: 0;
            }

            &.wish {
                .wish-inner {
                    display: block;
                    padding: 2rem 0;

                    .img-wrapper {
                        margin: 0 auto;
                    }
                }
            }
        }
    }
}
</style>