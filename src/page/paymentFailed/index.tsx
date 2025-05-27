function PaymentFailed() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 text-green-900 px-4">
      <div className="bg-white border border-red-200 rounded-xl shadow-md p-8 max-w-md w-full text-center">
        <div className="text-red-500 text-4xl font-bold mb-4">😞</div>
        <h1 className="text-2xl font-semibold mb-2">Payment Failed</h1>
        <p className="text-sm text-gray-600 mb-6">
          We couldn’t process your payment. Please try again or contact us if the issue persists.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/"
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition"
          >
            Go to Home
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default PaymentFailed;
