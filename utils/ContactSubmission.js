// components/ContactSubmission.js

// Mock ContactSubmission utility for handling contact form submissions
const ContactSubmission = {
  /**
   * Simulate creating a contact submission (e.g., send to API or email)
   * @param {Object} data - { name, email, company, message }
   * @returns {Promise<boolean>} Resolves true on success
   */
  create: async (data) => {
    // Simulate network delay
    await new Promise((res) => setTimeout(res, 1000));
    // Simulate success
    return true;
  },
};

export default ContactSubmission; 