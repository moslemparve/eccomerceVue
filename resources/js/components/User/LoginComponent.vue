<template>
    <div>
        <Menu />
        <Header />
        <div class="all_content">
            <!--===== Product up section ========-->
            <div class="product_up_section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="product_up_section_all">
                                <div class="product_up_sec_left">
                                    <ul class="product_up_left_ul">
                                        <li>
                                            <i class="fas fa-home"></i>
                                        </li>
                                        <li>Componet</li>
                                        <li>Processer</li>
                                        <li>AMD</li>
                                    </ul>
                                </div>
                                <div class="product_up_sec_right">
                                    <p>Login</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--===== Product up section End ========-->

            <div class="all_product_section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <!--=====  login section left========-->
                                <LoginSection />
                                <!--=====  login section left end========-->

                                <!--=====  login section right========-->
                                <div class="col-md-12 col-lg-9 col-12">
                                    <div class="login_section_right">
                                        <div class="row">
                                            <div
                                                class="col-lg-6 col-md-6 col-12"
                                            >
                                                <div class="login_card_left">
                                                    <h3
                                                        class="login_card_title"
                                                    >
                                                        New Customer
                                                    </h3>
                                                    <p class="login_P1">
                                                        Register Account
                                                    </p>
                                                    <p class="login_P2">
                                                        By creating an account
                                                        you will be able to shop
                                                        faster, be up to date on
                                                        an order's status, and
                                                        keep track of the orders
                                                        you have previously
                                                        made.
                                                    </p>
                                                    <a
                                                        href="register.html"
                                                        class="button_login"
                                                        >CONTINUE</a
                                                    >
                                                </div>
                                            </div>
                                            <div
                                                class="col-lg-6 col-md-6 col-12"
                                            >
                                                <div class="login_card_left">
                                                    <form
                                                        action=""
                                                        @submit.prevent="login"
                                                        @keydown="
                                                            form.onKeydown(
                                                                $event
                                                            )
                                                        "
                                                    >
                                                        <h3
                                                            class="login_card_title"
                                                        >
                                                            Returning Customer
                                                        </h3>
                                                        <p class="login_P1">
                                                            I am a returning
                                                            customer
                                                        </p>
                                                        <div
                                                            class="login_card_input_section"
                                                        >
                                                            <p
                                                                class="login_input_p"
                                                            >
                                                                E-Mail Address
                                                            </p>
                                                            <input
                                                                v-model="
                                                                    form.email
                                                                "
                                                                class="login_input"
                                                                type="text"
                                                                name="email"
                                                                placeholder="E-Mail Address"
                                                            />
                                                            <div
                                                                class="text-danger"
                                                                v-if="
                                                                    form.errors.has(
                                                                        'email'
                                                                    )
                                                                "
                                                                v-html="
                                                                    form.errors.get(
                                                                        'email'
                                                                    )
                                                                "
                                                            />
                                                            <div
                                                                v-if="
                                                                    userNotfound ==
                                                                        true
                                                                "
                                                            >
                                                                <div
                                                                    class=" login_card_title text-danger"
                                                                >
                                                                    These
                                                                    credentials
                                                                    does not
                                                                    match our
                                                                    records
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="login_card_input_section"
                                                        >
                                                            <p
                                                                class="login_input_p"
                                                            >
                                                                Password
                                                            </p>
                                                            <input
                                                                class="login_input"
                                                                v-model="
                                                                    form.password
                                                                "
                                                                type="password"
                                                                name="password"
                                                                placeholder="Password"
                                                            />
                                                            <div
                                                                class="text-danger"
                                                                v-if="
                                                                    form.errors.has(
                                                                        'password'
                                                                    )
                                                                "
                                                                v-html="
                                                                    form.errors.get(
                                                                        'password'
                                                                    )
                                                                "
                                                            />
                                                            <a
                                                                class="forpaswrd"
                                                                href="forgot-pasword.html"
                                                                >Forgotten
                                                                Password?</a
                                                            >
                                                        </div>
                                                        <button
                                                            v-show="
                                                                loading == true
                                                            "
                                                            class="button_login"
                                                        >
                                                            <div
                                                                class="loader"
                                                            ></div>
                                                        </button>
                                                        <button
                                                            v-show="
                                                                loading == false
                                                            "
                                                            class="button_login"
                                                        >
                                                            LOGIN
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--=====  login section right end========-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Form from "vform";
import Header from "../HeaderComponent";
import Footer from "../FooterComponent";
import Menu from "../MenuComponent";
import LoginSection from "./SidebarComponent";
export default {
    data: () => ({
        form: new Form({
            email: "",
            password: ""
        }),
        userNotfound: false,
        loading: false
    }),
    methods: {
        async login() {
            this.userNotfound = false;
            this.$Progress.start();
            this.loading = true;
            await this.form
                .post("/api/login")
                .then(response => {
                    if (response.data.message == "user_not_found") {
                        this.userNotfound = false;
                        this.$Progress.fail();
                        this.loading = false;
                    } else if (response.data.user && response.data.token) {
                        // console.log(response)
                        this.$Progress.finish();
                        this.loading = false;
                        this.$store.dispatch(
                            "UserLogin",
                            response.data.user.name
                        );
                        this.$store.dispatch("SetToken", response.data.token);

                        this.$router.push("/");
                    }
                })
                .catch(error => {
                    this.$Progress.fail();
                    this.loading = false;
                    console.log(error);
                });
        }
    },
    components: {
        Header,
        Menu,
        Footer,
        LoginSection
    }
};
</script>
<style scoped>
.loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 100%;
    height: auto;
    animation: spin 2s linear infinite;
    border-bottom: 16px solid blue;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
