export default {
  data() {
    return {
      invalid: false,
      form: {
        name: '',
        last: '',
        email: '',
        password: '',
      },
      errors: {
        name: false,
        last: false,
        email: false,
        password: false,
      }
    }
  },
  methods: {
    submit() {
      if (!this.valid) {
        if (!this.passwordFilled) {
          this.setError('password');
        } else {
          this.clearError('password')
        }
        if (!this.nameFilled) {
          this.setError('name');
        } else {
          this.clearError('name')
        }
        if (!this.lastFilled) {
          this.setError('last');
        } else {
          this.clearError('last')
        }
        if (!this.emailValid) {
          this.setError('email');
        } else {
          this.clearError('email')
        }
      } else {
        alert('form is valid')
        this.clearForm();
      }
    },
    clearForm() {
      for (const field in this.form) {
        this.form[field] = '';
      }
    },
    hasError(name) {
      return this.errors[name];
    },
    clearError(field) {
      if (this[`${field}Filled`] || this[`${field}Valid`]) {
        this.errors[field] = false;
      }
    },
    setError(field) {
      this.errors[field] = true;
    },
    removeError(field) {
      this.errors[field] = false;
    },
    setPlaceholder(field) {
      if (field === 'name') {
        return 'First Name'
      } else if (field === 'last') {
        return 'Last Name'
      } else {
        return field
      }
    }
  },
  computed: {
    emailValid() {
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
    valid() {
      return !(!this.emailValid ||
        !this.nameFilled ||
        !this.lastFilled ||
        !this.passwordFilled);
    }
  },
};
