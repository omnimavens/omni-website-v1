<template>
<Loader v-if="isSubmitting" :visible="isSubmitting" />
  <section class="uni-cta-section common-padding">
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
                                <h4><a href="tel:9274824894">+91 92748 24894</a></h4>
                                <p>Contact us</p>
                            </div>
                        </li>
                        <li>
                            <div class="uni-bullet"></div>
                            <div class="uni-text-wrap">
                                <h4 class="accent"><a href="mailto:info@omnimavens.com">info@omnimavens.com</a></h4>
                                <p>Email us at</p>
                            </div>
                        </li>
                        <li>
                            <div class="uni-bullet"></div>
                            <div class="uni-text-wrap">
                                <h4 class="accent">Ahmedabad, India</h4>
                                <p>Location</p>
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
                        placeholder="https://yourcompany.com"
                        class="uni-input"
                        @input="methods.clearErrors"
                        required
                        >
                        <div class="invalid-input">{{ state.errors.url }}</div>
                    </div>


                    <!-- Name + Email -->
                    <div class="two-col">
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
                        <select v-model="state.form.country_code" class="uni-select" aria-label="Country Code">
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
                        <select v-model="state.form.goal" class="uni-select" required aria-label="Primary Goal">
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
                        <select v-model="state.form.budget" class="uni-select" aria-label="Budget">
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
                    <button type="submit" class="uni-btn" :disabled="isSubmitting">
                    <span v-if="!isSubmitting">
                        Request Consultation <i class="fa-solid fa-arrow-right"></i>
                    </span>
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
import { reactive } from "vue";
import { useRouter } from "vue-router";
import Loader from "@/components/Loader.vue";
import { ref } from "vue";
const router = useRouter();
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxij1am_jfuBlUzkLYDQ1CoXffm4ztUvYq01jbywI4IIPCCTYzN6reDUqjwrKfaqN9b/exec"; 
const isSubmitting = ref(false);
isSubmitting.value = false;
const state = reactive({
  form: {
    url: "",
    name: "",
    email: "",
    country_code: "+91",
    phone: "",
    goal: "",
    budget: "",
    message: "",
  },
  errors: {},
  captcha: { num1: 0, num2: 0, operator: "" },
  showModal: false,
});

const methods = {

  handleSubmit: async () => {
  let isValid = true;

  if (!state.form.name.trim()) {
    state.errors.name = "Enter your Name";
    isValid = false;
  }

  if (!state.form.email.trim()) {
    state.errors.email = "Enter your email";
    isValid = false;
  }

  if (!state.form.phone.trim()) {
    state.errors.phone = "Enter your phone number";
    isValid = false;
  }

  if (!state.form.url.trim()) {
    state.errors.url = "Enter your Website URL";
    isValid = false;
  }

  if (!state.form.goal) {
    state.errors.goal = "Select your primary goal";
    isValid = false;
  }

  if (!state.form.message.trim()) {
    state.errors.message = "Enter your message";
    isValid = false;
  }

  if (!isValid) return;

  methods.clearErrors();

  try {
    // SHOW LOADER
    isSubmitting.value = true;
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", //  REQUIRED
      body: JSON.stringify({
        website: state.form.url,
        name: state.form.name,
        email: state.form.email,
        phone: `${state.form.country_code} ${state.form.phone}`,
        goal: state.form.goal,
        budget: state.form.budget,
        message: state.form.message,
      }),
    });

    //  DO NOT READ RESPONSE
    //  ASSUME SUCCESS

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

    router.push("/thank-you");

  } catch (error) {
    // HIDE LOADER (if redirect fails)
    isSubmitting.value = false;
    console.error(error);
    alert("Something went wrong. Please try again.");
  } finally {
    // HIDE LOADER (if redirect fails)
    isSubmitting.value = false;
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

};
</script>