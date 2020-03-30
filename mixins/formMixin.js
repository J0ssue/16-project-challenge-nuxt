export default {
  data() {
    return {
      invalid: false,
      form: {
        name: '',
        last: '',
        email: '',
        password: ''
      },
      errors: {
        name: false,
        last: false,
        email: false,
        password: false
      }
    }
  },
  methods: {
    submit() {
      if (!this.valid) {

      }
    },
    hasError(name) {
      return this.errors[name];
    },
    clearError(name) {
      if (this[`${name}Filled`] || this[`${name}Valid`]) {
        this.errors[name] = false;
      }
    }
  },
  computed: {
    emailFilled() {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email);
    },
    nameFilled() {
      return this.form.name.length > 2
    },
    lastFilled() {
      return this.form.last.length > 2
    },
    passwordFilled() {
      return this.form.password.length > 4
    },
    passwordValid() {
      return /^[A-Za-z]\w{7,14}$/.test(this.form.password);
    },
    valid() {
      if (
        !this.emailValid ||
        !this.nameFilled ||
        !this.lastFilled ||
        !this.passwordFilled ||
        !this.passwordValid
      ) {
        return false
      } else {
        return true
      }
    }
  },
};
