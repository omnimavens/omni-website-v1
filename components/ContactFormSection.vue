<template>
  <section class="uni-cta-section">
        <div class="container">
            <div class="uni-grid">
                
                <div class="uni-content" data-aos="fade-right">
                    <h2>Ready to <span style="color:#E08322;">Dominate?</span><br>Let's Discuss Strategy.</h2>
                    <p>
                        We don't just sell services; we deliver measurable business outcomes. Book a consultation to see how we can help you capture more market share and increase profitability.
                    </p>
                    
                    <ul class="uni-list">
                        <li>
                            <div class="uni-bullet"></div>
                            <div class="uni-text-wrap">
                                <h4>Strategic Growth Roadmap</h4>
                                <p>A clear, step-by-step plan to hit your revenue targets.</p>
                            </div>
                        </li>
                        <li>
                            <div class="uni-bullet"></div>
                            <div class="uni-text-wrap">
                                <h4>Competitor Analysis</h4>
                                <p>See exactly how to outperform your rivals in Search & Ads.</p>
                            </div>
                        </li>
                        <li>
                            <div class="uni-bullet"></div>
                            <div class="uni-text-wrap">
                                <h4>Transparent ROI Projections</h4>
                                <p>Know what to expect before you spend a single dollar.</p>
                            </div>
                        </li>
                        <hr style="margin-bottom: 35px;border: none; border-top: 2px solid #222;">
                        <li>
                            <div class="uni-bullet"></div>
                            <div class="uni-text-wrap">
                                <h4><a href="tel:9274824894" class="hover:text-white">+91 92748 24894</a></h4>
                                <p>Contact us</p>
                            </div>
                        </li>
                        <li>
                            <div class="uni-bullet"></div>
                            <div class="uni-text-wrap">
                                <h4 class="accent"><a href="mailto:info@omnimavens.com" class="hover:text-white">info@omnimavens.com</a></h4>
                                <p>Email us at</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="uni-form-card" data-aos="fade-left">
                <form @submit.prevent="methods.handleSubmit" method="POST">
                    <!-- Website -->
                    <div class="uni-group">
                        <label class="uni-label">Website URL <span style="color:#E08322">*</span></label>
                        <input 
                        v-model="state.form.url" 
                        type="url" 
                        placeholder="https://yourcompany.com"
                        class="uni-input"
                        @input="methods.clearErrors"
                        required
                        >
                        <div class="invalid-input">{{ state.errors.url }}</div>
                    </div>


                    <!-- Name + Email -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                        <div>
                        <label class="uni-label">Name <span style="color:#E08322">*</span></label>
                        <input 
                            v-model="state.form.name" 
                            type="text" 
                            placeholder="Your Name" 
                            class="uni-input"
                            @input="methods.clearErrors"
                            required
                        >
                        </div>

                        <div>
                        <label class="uni-label">Work Email <span style="color:#E08322">*</span></label>
                        <input 
                            v-model="state.form.email" 
                            type="email" 
                            placeholder="email@example.com" 
                            class="uni-input"
                            @input="methods.clearErrors"
                            required
                        >
                        </div>
                    </div>


                    <!-- Phone -->
                    <div class="uni-group">
                        <label class="uni-label">Phone Number <span style="color:#E08322">*</span></label>

                        <div class="phone-group">
                        <select v-model="state.form.country_code" class="uni-select">
                            <option value="+91">🇮🇳 +91</option>
                            <option value="+1">🇺🇸 +1</option>
                            <option value="+44">🇬🇧 +44</option>
                            <option value="+61">🇦🇺 +61</option>
                            <option value="+971">🇦🇪 +971</option>
                        </select>

                        <input 
                            v-model="state.form.phone"
                            type="tel" 
                            placeholder="98765 43210" 
                            class="uni-input" 
                            @input="methods.clearErrors"
                            required
                        >
                        </div>
                    </div>


                    <!-- Primary Goal -->
                    <div class="uni-group">
                        <label class="uni-label">Primary Goal <span style="color:#E08322">*</span></label>
                        <select v-model="state.form.goal" class="uni-select" required>
                        <option value="" disabled>Select your objective...</option>
                        <option value="Revenue">Increase Revenue / Sales</option>
                        <option value="Leads">Generate Qualified Leads</option>
                        <option value="Brand">Build Brand Authority</option>
                        <option value="Fix">Fix Technical / Performance Issues</option>
                        <option value="Other">Other / Custom Project</option>
                        </select>
                    </div>


                    <!-- Budget -->
                    <div class="uni-group">
                        <label class="uni-label">Monthly Budget Range</label>
                        <select v-model="state.form.budget" class="uni-select">
                        <option value="" disabled selected>Select a range...</option>
                        <option value="under_1k">Less than $1,000</option>
                        <option value="1k_5k">$1,000 - $5,000</option>
                        <option value="5k_10k">$5,000 - $20,000</option>
                        <option value="20k_plus">$20,000+</option>
                        </select>
                    </div>


                    <!-- Message -->
                    <div class="uni-group">
                        <label class="uni-label">Project Details</label>
                        <textarea
                        v-model="state.form.message"
                        placeholder="Briefly describe your challenges or goals..."
                        class="uni-textarea"
                        @input="methods.clearErrors"
                        required
                        ></textarea>
                    </div>


                    <!-- Submit -->
                    <button type="submit" class="uni-btn">
                        Request Consultation <i class="fa-solid fa-arrow-right"></i>
                    </button>

                    <p style="text-align:center;font-size:12px;color:#555;margin-top:15px;">
                        <i class="fa-solid fa-lock"></i> 100% Secure. No spam.
                    </p>

                    </form>
            </div>

            </div>
        </div>
    </section>
</template>

<script setup>

    import { useCommonLibrary } from '@/composables/useCommonLibrary';
    
const { $api } = useCommonLibrary()
const state = reactive({
  form: {
    url: '',
    name: '',
    email: '',
    country_code: '+91',
    phone: '',
    goal: '',
    budget: '',
    message: '',
  },
  errors: {},
  captcha: { num1: 0, num2: 0, operator: '' },
  showModal: false,
})

const methods = {

    acceptCookies: () => {
        document.cookie = "cookiesAccepted=true; max-age=" + 60 * 60 * 24 * 15;
        state.showCookiePopup = false;
    },

    rejectCookies: () => {
        document.cookie = "cookiesRejected=true; max-age=" + 60 * 60 * 24 * 15;
        state.showCookiePopup = false;
    },

    handleSubmit: async () => {
        let isValid = true;

        // --------------------
        //  FORM VALIDATION
        // --------------------

        // Name
        if (!state.form.name.trim()) {
            state.errors.name = "Enter your Name";
            isValid = false;
        }

        // Email
        if (!state.form.email.trim()) {
            state.errors.email = "Enter your email";
            isValid = false;
        }

        // Message
        if (!state.form.message.trim()) {
            state.errors.message = "Enter your message";
            isValid = false;
        }

        // Phone
        if (!state.form.phone.trim()) {
            state.errors.phone = "Enter your phone number";
            isValid = false;
        }

        // Website URL (basic validation)
        if (!state.form.url.trim()) {
            state.errors.url = "Enter your Website URL";
            isValid = false;
        }

        // Primary Goal
        if (!state.form.goal) {
            state.errors.goal = "Select your primary goal";
            isValid = false;
        }


        if (!isValid) return;

        methods.clearErrors();
        //showLoader();

        try {
            // --------------------
            //  PREPARE FORM DATA
            // --------------------
            const formData = new FormData();
            formData.append("url", state.form.url);
            formData.append("name", state.form.name);
            formData.append("email", state.form.email);
            formData.append("phone", state.form.phone);
            formData.append("country_code", state.form.country_code);
            formData.append("goal", state.form.goal);
            formData.append("budget", state.form.budget);
            formData.append("message", state.form.message);

            // --------------------
            //  API REQUEST
            // --------------------
            await $api.post("/api/v1/frontend/contact", formData);

            //hideLoader();

            // --------------------
            //  RESET FIELDS
            // --------------------
            Object.assign(state.form, {
                url: "",
                name: "",
                email: "",
                phone: "",
                country_code: "+91",
                goal: "",
                budget: "",
                message: "",
            });

            // Refresh captcha
            methods.generateCaptcha();

            // Show success modal
            state.showModal = true;

        } catch (error) {
            //hideLoader();
            console.log(error);

            const message =
                error.response?.data?.message || "Something went wrong, please try again.";
           // showToast("error", message);
        }
    },

    clearErrors: () => {
        state.errors = {
            name: "",
            email: "",
            message: "",
            phone: "",
            url: "",
            goal: "",
            captcha: "",
        };
    },

    generateCaptcha: () => {
        const operators = ["+", "-", "*"];
        const operator = operators[Math.floor(Math.random() * operators.length)];

        let num1 = Math.floor(Math.random() * 10) + 1;
        let num2 = Math.floor(Math.random() * 10) + 1;

        // Ensure positive subtraction
        if (operator === "-" && num2 > num1) {
            [num1, num2] = [num2, num1];
        }

        state.captcha.num1 = num1;
        state.captcha.num2 = num2;
        state.captcha.operator = operator;

        // Reset captcha input
        state.errors.captcha = "";
    }
};

</script>

