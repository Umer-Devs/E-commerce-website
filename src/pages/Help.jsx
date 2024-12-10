const Help = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-16">
      {/* Page Title */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          How Can We Help?
        </h1>
        <p className="text-xl text-gray-600">
          Get quick answers and support for all your Local Loot questions
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              question: "How do I list an item for sale?",
              answer:
                "Click the 'Sell' button in the navigation bar, fill out the item details, add photos, set your price, and publish your listing.",
            },
            {
              question: "How do I contact a seller?",
              answer:
                "Click on any listing and use the 'Message Seller' button to start a conversation through our secure messaging system.",
            },
            {
              question: "Is Local Loot safe to use?",
              answer:
                "We prioritize your safety with verified user profiles, secure messaging, and recommended safe meeting spots for transactions.",
            },
            {
              question: "How do payments work?",
              answer:
                "Local Loot facilitates cash transactions between buyers and sellers. We recommend meeting in safe, public locations for exchanges.",
            },
          ].map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold">
                  {index + 1}
                </span>
                {faq.question}
              </h3>
              <p className="mt-3 text-gray-600 pl-11">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-lg opacity-90">
            Our support team is available 24/7 to assist you
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-md">
            Report an Issue
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white rounded-xl font-semibold hover:bg-white/10 transition-colors duration-300">
            Contact Support
          </button>
        </div>
      </div>

      {/* Useful Links Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Useful Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { 
              href: "/safety-guidelines", 
              text: "Safety Guidelines",
              icon: "🛡️"
            },
            { 
              href: "/community-rules", 
              text: "Community Rules",
              icon: "👥"
            },
            { 
              href: "/privacy-policy", 
              text: "Privacy Policy",
              icon: "🔒"
            },
            { 
              href: "/terms-of-service", 
              text: "Terms of Service",
              icon: "📜"
            },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <span className="text-2xl">{link.icon}</span>
              <span className="font-medium text-gray-800">{link.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
