export default {
  data() {
    return {
      invalid: false,
      form: {
        name: '',
        email: '',
        title: '',
        company: '',
        message: '',
      },
      errors: {
        name: false,
        email: false,
        title: false,
        message: false,
        company: false,
      }
    }
  },
  methods: {
    submit() {
      if (!this.valid) {
        if (!this.messageFilled) {
          this.setError('message');
        } else {
          this.clearError('message')
        }
        if (!this.nameFilled) {
          this.setError('name');
        } else {
          this.clearError('name')
        }
        if (!this.titleFilled) {
          this.setError('title');
        } else {
          this.clearError('title')
        }
        if (!this.emailValid) {
          this.setError('email');
        } else {
          this.clearError('email')
        }
        if (!this.companyValid) {
          this.setError('company');
        } else {
          this.clearError('company')
        }
      } else {
        alert('form is valid')
        this.clearForm();
      }
    },
    isEmpty(field) {
      return this.form[field].length === 0
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
    availableKeys() {
      return Object.keys(this.form).filter(key => key !== 'message');
    },
    emailValid() {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email);
    },
    nameFilled() {
      return this.form.name.length > 2
    },
    titleFilled() {
      return this.form.title.length > 0
    },
    messageFilled() {
      return this.form.message.length > 0
    },
    companyFilled() {
      return this.form.company.length > 0
    },
    valid() {
      return !(!this.emailValid || !this.nameFilled || !this.titleFilled || !this.companyFilled || !this.messageFilled);
    }
  },
};
