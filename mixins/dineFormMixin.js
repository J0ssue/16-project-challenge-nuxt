export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        date: {
          day: '',
          month: '',
          year: ''
        },
        time: {
          hour: '',
          minute: '',
          hypernyms: 'am'
        }
      },
      options: [
        {
          label: 'AM',
          value: 'am'
        },
        {
          label: 'PM',
          value: 'pm'
        }
      ],
      invalidFormFeedback: ''
    }
  }
}